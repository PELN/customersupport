
document.addEventListener("DOMContentLoaded", getData);

let requestObj;
let done = document.querySelector("#done");
// let button;

// fetch json
async function getData(){
    let template = document.querySelector("#request");
    let section = document.querySelector("#itemSection");
    
    requestObj = await fetch("https://kea-alt-del.dk/customersupport/");
    request = await requestObj.json();
    // console.log(request);

// clone template
request.forEach(function(element) {
    let clone = template.cloneNode(true).content;

// clone data to each element
    clone.querySelector("#importance").textContent = element.importance;
    if (element.middle === undefined) {
        clone.querySelector("#name").textContent = element.first + " " + element.last;
    }
    else {
        clone.querySelector("#name").textContent = element.first + " " + element.middle + " " + element.last;
    }
    clone.querySelector("#place").textContent = "Place: " + element.place;
    clone.querySelector("#message").textContent = "Message: " + element.message;
    clone.querySelector("#full").textContent = element.full;

    if (element.importance > 60 ) {
        clone.querySelector("#importance").style.backgroundColor = "red";
    }
    
    else if (element.importance > 30) {
        clone.querySelector("#importance").style.backgroundColor = "yellow";
    }


    clone.querySelector("#show").addEventListener("click", ()=>{
        let clicked = event.target;
        let element = clicked.nextElementSibling;
        // let element = document.querySelector("#full");

        if (element.style.display === "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });

    clone.querySelector("#completed").addEventListener("click", ()=>{
        let clicked = event.target;
        let li = clicked.parentElement;
        li.style.display = "none";

            // li.addEventListener("animationend", myEndFunction);

            // function myEndFunction() {
            //     this.style.transform = "translateY(-300px)";
            // }


        // document.querySelector("#all").style.transform = "translateY(-300px)";

        
    });


    section.appendChild(clone);
});

}























