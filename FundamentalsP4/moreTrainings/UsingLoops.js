// const btn = document.querySelector('button');
// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');
//
// document.addEventListener('DOMContentLoaded', () => {
//     canvas.width = document.documentElement.clientWidth;
//     canvas.height = document.documentElement.clientHeight;
// })
//
// function random(number) {
//     return Math.floor(Math.random()*number);
// }
//
// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     for (let i = 0; i < 100; i++) {
//         ctx.beginPath();
//         ctx.fillStyle = 'rgba(255,0,0,0.5)';
//         ctx.arc(random(canvas.width), random(canvas.height), random(50), 0, 2 * Math.PI);
//         ctx.fill();
//     }
// }
//
// btn.addEventListener('click',draw);

//using for loops for arrays
const cats = ["Leopard", 'Serval', "Jaguar", 'Tiger', 'Caracal', "Lion"];
for (let i = 0; i < cats.length; i++) {
    //prints everthing out
    console.log(cats[i]);

}


//arrays of phone numbers
const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const searchName = input.value.toLowerCase();
    input.value = '';
    input.focus();
    para.textContent = '';
    for (const contact of contacts) {
        const splitContact = contact.split(':');
        if (splitContact[0].toLowerCase() === searchName) {
            para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
            break;
        }
    }
    if (para.textContent === '') {
        para.textContent = 'Contact not found.';
    }
});

//gpu is great, cpu goes hot sometimes
