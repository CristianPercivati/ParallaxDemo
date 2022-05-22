    const firstSection = {
        ground : document.querySelector("#ground"),
        backMountains : document.querySelector("#back-mountains"),
        sky : document.querySelector("#sky"),
        planet1 : document.querySelector("#planet-1"),
        planet2 : document.querySelector("#planet-2"),
        planet3 : document.querySelector("#planet-3"),
        text : document.querySelector("#text-1")
    }

    const secondSection = {
        stars1 : document.querySelector("#stars-1"),
        stars2 : document.querySelector("#stars-2"),
        stars3 : document.querySelector("#stars-3"),
        text : document.querySelector("#text-2"),
        breakpoint : $("#stars-1").offset().top
    }

    const thirdSection = {
        ground : document.querySelector("#night-ground"),
        backMountains : document.querySelector("#night-background-mountains"),
        sky : document.querySelector("#night-sky"),
        planet : document.querySelector("#night-planet"),
        stars1 : document.querySelector("#night-stars-1"),
        stars2 : document.querySelector("#night-stars-2"),
        stars3 : document.querySelector("#night-stars-3"),
        wind1 : document.querySelector("#night-wind-1"),
        wind2 : document.querySelector("#night-wind-2"),
        wind3 : document.querySelector("#night-wind-3"),
        text : document.querySelector("#text-3"),
        breakpoint : $("#night-sky").offset().top

    }



window.addEventListener('scroll',function () {
let valueY = window.scrollY;

firstSection.ground.style.transform = `translateY(${valueY * 0.1}px)`; 
firstSection.backMountains.style.transform = `translateY(${valueY * 0.25}px)`; 
firstSection.sky.style.transform = `translateY(${valueY * 0.25}px)`;
firstSection.planet1.style.transform = `translateY(-${valueY * 0.25}px)`;   
firstSection.planet2.style.transform = `translateY(${valueY * 0.35}px)`;   
firstSection.planet3.style.transform = `translateY(${valueY * 0.55}px)`;   
firstSection.text.style.marginLeft = valueY * 0.5+'px';   

secondSection.stars1.style.transform = `translateX(${valueY * 0.25 - (secondSection.breakpoint*0.25)}px)`;
secondSection.stars1.style.transform = `translateY(${valueY * 0.25 - (secondSection.breakpoint*0.25)}px)`;
secondSection.stars2.style.transform = `translateY(${valueY * 0.5 - (secondSection.breakpoint*0.5)}px)`;
secondSection.stars3.style.transform = `translateX(${valueY * 0.20 - (secondSection.breakpoint*0.20)}px)`;

thirdSection.backMountains.style.transform = `translateY(${valueY * 0.25 - (thirdSection.breakpoint*0.25)}px)`;
thirdSection.planet.style.transform = `translateY(${valueY * 0.5 - (thirdSection.breakpoint*0.5)}px)`; 
thirdSection.stars1.transform = `translateY(${valueY * 0.35 - (thirdSection.breakpoint*0.35)}px)`; 
thirdSection.stars2.style.transform = `translateY(${valueY * 0.55 - (thirdSection.breakpoint*0.55)}px)`;
thirdSection.stars3.style.transform = `translateY(${valueY * 0.40 - (thirdSection.breakpoint*0.4)}px)`;
thirdSection.wind1.style.transform = `translateX(${valueY - (thirdSection.breakpoint+1800) * 0.40 - (thirdSection.breakpoint*0.4)}px)`;
thirdSection.wind3.style.transform = `translateY(${valueY * 0.5 - (thirdSection.breakpoint*0.5)}px)`;
thirdSection.text.style.transform = `translateY(${-(valueY * 1.75 - (thirdSection.breakpoint*1.75))}px)`;

let opacityCalc = Math.max(0, valueY - (thirdSection.breakpoint-200));
//document.querySelector("#seguidor").textContent=valueY;
thirdSection.wind2.style.opacity = `${opacityCalc/300}`;
thirdSection.wind3.style.opacity = `${opacityCalc/300}`;

});