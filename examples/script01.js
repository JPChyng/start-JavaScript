	let	img=document.querySelector('#i1');
console.log(img);
	img.addEventListener('mouseover',function(){
		resize(this,2);	});
	
	img.addEventListener('mouseout', function(){
		resize(this,0.5);});
		
	function resize(img,scale){
 		img.width *= scale; 	//寬度伸縮scale倍
  		img.height *= scale; 	//高度伸縮scale倍
	}
