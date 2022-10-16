
// problem no 4.1 solve


//- Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays using the chunk function. Print these sub-arrays


const lodash_chunk= require('lodash');

const arr=["january", "feabuary", "march", "april", "may", "june" , "july", "august", "september", "october", "november", "december"]

const raman=lodash_chunk.chunk(arr,3)


// problem no 4.2

//- Create an array containing the first 10 odd numbers. Using the tail function, return the last 9 elements of it and print them on console.

const numb=require('lodash');
const abc=[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
const pqr=numb.tail(abc,9)




// problem no 4.3

//- Create 5 arrays of numbers containing a few duplicate values. Using the function union create a merged array with only unique values and print them on console


const xyz=require('lodash');
const baigan=xyz.union([1,2,3,3],
                       [4,5,5,6,7,7],
                       [8,4,6,7,4,9],
                       [10,11,11,23,23,45,],
                       [12,14,15,18,19,19]);



// problem no 4.4

//- Use the function fromPairs to create an object containing key value pairs. For example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]

const ghi=require('lodash');
const suraj= [['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']];
const raj=ghi.fromPairs(suraj);







module.exports={
    months:raman,
    kuna:pqr,
    ramu:baigan,
    bhagna:raj

}