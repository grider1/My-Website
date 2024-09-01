const content = "Call this post a rough draft; and there are more than these three (like Allegorical Poems) but these are the three primary ways a poem is written, I think. On and off I get queries from poets who would like my opinion on their poems. In a very general way, I can break down their poems down into three main types — the Plain Poem, the Figurative Poem, and the Metaphoric Poem; though almost all the poetry sent me falls into the first two categories. I don’t know whether these categories are original to me. I doubt they are, and I may be using the terms differently (if they’re already out there). But so be it. There are poetic masterpieces in all three categories, so I’m not going to argue that one is superior to another, but of the three types of poetry — the Plain Poem and the Metaphoric Poem are the kind I admire most. But first things first:"
const terminal = document.querySelector(".terminal");
var counter = { num: 0 };

function writeToTerminal(i) {
    terminal.textContent.charAt(terminal.textContent.length - 1);
    terminal.textContent = terminal.textContent + content.charAt(i.num) + "_";
    i.num++;
}
terminal.textContent = "";
setInterval(writeToTerminal, 50, counter);