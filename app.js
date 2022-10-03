/*count is only used as a global variable to control
slider
*/
let count = 0;

function PlayandRepeatButton(){
    document.getElementById("repeat").addEventListener("click", function(){
        document.getElementById("repeat").classList.toggle("repeat-1");
    });
    document.getElementById("play").addEventListener("click", function(){
        document.getElementById("play").classList.toggle("pause");
    });
}

function bigScreenSizeSlider(){
    count++;    
    let y;
    let x = document.getElementsByClassName("hide");

    for(y = 0; y < x.length; y++){
        x[y].style.display = "none";
    }
    if(count > x.length){
        count = 1;
    }
    x[count - 1].style.display = "block";
    setTimeout(bigScreenSizeSlider, 3000);
}


let Count = 0;
function mobileScreenSizeSlider(){
    Count++;
    let pictures = ["./Images/omah_lay.jpg", "./Images/olamide_carpe_diem.jpg", "./Images/made_in_lagos.jpg", "./Images/davido.jpg", "./Images/lil_babay1.jpg", "./Images/love_damini.jpg", "./Images/MMVTW.jpg" ];
    let slideShow = document.getElementById("slide-show-container");
    let backgroundColorAdder = document.getElementsByClassName("backgroundColorAdder");
    let innerWidth = window.innerWidth;

    if(Count > pictures.length){
        Count = 1;
    }

    slideShow.style.background = "url(" + pictures[count - 1] + ")"; 
    slideShow.style.backgroundRepeat = "no-repeat";
    slideShow.style.backgroundSize = "cover";
    slideShow.style.backgroundPosition = "center";

    if(innerWidth > 768){
        slideShow.style.background = "none";
    }

    setTimeout(mobileScreenSizeSlider, 0000)
}


function main(){
    PlayandRepeatButton();
    bigScreenSizeSlider();
    mobileScreenSizeSlider();
}
main();