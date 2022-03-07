
function getCylinder(cylinder){
  console.log('input',cylinder);
  
  let radius =cylinder.radius,
  		height =cylinder.height;
  let surface, side, end, volume;
  /*
  * 
  * @var calculate interest
  * 
  */

  side = radius * 2 *Math.PI * height;
  end = 2 * Math.PI * Math.pow(radius,2);
  surface = end + side + end;
  console.log('surface',surface);
  cylinder.surface = surface;
  
  volume = side * height;
  console.log('volume',volume);
  
  cylinder.volume= volume;
  return cylinder;
}
 
cylynder_CJP={
	radius:5,
	height:10,
	volume:0,
	surface:0
}