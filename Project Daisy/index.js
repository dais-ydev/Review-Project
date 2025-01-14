//Theme Changer Dark/Light Mode
const themeCheckbox = document.getElementById("switch")
const isCheck = themeCheckbox.checked;
const rootElement = document.querySelector(":root");
const sss = document.getElementById("switch-container");

function themeSwitch () {
  const isCheck = themeCheckbox.checked;
  console.log(isCheck);
  const colors = ["#ffffff", "#0b0a0d"]
  if (isCheck) {
    rootElement.style.setProperty("--black-white", colors[0]);
    rootElement.style.setProperty("--white-black", colors[1]);
    sss.style.backgroundColor =  "var(--violet)";

  } else {
    rootElement.style.setProperty("--black-white", colors[1]);
    rootElement.style.setProperty("--white-black", colors[0]);
    sss.style.backgroundColor =  "white";
  }
}  
themeCheckbox.addEventListener("change", themeSwitch)

//Banner 
const bannerContainer = document.getElementById("banner-container");
const bannerContainerImg = bannerContainer.querySelectorAll("img");
const bannerImg = [...bannerContainerImg];
const bannerContainerRadio = bannerContainer.querySelectorAll("input[type=radio]");
const bannerNav = [...bannerContainerRadio];
let bannerIndex = 0;

function autoImgSlider () {
  if (bannerIndex === 0) { //pick the last
    bannerNav[bannerIndex].checked = true;
    bannerImg[bannerIndex].style.opacity = 1;
    bannerIndex++;
    return;
  } else if (bannerIndex === bannerImg.length) {

    bannerImg[bannerIndex - 1].style.opacity = 0; // remove the last
    bannerIndex = 0; //pick the first
    bannerImg[bannerIndex].style.opacity = 1; // show first
    bannerNav[bannerIndex].checked = true;
    bannerIndex++;
    return;
  }
  bannerNav[bannerIndex].checked = true;
  bannerImg[bannerIndex].style.opacity = 1;
  bannerImg[bannerIndex - 1].style.opacity = 0;
  bannerIndex++;
}

function manualImgSlider () {
  for (const radio of bannerNav) {
    bannerImg[Number(radio.value)].style.opacity = 0;
    if (radio.checked) {
      bannerIndex = Number(radio.value);
      bannerImg[bannerIndex].style.opacity = 1;
    }
  }
}
//Banner Triggers
autoImgSlider()
const autoImgSliderTimer = setInterval (autoImgSlider, 5000)
for (const bannerNavs of bannerNav) {
  bannerNavs.addEventListener("change", manualImgSlider)
}

const menuBar = document.getElementById("menu-bar");

function menu () {
  
}

menuBar.addEventListener("click", menu)


