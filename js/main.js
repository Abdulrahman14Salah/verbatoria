let allBoxes = document.querySelectorAll("#choose-age-item");
let allUls = document.querySelectorAll("#package-section-list");
let allLis = document.querySelectorAll("#package-section");
let allShow = document.querySelectorAll(".package-section-description");
let boxContainer = document.getElementById("package-section-list-wrapper");
// console.log(allShow)
allBoxes.forEach((e) => {
  e.addEventListener("click", function () {
    for (let i = 0; i < allBoxes.length; i++) {
      allBoxes[i].classList.remove("active");
    }
    this.classList.toggle("active");
    for (let i = 0; i < allUls.length; i++) {
      allUls[i].style.display = "none";
    }
    allShow.forEach((e) => {
      e.style.display = "none";
    });
    console.log(e.getAttribute("data-box"))
    document.querySelector(e.getAttribute("data-box")).style.display = "flex";
    for (let i = 0; i < allLis.length; i++) {
      allLis[i].classList.remove("active");
      if (e.getAttribute("data-box") == ".ecological") {
        document.querySelector(".liOne").classList.add("active");
        document.querySelector(".oneOne").style.display = "block";
      } else if (e.getAttribute("data-box") == ".school") {
        document.querySelector(".liTwo").classList.add("active");
        document.querySelector(".twoOne").style.display = "block";
      } else if (e.getAttribute("data-box") == ".mathematican") {
        document.querySelector(".liThree").classList.add("active");
        document.querySelector(".threeOne").style.display = "block";
      } else if (e.getAttribute("data-box") == ".occupation") {
        document.querySelector(".liFour").classList.add("active");
        document.querySelector(".fourOne").style.display = "block";
      } else {
        document.querySelector(".liFive").classList.add("active");
        document.querySelector(".fiveTwo").style.display = "block";
      }
    }
  });
});
allLis.forEach((e) => {
  e.addEventListener("mouseenter", function () {
    allShow.forEach((e) => {
      e.style.display = "none";
    });
    document.querySelector(e.dataset.show).style.display = "block";
    for (let i = 0; i < allLis.length; i++) {
      allLis[i].classList.remove("active");
    }
    e.classList.add("active");
  });
});
let mobile_package_section = document.querySelectorAll(
  ".mobile-package-section"
);
let x = window.matchMedia("(min-width: 768px)");
function app(x) {
  if (x.matches) {
    mobile_package_section.forEach((e) => {
      e.classList.remove("open");
    });
  } else {
    allBoxes.forEach((e) => {
      e.addEventListener("click", function () {
        document
          .querySelector(".mobile-age-package__wrapper" + e.dataset.box)
          .classList.add("show");
      });
    });
    mobile_package_section.forEach((e) => {
      e.addEventListener("click", function () {
        e.children.item(0).children.item(0).classList.toggle("active");
        let child = e.children;
        child.item(1).classList.toggle("open");
      });
    });
  }
}
app(x);
x.addEventListener("change", app);
let allWrapper = document.querySelectorAll(".mobile-age-package__wrapper");
function closePackage() {
  allWrapper.forEach((e) => {
    e.classList.remove("show");
  });
}
closePackage();
