const isHumanAlertMessage = `
<h3 class="text-green">
    Success!
  </h3>
  <ul class="text-green" style="list-style-type:none;">
  <li><i class="fad fa-check-double fa-md"></i>&nbsp;&nbsp;You made it to colinstodd.com. </li>
  <li><i class="fad fa-check-double fa-md"></i>&nbsp;&nbsp;You've proven that you're smart. </li>
  <li><i class="fad fa-check-double fa-md"></i>&nbsp;&nbsp;I think I'm going to like you 😉. </li>
</ul>
<p class="text-green">Press "Submit Message" below to send your info. or <a href="mailto:colin@colinstodd.com?subject=[Contact] from colinstodd.com&body=Hello Colin, I have a question regarding...">Email</a>. <br>Thanks!</p>
`;
const isNotHumanErrorMessage = `
<i class="fad fa-window-restore"></i> Please validate that you're a human by answering the question in the pop-up window.
`;
const alphabetArray = new Array(
  'a',
  'A',
  'b',
  'b',
  'c',
  'C',
  'd',
  'D',
  'e',
  'E',
  'f',
  'F',
  'g',
  'G',
  'h',
  'H',
  'i',
  'I',
  'j',
  'J',
  'l',
  'L',
  'm',
  'M',
  'n',
  'N',
  'o',
  'O',
  'p',
  'P',
  'q',
  'Q',
  'r',
  'R',
  's',
  'S',
  't',
  'T',
  'u',
  'U',
  'V',
  'v',
  'w',
  'W',
  'x',
  'X',
  'y',
  'Y',
  'z',
  'Z'
);

export { isHumanAlertMessage, isNotHumanErrorMessage, alphabetArray };