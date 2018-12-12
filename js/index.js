var count = 1;
    function setColor(namecard, color) {
        var property = document.getElementById("namecard");
        if (count == 0) {
			property.style.backgroundColor = "#ffb055";
		
            count = 1;        
		}
		
        else {
            property.style.backgroundColor = "#9f94e2";
            count = 0;
        }
    }



function generateCard() {
	console.log("clicked")
	var name = document.getElementById("username").value;
	var string = '<div class="newCard"> Hello!<br> ' + "I'm " + name +"."+ "<br></div>" ;
	
	
	


	var mypronoun = document.getElementById("pronoun").value;
	string += '<div class="newCardString"> I use  '+ '<div class="bigText">'+mypronoun +'</div>'+"</div>" + 
	'<div class="inlineBtn">'+
	'<br><div class="btn btn-primary saveBtn"  onclick="btnSave()">Save</div>'+
	'<div class="btn btn-primary shareBtn" onclick="btnSave()">Share</div>'+
	'<div class="btn btn-primary changeBtn" onclick="setColor()">Change Color</div>'
	+ "<br></div>";

	

	document.getElementById("namecard").innerHTML = string;
	
	
}


function btnSave() {
var canvas = document.getElementById("namecard");
canvas.toBlob(function(blob) {
    saveAs(blob, "pretty.png");
});
}



