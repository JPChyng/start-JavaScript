/**
* 
* @var 2.0
* 
**/
console.log('script04e.js');

const closeUp = {};
	// 設定畫面區域
closeUp.closeup	= document.querySelector('#closeUp');
closeUp.pets		= document.querySelector('#pets');

	// 抓特寫
closeUp.zoom = function (target,source){
	target.children[0].textContent	=source.alt;
	target.children[1].src				=source.src;
};

	// 起動
closeUp.init =	function (){		
		// 佈置魔法
		for ( let i=0, length = this.pets.childElementCount, that= this;
					i < length ; i++){
				this.pets.children[i].addEventListener("click",function(){
				console.log('this',this)
				that.zoom(that.closeup,this);
			});
		}		
};

	// 起動
closeUp.init();
