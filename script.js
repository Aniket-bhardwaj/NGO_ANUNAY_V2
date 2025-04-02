



function revealtospan() {
    document.querySelectorAll(".reveal")
        .forEach(function (elem) {
            //create 2 span
            var parent = document.createElement("span");
            var child = document.createElement("span");

            //preants and child both sets their respective classes
            parent.classList.add("parent");
            child.classList.add("child");

            //span parent gets child & child gets elem details
            child.innerHTML = elem.innerHTML;
            parent.appendChild(child);

            //elem replaces its value with parent span 
            elem.innerHTML = "";
            elem.appendChild(parent);

        })
}

revealtospan()

var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 175 + "px"
    blur.style.top = dets.y - 175 + "px"

})

var h4all = document.querySelectorAll("#nav h4")

// h4all.forEach(function (elem) {
//     elem.addEventListener("mouseenter", function () {
//         crsr.style.scale = 3
//         crsr.style.border = "0.5px solid #fff"
//         crsr.style.backgroundColor = "transparent"

//     })
//     elem.addEventListener("mouseleave", function () {
//         crsr.style.scale = 1
//         crsr.style.border = "0px solid #81864a"
//         crsr.style.backgroundColor = "#81864a"

//     })
// })


gsap.to("#nav", {
    backgroundColor: "#000",
    height: "85px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11",
        scrub: 1
    }
})

gsap.to("#main1", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main1",
        scroller: "body",
        start: "top -30%",
        end: "top -70%",
        scrub: 2
    }
})

//about us section
gsap.to("#main-about", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main-about",
        scroller: "body",
        start: "top -30%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from("#inspiration img,#inspiration-content", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#inspiration",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 2
    }
})

gsap.from(".about-card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    // stagger:0.2,
    scrollTrigger: {
        trigger: ".about-card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1
    }
})

//about section end


gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 2
    }
})

gsap.from("#founder img,#founder-content", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#founder",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 2
    }
})

gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    // stagger:0.2,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1
    }
})

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4

    }
})

gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4

    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 85%",
        end: "top 80%",
        scrub: 2

    }
})

//project section

let nextDOM = document.getElementById('next');
let prevDOM = document.getElementById('prev');
let carouselDOM  = document.querySelector('.carousel');
let listItemDOM = document.querySelector('.carousel .list');
let thumbnailDOM = document.querySelector('.carousel .thumbnail');

nextDOM.onclick = function(){
    showSlider('next');
}
prevDOM.onclick= function(){
    showSlider('prev');
}
let timeRunning=3000;
let runTimeOut;
let timeAutoNext= 7000;
let runAutoRun = setTimeout(()=>{
    nextDOM.click();
},timeAutoNext);

function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next'){
        console.log("1")
        listItemDOM.appendChild(itemSlider[0]);
        thumbnailDOM.appendChild(itemThumbnail[0]);
        carouselDOM.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length - 1;
        listItemDOM.prepend(itemSlider[positionLastItem]);
        thumbnailDOM.prepend(itemThumbnail[positionLastItem]);
        carouselDOM.classList.add('prev');
    }


    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(()=>{
        carouselDOM.classList.remove('next');
        carouselDOM.classList.remove('prev');
    },timeRunning);

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(()=>{
        nextDOM.click();
    },timeAutoNext);
}

