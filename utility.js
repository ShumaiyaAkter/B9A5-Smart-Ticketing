
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
        setInnerText("seat-count",count);


        const seatNum=seat.querySelector("h3").innerText;
        console.log(seatNum)
        

     })

    
 }


//  innerText function
 function setInnerText(id,value){
    document.getElementById(id).innerText=value;
 }