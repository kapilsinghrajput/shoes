
////////////////////////* hero img */

let showimg = document.querySelector(".showimg");
let img_li = document.querySelectorAll(".img_li");

img_li.forEach((iteam)=>{
    iteam.addEventListener("click",()=>{
        showimg.src = iteam.src

        document.querySelector(".activeimg").classList.remove("activeimg");
        iteam.classList.add("activeimg")
    })
})


//////////////////////////////////////////////////////


let menuicon = document.querySelector(".menuicon");
let ul = document.querySelector(".ul")
let fa = document.querySelector(".fa");

menuicon.addEventListener("click",()=>{
    ul.classList.toggle("open");

    let fabar = document.querySelector(".fa-bars")
    fabar.classList.toggle("fa-xmark");

})