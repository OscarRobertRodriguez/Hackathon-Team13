
//init variables
var blockLinks = document.getElementsByClassName("linkText"),
    i = 0;
// target div
var div = document.querySelector(".dropdown-content");
var div2 = document.querySelector(".dropdown-content2");
var div3 = document.querySelector(".dropdown-content3");
var div4 = document.querySelector(".dropdown-content4");
var div5 = document.querySelector(".dropdown-content5");
var div6 = document.querySelector(".dropdown-content6");
var div7 = document.querySelector(".dropdown-content7");

div.style.display = "none";
div2.style.display = "none";
div3.style.display = "none";
div4.style.display = "none";
div5.style.display = "none";

// for loop that targets all linkText classes
for(i = 0; i < blockLinks.length; i++) {
  blockLinks[i].addEventListener("click", addLink);
}




// close box if window is clicked
window.onclick = function (event) {
 if(window) {
  div.style.display = "none";
  div2.style.display = "none";
  div3.style.display = "none";
  div4.style.display = "none";
  div5.style.display = "none";
 }
};

// adds text from div box to input and closes box
function addLink(event) {
  var ele = event.target;
 var text = ele.innerText;
 var input = ele.parentNode.parentNode.parentNode.previousSibling.previousSibling;
 var inputText = input.value;


 if (blockLinks[0] === ele) {
  input.value = text;
  div.style.display = "none";
 }

 if (blockLinks[1] === ele) {
  input.value = text;
  div.style.display = "none";
 }

 if (blockLinks[2] === ele) {
  input.value = text;
  div.style.display = "none";
 }

 if (blockLinks[3] === ele) {
  input.value = text;
  div2.style.display = "none";
 }
 if (blockLinks[4] === ele) {
  input.value = text;
  div2.style.display = "none";
 }
 if (blockLinks[5] === ele) {
  input.value = text;
  div2.style.display = "none";
 }
 if (blockLinks[6] === ele) {
  input.value = text;
  div3.style.display = "none";

 }
 if (blockLinks[7] === ele) {
  input.value = text;
  div3.style.display = "none";

 }
 if (blockLinks[8] === ele) {
  input.value = text;
  div3.style.display = "none";
 }
 if (blockLinks[9] === ele) {
  input.value = text;
  div4.style.display = "none";

 }
 if (blockLinks[10] === ele) {
  input.value = text;
  div4.style.display = "none";

 }
 if (blockLinks[11] === ele) {
  input.value = text;
  div4.style.display = "none";
 }
 if (blockLinks[12] === ele) {
  input.value = text;
  div5.style.display = "none";

 }
 if (blockLinks[13] === ele) {
  input.value = text;
  div5.style.display = "none";

 }
 if (blockLinks[14] === ele) {
  input.value = text;
  div6.style.display = "none";
 }
 if (blockLinks[15] === ele) {
  input.value = text;
  div6.style.display = "none";
 }
 if (blockLinks[16] === ele) {
  input.value = text;
  div6.style.display = "none";
 }
 if (blockLinks[17] === ele) {
  input.value = text;
  div6.style.display = "none";
 }
 console.log(input);
}






function updateBlock(ele) {

 var div = document.querySelector(".dropdown-content");


var input = ele;
 var id = input.getAttribute("id");
var inputText = input.value;
var link1 = input.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.firstChild;
var link2 = link1.parentNode.nextSibling.nextSibling.firstChild;
var link3 = link2.parentNode.nextSibling.nextSibling.firstChild;


 if (id === "input1" && inputText.length > 0 || inputText.length === 0) {
  div.style.display = "block";
  link1.innerHTML = inputText;
  link2.innerHTML = inputText + inputText;
  link3.innerHTML = inputText + inputText + inputText;
 }

 if (id === "input1" && inputText.length === 0) {
  div.style.display = "none";
 }

 if (id === "input2" && inputText.length > 0 || inputText.length === 0) {
   div2.style.display = "block";
  link1.innerHTML = inputText;
  link2.innerHTML = inputText + inputText;
  link3.innerHTML = inputText + inputText + inputText;
 }

 if (id === "input2" && inputText.length === 0) {
  div2.style.display = "none";
 }

 if (id === "input3" && inputText.length > 0 || inputText.length === 0) {
  div3.style.display = "block";
  link1.innerHTML = "item1";
  link2.innerHTML = "item2";
 }

 if (id === "input3" && inputText.length === 0) {
  div3.style.display = "none";
 }
 if (id === "input4" && inputText.length > 0 || inputText.length === 0) {
  div4.style.display = "block";
  link1.innerHTML = "23432";
  link2.innerHTML = "12434";
  link3.innerHTML = "12432";
 }

 if (id === "input4" && inputText.length === 0) {
  div4.style.display = "none";
 }
 if (id === "input5" && inputText.length > 0 || inputText.length === 0) {
  div5.style.display = "block";
  link1.innerHTML = "item1";
  link2.innerHTML = "item2";
  link3.innerHTML = inputText + inputText + inputText;
 }

 if (id === "input5" && inputText.length === 0) {
  div5.style.display = "none";
 }
 
console.log(inputText);

}

function updateBlockCase(event) {
 var input =event;
 var inputText = input.value;
 var id = input.getAttribute("id");
 var link1 = input.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.firstChild;
 var link2 = link1.parentNode.nextSibling.nextSibling.firstChild;
console.log(link2);



 if(id === "input6" && inputText.length > 0) {
  div6.style.display = "block";
 }

}




