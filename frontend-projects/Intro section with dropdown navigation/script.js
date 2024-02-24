const features = document.getElementById("fea-drop-down");
const hidedivfea = document.getElementById("hide-div-fea");
const changedown = document.getElementById("change-down");
const changeup = document.getElementById("change-up");

var clickhide = 0;

features.addEventListener("click", function () {
  if (clickhide == 0) {
    hidedivfea.style.opacity = "1";
    changedown.style.display = "none";
    changeup.style.display = "block";
    clickhide = 1;
  } else {
    hidedivfea.style.opacity = "";
    changedown.style.display = "block";
    changeup.style.display = "none";
    clickhide = 0;
  }
});

const company = document.getElementById("com-drop-down");
const comdropdown = document.getElementById("com-drop-down");
const changedown1 = document.getElementById("change-down1");
const changeup1 = document.getElementById("change-up1");
const hidedivcom = document.getElementById("hide-div-com");

var clickhide1 = 0;

company.addEventListener("click", function () {
  if (clickhide1 == 0) {
    hidedivcom.style.opacity = "1";
    changedown1.style.display = "none";
    changeup1.style.display = "block";
    clickhide1 = 1;
  } else {
    hidedivcom.style.opacity = "";
    changedown1.style.display = "block";
    changeup1.style.display = "none";
    clickhide1 = 0;
  }
});

{
  const mobfeadropdown = document.getElementById("mob-fea-drop-down");
  const mobhidedivfea = document.getElementById("mob-hide-div-fea");
  const mobchangedown = document.getElementById("mob-change-down");
  const mobchangeup = document.getElementById("mob-change-up");

  let mobhide = 0;

  mobfeadropdown.addEventListener("click", function () {
    if (mobhide == 0) {
      mobhidedivfea.style.display = "block";
      mobchangeup.style.display = "block";
      mobchangedown.style.display = "none";
      mobhide = 1;
    } else {
      mobhidedivfea.style.display = "none";
      mobchangeup.style.display = "none";
      mobchangedown.style.display = "block";
      mobhide = 0;
    }
  });

  const mobcomdropdown = document.getElementById("mob-com-drop-down");
  const mobhidedivcom = document.getElementById("mob-hide-div-com");
  const mobcomchangedown = document.getElementById("mob-com-change-down");
  const mobcomchangeup = document.getElementById("mob-com-change-up");

  let mobhide1 = 0;

  mobcomdropdown.addEventListener("click", function () {
    if (mobhide == 0) {
      mobhidedivcom.style.display = "block";
      mobcomchangeup.style.display = "block";
      mobcomchangedown.style.display = "none";
      mobhide = 1;
    } else {
      mobhidedivcom.style.display = "none";
      mobcomchangeup.style.display = "none";
      mobcomchangedown.style.display = "block";
      mobhide = 0;
    }
  });
}

{
  const opennav = document.getElementById("opennav");
  const closenav = document.getElementById("closenav");
  const mobileMenu = document.getElementById("mobileMenu");
  const slidedright = document.getElementsByClassName("slided-right");
  const blackbg = document.getElementById("blackbg");

  let toggle = 0;

  opennav.addEventListener("click", function () {
    mobileMenu.style.visibility = "block";
    mobileMenu.style.opacity = "1";
    mobileMenu.style.transform = "translateX(0)";
    blackbg.style.display = "block";
    toggle = 1;
  });

  closenav.addEventListener("click", function () {
    mobileMenu.style.visibility = "none";
    mobileMenu.style.opacity = "0";
    mobileMenu.style.transform = "translateX(100%)";
    blackbg.style.display = "none";
    toggle = 0;
  });
}
