/**
* 
* @var case c: with forEach()
* 
*/

console.log('script04c.js');

let	closeUp	= document.querySelector('#closeUp'),
		pets		= document.querySelector('#pets');
		
function zoomUp(target,source){
	target.children[0].textContent	=source.alt;
	target.children[1].src			=source.src;
}

[...pets.children].forEach(function(pet){
	pet.addEventListener("click",function(){
		zoomUp(closeUp,this);
	})
});
