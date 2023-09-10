let sections = document.querySelectorAll(".section");
let nav = document.querySelector("nav");
let links = nav.querySelectorAll("a");
let observer = new IntersectionObserver((entries, observer) => {
  for (let entry of entries) {
    if (entry.isIntersecting) {
      // TODO: this is bad, remote this
      window.location.hash = entry.target.id;
      for (let link of links) link.classList.remove("link-active");
      let selector = "a[href='" + "#" + entry.target.id + "']";
      let link = document.querySelector(selector);
      if (link) link.classList.add("link-active");
    }
  }
}, { threshold: 0.5, rootMargin: "0px" });
for (let section of sections) observer.observe(section);
