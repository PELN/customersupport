
document.addEventListener("DOMContentLoaded", getData);

let requestObj;

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

    
    clone.querySelector("#show").addEventListener("click", clickShow);
    
    

    clone.querySelector("#completed").addEventListener("click", complete);
    // append child
    section.appendChild(clone);
});

}


// read more button, hide/show `full` on click
function clickShow() {
    let element = document.querySelector("#full");
    // document.querySelector("#full").style.visibility = "visible";
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}



// button for completed / remove request - on animationend: alert: are you sure you want to remove the request?
//append to another place

function complete() {
    console.log("completedddd")
    
    alert("are you sure you want to remove the")


}




















