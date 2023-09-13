let sections = document.querySelectorAll(".section");
let nav = document.querySelector("nav");

let ongoingTansition

if (nav) {
  let links = nav.querySelectorAll("a");
  let observer = new IntersectionObserver((entries, observer) => {
    for (let entry of entries) {
      if (entry.isIntersecting) {
        for (let link of links) link.classList.remove("link-active");
        let selector = "a[href='" + "#" + entry.target.id + "']";
        let link = document.querySelector(selector);
        if (link) link.classList.add("link-active");
        document.body.className = entry.target.id + "-active";
      }
    }
  }, { threshold: 0.5, rootMargin: "0px" });

  for (let section of sections) observer.observe(section);
}

async function getPageContent(url) {
  let response = await fetch(url);
  let text = await response.text();
  return text;
}

function isBackNavigation(event) {
  if (event.navigationType === 'push' || event.navigationType === 'replace') {
    return false;
  }
  if (
    event.destination.index !== -1 &&
    event.destination.index < navigation.currentEntry.index
  ) {
    return true;
  }
  return false;
}

function shouldNotIntercept(event) {
  return (
    !event.canIntercept ||
    event.hashChange ||
    event.downloadRequest ||
    event.formData
  )
}
function onLinkNavigate(callback) {
  navigation.addEventListener("navigate", (event) => {
    if (shouldNotIntercept(event)) return;
    let to = new URL(event.destination.url);
    if (location.origin !== to.origin) return;

    let fromPath = location.pathname;
    let isBack = isBackNavigation(event);

    if (to.pathname.startsWith("/projects") || to.pathname === "/") {
      event.intercept({
        scroll: "manual",
        async handler() {
          if (event.info === "ignore") return;
          await callback({
            toPath: to.pathname,
            fromPath,
            isBack
          });

          await ongoingTansition.updateCallbackDone;

          event.scroll();
          if (event.navigationType === "push" || event.navigationType === "replace") {
            window.scrollTo(0, 0)
          }
        }
      })

    }
  })
}

function getLink(href) {
  let fullLink = new URL(href, location.href).href;

  return [...document.querySelectorAll('a')].find((link) =>
    link.href === fullLink
  );
}

function transitionHelper({
  skipTransition = false,
  classNames = '',
  updateDOM,
}) {
  if (skipTransition || !document.startViewTransition) {
    let updateCallbackDone = Promise.resolve(updateDOM()).then(() => undefined);

    return {
      ready: Promise.reject(Error('View transitions unsupported')),
      domUpdated: updateCallbackDone,
      updateCallbackDone,
      finished: updateCallbackDone,
    };
  }

  let classNamesArray = classNames.split(/\s+/g).filter(Boolean);

  document.documentElement.classList.add(...classNamesArray);

  let transition = document.startViewTransition(updateDOM);
  ongoingTansition = transition;

  transition.finished.finally(() => {
    ongoingTansition = undefined;
    document.documentElement.classList.remove(...classNamesArray)
  });

  return transition;
}

function getNavigationType(fromPath, toPath) {
  if (fromPath === "/" && toPath.startsWith("/projects")) {
    return "to-projects";
  }

  if (fromPath.startsWith("/projects") && toPath === "/") {
    return "from-projects";
  }
}


let parser = new DOMParser();

onLinkNavigate(async ({ fromPath, toPath }) => {
  let type = getNavigationType(fromPath, toPath);
  let content = await getPageContent(toPath);
  let doc = parser.parseFromString(content, "text/html");

  let thumbnail
  let title
  if (type === "to-projects") {
    let link = getLink(toPath);
    thumbnail = link?.parentNode?.querySelector("img");
    title = link?.parentNode?.querySelector(".title");
    if (thumbnail) thumbnail.style.viewTransitionName = "full-embed";
    if (title) title.style.viewTransitionName = "project-title";
  }

  let transition = transitionHelper({
    updateDOM() {
      document.body.innerHTML = doc.body.innerHTML;
      if (type === "from-projects") {
        let link = getLink(fromPath);
        thumbnail = link?.parentNode?.querySelector("img");
        title = link?.parentNode?.querySelector(".title");
        if (thumbnail) thumbnail.style.viewTransitionName = "full-embed";
        if (title) title.style.viewTransitionName = "project-title";
      }
    }
  });

  transition.finished.finally(() => {
    if (thumbnail) thumbnail.style.viewTransitionName = "";
    if (title) title.style.viewTransitionName = "";
  });
})
