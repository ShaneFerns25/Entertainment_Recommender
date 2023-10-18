var isCard2=0;

function reSelect2(){
    if (isCard2==1){
        isCard2=0;
        const text2 = document.querySelector(".text2");
        const neptune = document.querySelector(".neptune");
        const dropdown2 = document.querySelector(".dropdown2");
        const reselectbtns2 = document.querySelector(".reselect-btns2");
        const neptune_reselectbtn1 = document.querySelector(".neptune-reselect-btn");
        const animateClicked2 = document.querySelector(".clicked2");
        
        neptune_reselectbtn1.classList.add("pressed");
        setTimeout(()=>animateClicked2.classList.remove("visibility-hide"), 600);
        setTimeout(()=>neptune_reselectbtn1.classList.remove("pressed"), 600);
        setTimeout(()=>animateClicked2.classList.add("visibility-hide"), 900);
        const afterDelay = () => {
            neptune.classList.remove("card2");
            animateClicked2.classList.add("visibility-hide")
            reselectbtns2.classList.add("visibility-hide");
            dropdown2.classList.remove("visibility-hide");
            text2.style.opacity= "0";
            
        }
        setTimeout(afterDelay, 2200);
        
    }
}

function changeShape2(val){
    const neptune = document.querySelector(".neptune");
    const text2 = document.querySelector(".text2");
    const dropdown2 = document.querySelector(".dropdown2");
    const reselectbtns2 = document.querySelector(".reselect-btns2");
    const selected = val.getAttribute("name");

    // ajax call to post movie genre
    
    $.ajax({ 
        url: '/moviegenre', 
        type: 'POST',
        data: {'selected':selected},
        success: function(response){ 
            $('#movie_img').attr("src",response[0].image);
            $('#movie_title').html(response[0].title);
            $('#movie_desc').html(response[0].desc);
        } 
    })

    isCard2=1;
    dropdown2.classList.add("visibility-hide");
    setTimeout(()=>reselectbtns2.classList.remove("visibility-hide"),1500);
    const afterDelay = () => {
        neptune.classList.add("card2");
        text2.style.paddingTop= "5px";
        text2.style.opacity= "1";
    }
    setTimeout(afterDelay, 1000);

    console.log(selected);
}