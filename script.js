// Variables
const closeBtn = document.querySelector(".closebtn");
const openBtn = document.querySelector(".openbtn");
const container = document.querySelector(".container");
//GET ALL THE IMG !
let allImg = document.querySelector(".slider").children;
let prevImg = allImg.length - 1;
let current = 0;

// Functions
const openSidebar = () => {
  document.getElementById("mySidebar").style.width = "250px";
  document.querySelector(".container").style.marginLeft = "250px";
};

const closeSidebar = () => {
  document.getElementById("mySidebar").style.width = "0";
  document.querySelector(".container").style.marginLeft = "0";
};

const slidingImages = () => {
  //We set the class of the current img to show
  listPict[current].setAttribute("class", "show");
  //We hide the last img
  listPict[old].setAttribute("class", "hide");
  //Update the variables !
  old = current;
  current++;
  //If the current is bigger then the list of images, return to 0
  if (current === listPict.length) current = 0;
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

// //The timeout will recall this function every 3 sec
// function loop() {
//   //We set the class of the current img to show
//   listPict[current].setAttribute("class", "show");
//   //We hide the last img
//   listPict[old].setAttribute("class", "hide");

//   //Update the variables !
//   old = current;
//   current++;

//   //If the current is bigger then the list of images, return to 0
//   if (current === listPict.length) current = 0;

//   //Recall every 3 sec
//   //Note that we don't put () because we don't want to execute it right away
//   setTimeout(loop, 3000);
// }

// loop();
