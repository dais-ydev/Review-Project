const container = document.querySelectorAll("img");
const array = [...container];
const radioContainer = document.querySelectorAll("input[type=radio]")
const radioArray = [...radioContainer];

let index = 0;


//!!!remove the last, show the first but not checked the first radio
function autoImgSlider () {

  if (index === 0) { //pick the last
    radioArray[index].checked = true;
    array[index].style.opacity = 1;
    index++;
    return;
  } else if (index === array.length) {

    array[index - 1].style.opacity = 0; // remove the last
    index = 0; //pick the first
    array[index].style.opacity = 1; // show first
    radioArray[index].checked = true;
    index++;
    return;
  }
  radioArray[index].checked = true;
  array[index].style.opacity = 1;
  array[index - 1].style.opacity = 0;
  index++;
}

const timer = setInterval (autoImgSlider, 3000)

function manualImgSlider () {
  for (const radio of radioArray) {
    array[Number(radio.value)].style.opacity = 0;
    if (radio.checked) {
      index = Number(radio.value);
      array[index].style.opacity = 1;
    }
  }
}

for (const trial of radioArray) {
  trial.addEventListener("change", manualImgSlider)
}


const renderSongs = (array) => {
  const songsHTML = array
    .map((song)=> {
      return `
      <li id="song-${song.id}" class="playlist-song">
      <button class="playlist-song-info">
          <span class="playlist-song-title">${song.title}</span>
          <span class="playlist-song-artist">${song.artist}</span>
          <span class="playlist-song-duration">${song.duration}</span>
      </button>
      <button class="playlist-song-delete" aria-label="Delete ${song.title}">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
      </button>
      </li>
      `;
    })
};
