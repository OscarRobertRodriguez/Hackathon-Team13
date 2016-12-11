 var pagination1=document.getElementById("pagination1");
 var pageP1=pagination1.getElementsByClassName("page");
 var current1="";

 pagination1.addEventListener("mousedown", mouseDown, false);
 pagination1.addEventListener("mouseup", mouseUp, false);
 pagination1.addEventListener("click", mouseClick, false);


   function mouseDown(event){

   	if(event.target!==event.currentTarget){
   		var clickedItem=event.target;
   		clickedItem.style.backgroundImage="radial-gradient(circle,#00ffff,#0000ff)";
   		clickedItem.style.color="white";
   	}

   	event.stopPropagation();
    

   }

   function mouseUp(event){

     if(event.target!==event.currentTarget){
   	   var clickedItem=event.target;
       clickedItem.style.backgroundImage="";
       clickedItem.style.color="white";
       if(current1){
       	 current1.style.backgroundColor="white";
       	 current1.style.color="black";
       };
   	}

   	event.stopPropagation();

   }

      function mouseClick(event){

   	if(event.target!==event.currentTarget){
   		var clickedItem=event.target;
   		current1=clickedItem;
   		//alert(current.className);
   		if(clickedItem.tagName!=="I"){
   		  clickedItem.style.backgroundColor="blue";
   		  clickedItem.style.transition="all 0.5s";   		  
   		} else{
   			clickedItem.style.color="black";
   		}

   	}

   	event.stopPropagation();
    

   }


 var pagination3=document.getElementById("pagination3");
 var pageP3=pagination3.getElementsByClassName("page");
 var current3="";

 pagination3.addEventListener("click", mouseClick3, false);
 pagination3.addEventListener("mouseup", mouseUp3, false);


   function mouseUp3(event){

     if(event.target!==event.currentTarget){
   	   var clickedItem=event.target;
       clickedItem.style.background="#000";
       clickedItem.style.color="black";
       if(current3){
       	 current3.style.background="white";
       	 current3.style.color="black";
       };
   	}

   	event.stopPropagation();

   }


      function mouseClick3(event){

   	if(event.target!==event.currentTarget){
   		var clickedItem=event.target;
   		current3=clickedItem;
   		//alert(current.className);
   		if(clickedItem.tagName!=="I"){
   		  clickedItem.style.background="#0000ff";
   		  clickedItem.style.color="white";
   		  clickedItem.style.transition="all 1.5s";
   		} else{
   			clickedItem.style.color="blue";
   		}

   	}

   	event.stopPropagation();
    

   }