
//problem no 2 solution
//printDate() : prints the current date
//- printMonth() : prints the current month
//- getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. 
//For example - Radon, W3D3, the topic for today is Nodejs module system’
	
	//Call all these functions in route.js inside the test-me route handler





const chhotu=function(){

const today=new Date();
const day=today.getDay();
const month=today.getMonth();
const year=today.getFullYear();

return `today is ${today} week number is ${day} month number is ${month} the year is ${year} . i am chhotu shaw , happy to be a part of lithium today we covered Node js module.`

}


module.exports.update=chhotu