/**
 * Created by oscar on 12/11/16.
 */


var inputListener = document.getElementsByClassName("inputs");

for(var i = 0; i < inputListener.length; i++) {
   inputListener[i].addEventListener("keydown", isNotEmpty);
}


function isNotEmpty(ele) {
   var input = ele.target;
   var label = input.nextSibling.nextSibling;
   var inputText = input.value;

   if (inputText.length > 0) {
      label.className = "freezeLabel";
   }

}