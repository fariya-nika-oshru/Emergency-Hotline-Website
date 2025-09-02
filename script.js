let coin = 100;
let count = 0;

const history = [];

// heart feature section



const heartShow = document.querySelector(".heart_show"); // only one number display
const heartClick = document.getElementsByClassName("fa-heart");

for (const x of heartClick) {
  x.addEventListener("click", function () {
    count++;
    heartShow.innerText = count;
  });
}




// call feature
const coinShow = document.querySelector(".coin_show"); // only one number display
const callClick = document.getElementsByClassName("call_button");


for (const x of callClick) {
  x.addEventListener("click", function () {


    if(coin < 20){
        alert("Your coin is less than 20, can't make direct call anymore!\n Tips : You can copy the number instead."); 
        return;
    }
    else{
        coin = coin - 20;
        coinShow.innerText = coin;
            }
        
        });
    }

    // national-emergency service

    const nationalEmergencyName = document.getElementById("national_service").innerText;
    const nationalEmergencyNumber = document.getElementById("national_number").innerText;

    document.getElementById("national_call_button").addEventListener("click", function(){
        if(coin >= 20){
            alert("📞 Calling  " + nationalEmergencyName + " " + nationalEmergencyNumber + ".....");
        }

        const data  = {
            name : nationalEmergencyName,
            number : nationalEmergencyNumber,
            date : new Date().toLocaleTimeString()
        }
        history.push(data);
    })

    // police helpline service
    const policeEmergencyName = document.getElementById("police_service").innerText;
    const policeEmergencyNumber = document.getElementById("police_number").innerText;

    document.getElementById("police_call_button").addEventListener("click", function(){
        if(coin >= 20){
            alert("📞 Calling  " + policeEmergencyName + " " + policeEmergencyNumber+ ".....");
        }

        const data  = {
            name : policeEmergencyName,
            number : policeEmergencyNumber,
            date : new Date().toLocaleTimeString()
        }
        history.push(data);
    })




    // fire helpline service
    const fireEmergencyName = document.getElementById("fire_service").innerText;
    const fireEmergencyNumber = document.getElementById("fire_number").innerText;

    document.getElementById("fire_call_button").addEventListener("click", function(){
        if(coin >= 20){
            alert("📞 Calling  " + fireEmergencyName + " " + fireEmergencyNumber+ ".....");
        }

        const data  = {
            name : fireEmergencyName,
            number : fireEmergencyNumber,
            date : new Date().toLocaleTimeString()
        }
        history.push(data);
    })


    // police helpline service
    const ambulanceEmergencyName = document.getElementById("ambulance_service").innerText;
    const ambulanceEmergencyNumber = document.getElementById("ambulance_number").innerText;

    document.getElementById("ambulance_call_button").addEventListener("click", function(){
        if(coin >= 20){
            alert("📞 Calling  " + ambulanceEmergencyName + " " + ambulanceEmergencyNumber+ ".....");
        }

        const data  = {
            name : ambulanceEmergencyName,
            number : ambulanceEmergencyNumber,
            date : new Date().toLocaleTimeString()
        }
        history.push(data);
    })

    // police helpline service
    const womanEmergencyName = document.getElementById("woman_service").innerText;
    const womanEmergencyNumber = document.getElementById("woman_number").innerText;

    document.getElementById("woman_call_button").addEventListener("click", function(){
        if(coin >= 20){
            alert("📞 Calling  " + womanEmergencyName + " " + womanEmergencyNumber+ ".....");
        }

        const data  = {
            name : womanEmergencyName,
            number : womanEmergencyNumber,
            date : new Date().toLocaleTimeString()
        }
        history.push(data);
    })









    //call history feature section

    const callButtons = document.getElementsByClassName("call_button");
    //as we are getting the element by class name, we can not use event listener directly. Need for of for that
    //storing the parent
    const historyContainer = document.getElementById("call_history");
    

    for(const btn of callButtons){
        btn.addEventListener("click", function(){

            if(coin <20 )   return; //this tiny little shit cost my 30 min of time!

            historyContainer.innerText = "";
                for(const data of history){

                    const div = document.createElement("div");
                    div.innerHTML = `
                        <div id="history_container" class=" flex justify-between items-center bg-gray-100 p-4 my-3 rounded-lg">
          
                            <div >
                                <h1 class="font-bold my-2 text-lg">${data.name}</h1>
                                <p class="text-gray-600">${data.number}</p>
                            </div>
                             <div>
                                <h1>${data.date}</h1>
                            </div>
            
                        </div>
                        `

                    historyContainer.appendChild(div);
                }
    })
    }

    //clear history feature
    document.getElementById("clear_button").addEventListener("click", function(){
        historyContainer.innerText = "";
    })
    



    //copy button 
    const buttons = document.getElementsByClassName("copy_button");

for (const btn of buttons) {
  btn.addEventListener("click", function () {
    // grab the parent card of the button
    const card = this.closest(".card"); 
    
    // get the number text inside that card
    const number = card.querySelector(".service_number").innerText;

    // copy to clipboard
    navigator.clipboard.writeText(number).then(() => {
      alert("Emergency Hotline: " + number + " copied ✅");
    }).catch(err => {
      console.error("Copy failed", err);
    });
  });
}

