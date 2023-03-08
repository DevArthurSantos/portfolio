//Init tooltips
tippy(".link", {
  placement: "bottom",
});

//Toggle mode
const toggle = document.querySelector(".js-change-theme");
const body = document.querySelector("body");
const profile = document.getElementById("profile");

function altTemplaterModeTotoBlack() {
  toggle.innerHTML = "🌙";
  body.classList.remove("text-gray-100");
  body.classList.add("text-gray-900");
  profile.classList.remove("bg-gray-900");
  profile.classList.add("bg-white");
  localStorage.setItem("templateMode", "toBlack");
}
function altTemplaterModeTotoWhite() {
  toggle.innerHTML = "☀️";
  body.classList.remove("text-gray-900");
  body.classList.add("text-gray-100");
  profile.classList.remove("bg-white");
  profile.classList.add("bg-gray-900");
  localStorage.setItem("templateMode", "toWhite");
}

function checkCurrentTemplate(mode){
  if (mode === "toWhite") {
    altTemplaterModeTotoBlack();
  } else {
    altTemplaterModeTotoWhite();
  }
}

if (localStorage.getItem("templateMode") === "toWhite") altTemplaterModeTotoWhite()
if (!localStorage.getItem("templateMode") || localStorage.getItem("templateMode") === "toBlack") altTemplaterModeTotoBlack();

toggle.addEventListener("click", () => {
  checkCurrentTemplate(localStorage.getItem("templateMode"))
});
