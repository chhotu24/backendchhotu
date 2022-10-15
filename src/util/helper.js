const current_date=function(){

const today=new date();
const day=today.getUtcDate();
const month=today.getUtcMonth();
const year=today.getUtcFullYear();

return "${day} , ${month} , ${year} , ${today}  "

}


module.exports.date=current_date