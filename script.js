
let coin = 100;
let count = 0;

// heart feature section
const heartShow = document.querySelector(".heart_show"); // only one number display
const heartClick = document.getElementsByClassName("fa-heart");

for (const x of heartClick) {
  x.addEventListener("click", function () {
    count++;
    heartShow.innerText = count;
  });
}





// coin feature section

