
//problem no 3 solution

//Module 3: src/validator/formatter.js
//- trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
//- changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
//- changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]

//Call all these functions in route.js inside the test-me route handler






const degin=function(str) {

const up=str.trim().toUpperCase();
const down=str.trim().toLowerCase();
const center=str.trim();
return ` ${center} //  ${up} // ${down} `    

}

module.exports.mno=degin 