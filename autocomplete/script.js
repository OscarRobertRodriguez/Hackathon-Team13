
//init variables
var blockLinks = document.getElementsByClassName("linkText"),
    i = 0;
// target div
var div = document.querySelector(".dropdown-content");
var div2 = document.querySelector(".dropdown-content2");

// for loop that targets all linkText classes
for(i = 0; i < blockLinks.length; i++) {
  blockLinks[i].addEventListener("click", addLink);
}




// close box if window is clicked
window.onclick = function (event) {
 if(window) {
  div.style.display = "none";
  div2.style.display = "none";
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
console.log(link3);

}
