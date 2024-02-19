/**
* 
* @var case d: with Array.from() for nodelist --/>
* 
*/
console.log('script04d.js');

let	closeUp	= document.querySelector('#closeUp'),
		pets		= document.querySelector('#pets');

function zoomUp(target,source){
	target.children[0].textContent	=source.alt;
	target.children[1].src			=source.src;
}

Array.from(pets.children).forEach((pet)=>{		
	pet.addEventListener("click",function(){
		zoomUp(closeUp,this);
//		closeUp.children[0].textContent	= this.alt;
//		closeUp.children[1].src				= this.src;
	});
});
