function setSeatColor(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-green-500');

}
const seatButtons=document.querySelectorAll(".button")
// video te cards=seatButtons
console.log(seatButtons); 

for (let index=0;index<seatButtons.length;index++){
    const seat=seatButtons[index];
    console.log(seat);
     // video te card=seat
    seat.addEventListener("click",function(){
        // console.log("clicked");

        const seatNum=seat.querySelector("h3").innerText;
        // const price=seat.querySelector("h4").innerText;
        console.log(seatNum)
        

     })

    
 }