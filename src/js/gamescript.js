//dark button
const darkBtn = document.querySelectorAll(".darkmode");

// slide show
const mainBackground = document.querySelector(".bg-main-slide");
const itemSlide = document.querySelectorAll(".slide-item");

const titleSlideContainer = document.querySelector(".title");

//card list
const cardItem = document.querySelectorAll(".card");

//data content
const titleSlide = {
  pic1: "Bat Man comeback",
  pic2: "Call of Duty Warzone",
  pic3: "Player under Battle Ground",
  pic4: "Call of Duty",
};

//functions
//functions of dark mode
darkBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log("dark");
    document.documentElement.classList.toggle("dark");
  });
});

//functions of slide show
itemSlide.forEach((item) => {
  item.addEventListener("click", (e) => {
    const pic = e.target.dataset.slide;
    console.log(e.target.dataset.slide);
    item.parentElement.classList.add("bg-gray-700");
    item.parentElement.classList.add("p-1");
    item.parentElement.classList.remove("px-2");
    console.log(mainBackground.src);
    mainBackground.src = `/assets/images/${pic}.png`;
    console.log(titleSlideContainer.innerHTML);

    // titleSlide.map(item =>{
    //     console.log(item);

    // })

    if (pic === "pic1") {
      titleSlideContainer.innerHTML = titleSlide.pic1;
    } else if (pic === "pic2") {
      titleSlideContainer.innerHTML = titleSlide.pic2;
    } else if (pic === "pic3") {
      titleSlideContainer.innerHTML = titleSlide.pic3;
    } else if (pic === "pic4") {
      titleSlideContainer.innerHTML = titleSlide.pic4;
    }
    console.log(item.dataset.slide);
    itemSlide.forEach((item) => {
      if (item.dataset.slide !== e.target.dataset.slide) {
        item.parentElement.classList.remove("bg-gray-700");
      }
    });
  });
});

//functions of card items

cardItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.currentTarget.dataset.idcard);
    item.classList.add("transform");
    item.classList.add("scale-110");
    cardItem.forEach((item) => {
      if (item.dataset.idcard !== e.currentTarget.dataset.idcard) {
        item.classList.remove("scale-110");
        item.classList.remove("transform");
      
      }
    });
  });
});
