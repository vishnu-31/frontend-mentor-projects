let selectedValue = undefined;

function onClick(element){

    let inp = element.children[0];
    let allElements = document.querySelectorAll(".radio-input")
    for(i of allElements){
        i.children[0].checked=false;
        i.classList.add("unchecked")
        i.classList.remove("checked")
    }
    if (!inp.checked){
        inp.checked = true;
        element.classList.remove("unchecked")
        element.classList.add("checked")
        selectedValue = inp.value;
        // console.log(selectedValue)
    }
}

function onSubmit(){

    if(selectedValue !== undefined){

        let score = document.getElementById("scored");
        score.textContent =" "+selectedValue+" ";
        console.log(score.innerHTML);
        let mainElement = document.getElementsByClassName("start-page")[0];
        let thankYouElement = document.getElementsByClassName("thank-you")[0];
        console.log(" main element before",mainElement)
        console.log(" thank-you element before",thankYouElement)
        mainElement.classList.remove("active");
        mainElement.classList.add("inactive");
        thankYouElement.classList.remove("inactive");
        thankYouElement.classList.add("active");
    }
}