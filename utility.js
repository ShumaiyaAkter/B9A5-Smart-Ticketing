
function setSeatColor(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-green-500');
    

}

const seatButtons=document.querySelectorAll(".button")

console.log(seatButtons); 

let count=0;

for (let index=0;index<seatButtons.length;index++){
    const seat=seatButtons[index];
    console.log(seat);
     
    seat.addEventListener("click",function(e){
       
        count=count+1;
        const seatNum=seat.querySelector("h3").innerText;
        console.log(seatNum);

        e.target.setAttribute("disabled", true);

        if (
            getValueById("seat-count") + 1 > 4 ||
            getValueById("seat-left") - 0 < 0
          ) {
            alert("you can't purchase more than 4 tickets");
            return;
          }


        const selectedContainer=document.getElementById("selected-place-container");
        const li=document.createElement("li");
        const p=document.createElement("p");
        const p2=document.createElement("p");
        const p3=document.createElement("p");
        

        p.innerText=seatNum;
        p2.innerText="Economy";
        p3.innerText="550"
        const price=p3.innerText;

        li.appendChild(p)
        li.appendChild(p2)
        li.appendChild(p3)


        const seatLeft=document.getElementById("seat-left").innerText;
        const convertedSeat=parseInt(seatLeft);
        document.getElementById("seat-left").innerText=convertedSeat-1

        if(convertedSeat>8){
            alert("No More seat Available")
            return;

        }


        selectedContainer.appendChild(li);


        // total price 
        totalCost("total-cost",parseInt(price));
        

        // grand-total price 
        grandTotalCost("grand-total",parseInt(price))
        
        
        
        
        // seat count
        setInnerText("seat-count",count);

        const btn=document.getElementById("apply-btn");
        btn.addEventListener("click",function(){
            
            
            const couponElement=document.getElementById("input-field").value;
            const couponCode=couponElement.split(" ").join(" ").toUpperCase();
            console.log(couponCode);
            if(couponCode === "NEW15" || couponCode === "COUPLE 20"){
                grandTotalCost(couponCode);
                btn.setAttribute("disabled", true);
            }
            else{
                alert("Invalid Coupon");
            }
            

        })
        
        
        

     })

    
 }


 


//  innerText function
 function setInnerText(id,value){
    document.getElementById(id).innerText=value;
 }

//  total price
function totalCost(id,value){
    const totalCost=document.getElementById(id).innerText;
        const newTotalCost=parseInt(totalCost);
        const sum=newTotalCost + parseInt(value);
        setInnerText(id,sum);

 }

//  grand-total price
 function grandTotalCost(couponCode){
        const totalCost=document.getElementById("total-cost").innerText;
        const newTotalCost=parseInt(totalCost);

        if(couponCode === "NEW15"){
            setInnerText("grand-total",newTotalCost*0.85);
        }
        else if(couponCode === "COUPLE 20"){
            setInnerText("grand-total",newTotalCost*0.8);

        }
        else{
            setInnerText("grand-total",newTotalCost)
        }
        
    
 }


 function getValueById(id) {
    const targetElement = document.getElementById(id).innerText;
    return parseInt(targetElement);
  }



