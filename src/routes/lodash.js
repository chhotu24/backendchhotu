
// problem no 4.1 solve


//- Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays using the chunk function. Print these sub-arrays


const lodash_chunk= require('lodash');

const arr=["january", "feabuary", "march", "april", "may", "june" , "july", "august", "september", "october", "november", "december"]

const raman=lodash_chunk.chunk(arr,3)


module.exports={
    months:raman

}