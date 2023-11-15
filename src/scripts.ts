const buttons:HTMLElement[] = Array.from(document.querySelectorAll("button"));
const cubes:HTMLElement[] = Array.from(document.querySelectorAll(".cube"));

const yellowColor:string = "#FFFF00";
const successText:string = "SUCCESS";

buttons[0].addEventListener("click", ():void =>{
    cubes[0].style.backgroundColor = yellowColor;
})

buttons[1].addEventListener("click", ():void =>{
    cubes[2].innerHTML = successText;
})

buttons[2].addEventListener("click", ():void =>{
    cubes[4].style.visibility ="hidden";
})

let cube3Visible:boolean = true;
buttons[3].addEventListener("click", ():void => {

    if(cube3Visible)
    {
        cubes[1].style.visibility ="hidden";
    }
    else
    {
        cubes[1].style.visibility = "visible";
    }

    cube3Visible = cubes[1].style.visibility === "visible";

})

const randomColors:string[] = [
    "#4A90E2",
    "#FF6347",
    "#00FF7F",
    "#8A2BE2",
    "#FFD700"
];

let chosenColor:string = "";

buttons[4].addEventListener("click", ():void => {

    chosenColor = randomColors[Math.floor(Math.random() * randomColors.length)];

    cubes[3].style.backgroundColor = chosenColor;
})

const cube6CountFrequency:number = 3000;
let cube6IntervalId:NodeJS.Timer;
let cube6Counting:boolean = false;

buttons[5].addEventListener("click", ():void => {

    if(cube6Counting) return;

    cube6Counting = true;
    cube6IntervalId = setInterval(countCube6Number, cube6CountFrequency);
})

let currentCube6Count:number = 0;
const countCube6Number = ():void =>{

    if(cubes[5].innerHTML === "10")
    {
        clearInterval(cube6IntervalId);
        return;
    }

    currentCube6Count += 1;

    cubes[5].innerHTML = String(currentCube6Count);
}

const task7CubeBackgroundColor:string = "#18D5E1"
const task7BodyBackgroundColor:string = "#000000"
buttons[6].addEventListener("click", ():void => {

    cubes.forEach((cube:HTMLElement) => {
        cube.style.backgroundColor = task7CubeBackgroundColor;
    })

    document.body.style.backgroundColor = task7BodyBackgroundColor;
})

let oldCube0Color:string = "";
cubes[0].addEventListener("mouseenter", ():void => {

    if(oldCube0Color === "")
    {
        oldCube0Color = cubes[0].style.backgroundColor;
    }

    cubes[0].style.backgroundColor = "red";
})

cubes[0].addEventListener("mouseleave", ():void => {
    cubes[0].style.backgroundColor = oldCube0Color;
})

cubes[3].addEventListener("mouseenter", ():void => {
    startCube3Timer();
})

cubes[3].addEventListener("mouseleave", ():void => {
    stopCube3Timer();
})

let cube3CurrentCount:number = 0;
let cube3IntervalId:NodeJS.Timer;
const startCube3Timer = ():void => {
    cube3IntervalId = setInterval(countCube3Timer,1000);
}

const stopCube3Timer = ():void => {
    clearInterval(cube3IntervalId);
    cube3CurrentCount = 0;
    cubes[3].innerHTML = String(cube3CurrentCount);
}

const countCube3Timer = ():void =>{
    cube3CurrentCount += 1;

    if(cubes[3].innerHTML === "10")
    {
        clearInterval(cube3IntervalId);
        return;
    }

    cubes[3].innerHTML = String(cube3CurrentCount);
}

const inputField:HTMLElement = document.querySelector("input");
const inputTextArea:HTMLElement = document.querySelector(".inputText");


inputField.addEventListener("input" ,(event):void => {
    inputTextArea.innerText = (event.target as HTMLInputElement).value;
});
