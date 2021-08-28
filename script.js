const btn = document.querySelector('#btn');
const hexNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
btn.addEventListener('click', () => { 
    let hexCode1 = "";
    let hexCode2 = "";
    let indexGen = 0;
    for(let i = 0; i < 6; i++){
        indexGen = Math.floor(Math.random()*hexNum.length);
         hexCode1 += hexNum[indexGen];
        indexGen = Math.floor(Math.random()*hexNum.length);
         hexCode2 += hexNum[indexGen];
    }
    document.body.style.background = `linear-gradient(to right, #${hexCode1}, #${hexCode2})`;
    document.querySelector('#hexCode1').textContent = hexCode1;
    document.querySelector('#hexCode2').textContent = hexCode2;
});

const span1 = document.querySelector("#hexCode1");
span1.onclick = function() {
document.execCommand("copy");
}
span1.addEventListener("copy", function(event) {
event.preventDefault();
// alert('text copied')
if (event.clipboardData) {
    event.clipboardData.setData("text/plain", span1.textContent);
    console.log(event.clipboardData.getData("text"))
}
});


const span2 = document.querySelector("#hexCode2");
span2.onclick = function() {
document.execCommand("copy");
}
span2.addEventListener("copy", function(event) {
event.preventDefault();
// alert('text copied')
if (event.clipboardData) {
    event.clipboardData.setData("text/plain", span2.textContent);
    console.log(event.clipboardData.getData("text"))
}
});
