/*jshint esversion: 6 */
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid() {
	"use strict";
// Your code goes here!
	//event listener to know when user clicks submit
	$('.submit').click(function(){
		//declare variable to hold height
		let height;
		//declare variable to hold width
		let width;
		//declare variable to hold color
		let color;
		//assign value to variable height
		height = $('#inputHeight').val();
		//assign value to variable width
		width = $('#inputWidth').val();  
		//loop to create multiple rows
		for(var i=1;i<=height;i++){
			//give a unique name to each row
			let row = "r"+i;
			//create each row
			$('#pixelCanvas').append("<tr id="+row+"></tr>");
			//loop to create multiple columns
			for(let j=1;j<=width;j++){
				//create each column
				$('#'+row).append("<td class='columns' click='0'></td>");
			}
		}
		
		//event listener to know when user clicks a cell
		$('.columns').click(function(){
			//assign value to variable color
			color = $('#colorPicker').val();
			//create variable to hold cell state
			let name = $(this).attr('click');
			//check if cell has been filled or not to enable erasing a mistake
			if(name==0){
				//color the cell
				$(this).css("background-color",color);
				//assign it a new state
				$(this).attr('click','1');
			}
			else{
				$(this).css("background-color","white");
				$(this).attr('click','0');
			}
		});
	});
}
$(makeGrid);