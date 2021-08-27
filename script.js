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

