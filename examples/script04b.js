/**
* 
* @var with for loop
* 
*/

console.log('script0b.js');

let	closeUp	= document.querySelector('#closeUp'),
		pets		= document.querySelector('#pets');

for (let i=0, c=pets.childElementCount; i<c ; i++){
	pets.children[i].addEventListener("click",function(){
		closeUp.children[0].textContent	=this.alt;
		closeUp.children[1].src				=this.src;
	})
}
