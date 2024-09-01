//const content = "Call this post a rough draft; and there are more than these three (like Allegorical Poems) but these are the three primary ways a poem is written, I think. On and off I get queries from poets who would like my opinion on their poems. In a very general way, I can break down their poems down into three main types — the Plain Poem, the Figurative Poem, and the Metaphoric Poem; though almost all the poetry sent me falls into the first two categories. I don’t know whether these categories are original to me. I doubt they are, and I may be using the terms differently (if they’re already out there). But so be it. There are poetic masterpieces in all three categories, so I’m not going to argue that one is superior to another, but of the three types of poetry — the Plain Poem and the Metaphoric Poem are the kind I admire most. But first things first:"
//const terminal = document.querySelector(".terminal");
//var counter = { num: 0 };

//function writeToTerminal(i) {
//    terminal.textContent.charAt(terminal.textContent.length - 1);
//    terminal.textContent = terminal.textContent + content.charAt(i.num);
//    i.num++;
//}
//terminal.textContent = "";
//setInterval(writeToTerminal, 50, counter);

const numStars = 100;
const starfield = document.querySelector(".starfield");
const title = document.querySelector("h1");
const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", function() {
    document.querySelector("audio").play();
});

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.width = `${Math.random() * 3 + 1}px`;
    star.style.height = star.style.width;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    starfield.appendChild(star);
}

for (let i = 0; i < numStars; i++) {
    createStar();
}

function animateStars() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.style.opacity = Math.random();
        star.style.transition = `opacity ${Math.random() * 1}s ease-in-out`;
    });
}

setInterval(animateStars, 100);
