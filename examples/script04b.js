/**
* 
* @var case b: with zoomUp function and for loop
* 
*/

console.log('script04b.js');

let	closeUp	= document.querySelector('#closeUp'),
		pets		= document.querySelector('#pets');

function zoomUp(target,source){
	target.children[0].textContent	=source.alt;
	target.children[1].src			=source.src;
}

for (let i=0, c=pets.childElementCount; i<c ; i++){
	pets.children[i].addEventListener("click",function(){
		zoomUp(closeUp,this);
	});
}
