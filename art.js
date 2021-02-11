"use strict";

artwork1();

function artwork1() {

 for (let i=100; i<300; i+=20) {
    let parent = document.querySelector("#artwork1");
    let child = document.createElement("div");
    parent.append(child);
    child.classList.add("box");
    /* child.classList.add(`.box${i}`); */
    child.style.height = `${i}px`;
    child.style.width = `${i}px`;
    
} 
artwork2();
}

function artwork2() {
for (let i=0; i<90; i+=10) {
    let parent = document.querySelector("#artwork2");
    let child = document.createElement("div");
    parent.append(child);
    child.classList.add("box");
    child.style.transform = `rotate(${i}deg)`;
}
artwork3();
}

function artwork3() {
    for (let i=0; i<200; i+=10) {
        let parent = document.querySelector("#artwork3");
        let child = document.createElement("div");
        parent.append(child);
        child.classList.add("circle");
        child.style.height = `${i}px`;
        child.style.width = `${i}px`;
    }
    artwork4();
}
function artwork4() {

    for (let i=-90; i<90; i+=20) {
       let parent = document.querySelector("#artwork4");
       let child = document.createElement("div");
       parent.append(child);
       child.classList.add("box");
       child.style.transform = `translate(${i}%, ${i}%)`;    
   } 
artwork5();
   }

   function artwork5() {
    for (let i=1; i<512; i*=2) {
        let parent = document.querySelector("#artwork5");
        let child = document.createElement("div");
        parent.append(child);
        child.classList.add("circle");
        child.style.height = `${i}px`;
        child.style.width = `${i}px`;
    }
    artwork6();
}

function artwork6() {
    for (let i=-20; i<45; i+=5) {
        let parent = document.querySelector("#artwork6");
        let child = document.createElement("div");
        parent.append(child);
        console.log(i);
        child.classList.add("circle");
        child.style.transform = `translate(${i-50}px)`;
        child.style.transform = `rotate(${i*4}deg)`;
    }
}