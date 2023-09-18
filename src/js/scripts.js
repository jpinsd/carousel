/* get all the elements needed */
const carousel = document.querySelector(".carousel");
const progress = document.querySelector(".progress");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const slideCount = slides.length;


prevButton.addEventListener('click', event => {
  const i = parseInt(event.target.dataset.idx);
  prevNext(i);
})

nextButton.addEventListener('click', event => {
  const i = parseInt(event.target.dataset.idx);
  prevNext(i);
})

//set classes
const setActive = idx => {
  slides.forEach((el,i) => {
    el.classList.remove("-active", "-completed");
    slides[idx].classList.add("-active");
    if(idx !== 0) {
      slides[idx-1].classList.add("-completed");
    }
    if(i < idx) {
      slides[i].classList.add("-completed");
    }
  })
}

// prevNext listener
const prevNext = idx => {
  if(idx === 0) {
    prevButton.classList.add("-hide");
  } else {
    prevButton.classList.remove("-hide");
    prevButton.dataset.idx = idx - 1;
  }

  if(idx === slideCount - 1) {
    nextButton.classList.add("-hide");
  } else {
    nextButton.classList.remove("-hide");
    nextButton.dataset.idx = idx + 1;
  }

  setActive(idx)
}

const setIndexes = () => {
  slides.forEach((el,idx) => {
    el.dataset.idx = idx;
  })
  slides[0].classList.add("-active");
  prevNext(0);
}


/*
 _____ __   _ _____ _______
   |   | \  |   |      |
 __|__ |  \_| __|__    |

*/

const init = () => {
  setIndexes();
}

init();
