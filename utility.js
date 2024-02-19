
function setSeatColor(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-green-500');

}

const seatButtons=document.querySelectorAll(".button")
// video te cards=seatButtons
console.log(seatButtons); 

let count=0;

for (let index=0;index<seatButtons.length;index++){
    const seat=seatButtons[index];
    console.log(seat);
     // video te card=seat
    seat.addEventListener("click",function(e){
        // console.log("clicked");
        count=count+1;
        const seatNum=seat.querySelector("h3").innerText;
        console.log(seatNum);

        const selectedContainer=document.getElementById("selected-place-container");
        const li=document.createElement("li");
        const p=document.createElement("p");
        const p2=document.createElement("p2");
        const p3=document.createElement("p3");
        

        p.innerText=seatNum;
        p2.innerText="Economy";
        p3.innerText="550"

        li.appendChild(p)
        li.appendChild(p2)
        li.appendChild(p3)
        selectedContainer.appendChild(li);


        setInnerText("seat-count",count);


        
        

     })

    
 }


//  innerText function
 function setInnerText(id,value){
    document.getElementById(id).innerText=value;
 }