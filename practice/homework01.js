
function getLoan(loan){
  console.log('input',loan);
  
  let capital =loan.capital,
      rate = loan.rate,
      period = loan.period;
      console.log(period);
  let interest,revenue;

  console.log(period);
  /*
  * 
  * @var calculate interest
  * 
  */
  revenue = capital;
  do {
	  interest = revenue * rate;
	  revenue += interest;
  	  console.log('interest',interest);
  	  console.log('capital',revenue);
  	  console.log('period',period);
  	  period--;
  	  console.log('period',period);
  } while (period>0)
  
  loan.interest=interest;
  loan.revenue=capital + 
  
  console.log('revenue',loan.revenue);
 
  console.log('output',loan);
  
  return loan;
}
 
loan_CJP={
	capital:10000,
	rate:0.02,
	period:5,
	interest:0
};