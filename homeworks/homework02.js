
function getTriangle(triangle){
  console.log('input',triangle);
  
  const sideA = triangle.sideA,
  		sideB = triangle.sideB,
  		sideC = triangle.sideC;
  let perimeter, area;
  let halfPerimeter;
  /*
  * 
  * @var calculate interest
  * 
  */
  perimeter = sideA + sideB + sideC;
  triangle.perimeter=perimeter;
  console.log('perimeter',perimeter);
  
  halfPerimeter=perimeter*0.5;
  area= Math.sqrt(halfPerimeter*(halfPerimeter-sideA)*(halfPerimeter-sideB)*(halfPerimeter-sideC));
  triangle.area=area;
  console.log('area',area);
  
  return triangle;
 }
triangle_CJP={
	sideA:3,
	sideB:4,
	sideC:5,
	parimeter:0,
	area:0
};
