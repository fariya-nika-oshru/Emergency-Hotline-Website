
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


const coinShow = document.querySelector(".coin_show"); // only one number display
const callClick = document.getElementsByClassName("call_button");


for (const x of callClick) {
  x.addEventListener("click", function () {


    if(coin < 20){
        alert("Your coin is less than 20, can't make direct call anymore!\n Tips : You can copy the number instead."); 
        return;
    }
    else{

        const callButtons = document.getElementsByClassName("call_button");

for (const btn of callButtons) {
  btn.addEventListener("click", function (event) {
    // Use event.currentTarget to always get the button itself
    const button = event.currentTarget;

    // Find the card parent
    const card = button.closest(".h-300px");

    // Get service name and number inside the card
    const serviceName = card.querySelector(".service_name").innerText;
    const serviceNumber = card.querySelector(".service_number").innerText;

    alert("Service: " + serviceName + "\nNumber: " + serviceNumber);
  });
}

      
        coin = coin - 20;
        coinShow.innerText = coin;
            }
        
        });
    }

 




// coin feature section


//  // grab all buttons
//   const callButtons = document.getElementsByClassName("call_button");

//   // loop through each button
//   for (const btn of callButtons) {
//     btn.addEventListener("click", function () {
//         console.log("called")
//       // find the coin display inside the same card
//       const coinShow = this.parentElement.querySelector(".coin_show");

//       // subtract 20 from the current number
//       coinShow.innerText = parseInt(coinShow.innerText) - 20;
//     });
//   }

// const callButtons = document.getElementsByClassName("call_button");

// for (const btn of callButtons) {
//   btn.addEventListener("click", function () {
//     console.log("called");
//     const coinShow = this.nextElementSibling; // assumes <h1> comes right after button
//     coinShow.innerText = parseInt(coinShow.innerText) - 20;
//   });
// }

//call history feature

//------------------transactions section features
    document.getElementsByClassName("call_button").addEventListener("click", function(){
        const historyContainer = document.getElementById("history-container");
        historyContainer.innerText = "";

        for(const data of transactionsData){
       
        const div = document.createElement("div");

        div.innerHTML = `
        <div >
                <h1 class="font-bold my-2 text-lg">Fire Service Number</h1>
                <p class="text-gray-600">999</p>
            </div>
            <div>
                <h1> Date().toLocaleTimeString()</h1>
            </div>
        `
        historyContainer.appendChild(div);
             
        }
    })