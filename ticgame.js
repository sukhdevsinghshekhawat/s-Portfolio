const boxes = document.querySelectorAll(".box");
const msgshow = document.querySelector('.msg');
const mgwinner = document.getElementById('showmsg');
const nwbtn = document.querySelector('.newbtn');
const rwbtn = document.querySelector('.resetbtn');

const winnerarry = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
let trun = true;

const winnerShow = () => {
    for (let win of winnerarry) {
        let val1 = boxes[win[0]].innerText;
        let val2 = boxes[win[1]].innerText;
        let val3 = boxes[win[2]].innerText;
        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                showResult(val1);
                disableAllbutton();
            }
        }

    }

}
const showResult = (val1) => {
    msgshow.innerText = `Congratulations! ${val1} wins the game!`;
    msgshow.classList.remove('msg');
}
const disableAllbutton = () => {
    for (let box of boxes) {
        box.classList.add('disabled');

    }
}
const EnableAllbutton = () => {
    for (let box of boxes) {
        box.classList.remove('disabled');
        box.innerText = "";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", (event) => {
        if (trun) {
            box.innerText = "X";
            box.style.color = "red";
            trun = false;
        }
        else {
            box.innerText = "O";
            box.style.color = "black";

            trun = true;
        }
        event.target.classList.add('disabled');
        winnerShow();

    });

});

nwbtn.addEventListener('click', () => {
    trun = true;
    EnableAllbutton();
    msgshow.classList.add('msg');
});
rwbtn.addEventListener('click', () => {
    trun = true;
    EnableAllbutton();
    msgshow.classList.add("msg")

});
