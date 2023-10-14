// var cnt=0
// function isHidden(){
//     cnt++;
//     const dropdownBtn = document.querySelector(".dropdown-content");
//     const computedStyles = window.getComputedStyle(dropdownBtn);
//     const dropdown = document.querySelectorAll("li");
//     const arrow = document.querySelector(".arrow")
//     if (cnt==2&&computedStyles.visibility=="visible"){
//         arrow.style.transform="rotate(0deg)";
//         dropdownBtn.style.visibility="hidden";
//         for (liElems of dropdown) liElems.style.left="100%"
//         cnt=0;
//     }
// }

var isCard=0;

function reSelect(){
    if (isCard==1){
        isCard=0;
        const venus = document.querySelector(".venus");
        const dropdownbtn = document.querySelector(".dropdown-btn");
        const reselectbtns = document.querySelector(".reselect-btns");
        const reselectbtn1 = document.querySelector(".reselect-btn");
        const animateClicked = document.querySelector(".clicked");
        
        reselectbtn1.classList.add("pressed");
        setTimeout(()=>animateClicked.classList.remove("visibility-hide"), 600);
        setTimeout(()=>reselectbtn1.classList.remove("pressed"), 600);
        setTimeout(()=>animateClicked.classList.add("visibility-hide"), 900);
        const afterDelay = () => {
            venus.classList.remove("card");
            animateClicked.classList.add("visibility-hide")
            reselectbtns.classList.add("visibility-hide");
            dropdownbtn.classList.remove("visibility-hide");
            
            
        }
        setTimeout(afterDelay, 2200);
        
    }
}

function changeShape(){
    const venus = document.querySelector(".venus");
    const text = document.querySelector(".text");
    const dropdownbtn = document.querySelector(".dropdown-btn");
    const reselectbtns = document.querySelector(".reselect-btns");

    isCard=1;
    dropdownbtn.classList.add("visibility-hide");
    setTimeout(()=>reselectbtns.classList.remove("visibility-hide"),2000);
    venus.classList.add("card");
    text.style.paddingTop= "85px";
    text.style.opacity= "1";

    console.log("here");
}

// const dropdown = document.querySelectorAll("li");
// console.log(dropdown);