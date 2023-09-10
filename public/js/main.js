htmx.onLoad(function (content) {
  // let sections = content.querySelectorAll(".section");
  // if (sections.length) {
  //   let nav = content.querySelector("nav");
  //   let links = nav.querySelectorAll("a");
  //   let observer = new IntersectionObserver((entries, observer) => {
  //     for (let entry of entries) {
  //       if (entry.isIntersecting) {
  //         window.location.hash = entry.target.id;
  //         for (let link of links) link.classList.remove("link-active");
  //         let selector = "a[href='" + "#" + entry.target.id + "']";
  //         let link = content.querySelector(selector);
  //         if (link) link.classList.add("link-active");
  //       }
  //     }
  //   }, { threshold: 0.5, rootMargin: "0px" });
  //   for (let section of sections) observer.observe(section);
  // }
})
