// Variables
const closeBtn = document.querySelector(".fa-times");
const openBtn = document.querySelector(".fa-bars");
//const container = document.querySelector(".container");
//GET ALL THE IMG !
//let allImg = document.querySelector(".carousel").children;
//let prevImg = allImg.length - 1;
let current = 0;

// Functions
const openSidebar = () => {
  document.querySelector(".nav-links").style.right = "0";
  //document.querySelector(".container").style.marginLeft = "250px";
};

const closeSidebar = () => {
  document.querySelector(".nav-links").style.right = "-20rem";
  //document.querySelector(".container").style.marginLeft = "0";
};

const slidingImages = () => {
  //We set the class of the current img to show
  allImg[current].setAttribute("class", "show");
  //We hide the last img
  allImg[prevImg].setAttribute("class", "hide");
  //Update the variables !
  prevImg = current;
  current++;
  //If the current is bigger then the list of images, return to 0
  if (current === allImg.length) current = 0;
  //Recall every 3 sec
  //Note that we don't put () because we don't want to execute it right away
  setTimeout(loop, 3000);
};

// Event Handlers
openBtn.addEventListener("click", () => {
  console.log("open the sidebar");
  openSidebar();
});
closeBtn.addEventListener("click", () => {
  console.log("close the side bar");
  closeSidebar();
});

//slidingImages();

// loop();
