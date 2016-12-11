window.onload = (function() {

 //var clickAreas=document.getElementsByClassName('clickArea');
// alert(clickAreas[4].className); // WORKS

var set3=document.getElementById("set3");
 var inputs=set3.getElementsByTagName("INPUT");
 var siteimages=set3.getElementsByTagName("IMG");
 var current3=inputs[0];

 set3.addEventListener("click", mouseClick3, false);


 function mouseClick3(event){

   	if(event.target!==event.currentTarget){
   		var clickedItem=event.target;
   		var imageNum=event.target.getAttribute("id");

   		switch(imageNum) {
   		  case "one":
   			inputs[0].checked="false";
   			inputs[1].checked="true";
   			break;
   		  case "two":
   		    inputs[1].checked="false";
   		    inputs[2].checked="true";
   		    break;
   		  case "three":
   		    inputs[2].checked="false";
   		    inputs[3].checked="true";
   		    break;
   		  case "four":
   		    inputs[3].checked="false";
   		    inputs[1].checked="true";
   		    break;
   		  default:
   		    //DO NOTHING;

   		}
   		current3=clickedItem;
   		

   	}

   	event.stopPropagation();
    

   }

}(window.console));
