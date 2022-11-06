const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

/*
  Read all the comments multiple times to understand why we are doing what we are doing in login api and getUserData api
*/
// const createUser = async function (abcd, xyz) {
//   //You can name the req, res objects anything.
//   //but the first parameter is always the request 
//   //the second parameter is always the response
//   let data = abcd.body;
//   let savedData = await userModel.create(data);
//   console.log(abcd.newAtribute);
//   xyz.send({ msg: savedData });
// };




///////////////////ASSIGNMENT 1

const createUser = async function (req, res) {
  let data = req.body
  let saveData = await userModel.create(data);
  console.log(req.body.firstName);
  res.send({ msg: saveData })
}


///////////////////ASSIGNMENT 2


const loginUser = async function (req, res) {
  const verifyEmail = req.body.emailId
  const verifyPassword = req.body.password
  let bothData = await userModel.findOne({ emailId: verifyEmail, password: verifyPassword })
  if (!bothData)
    res.send({
      status: false,
      msg: "please enter valid emailid or password "
    })




  let token= jwt.sign({userId:bothData._id.toString()},"functionUp")


  
// res.setheaders("x-auth-token", token);
   res.send({status:true,token:token});
  
  }



//////EXAMPLES FOR UNDERSTANDING 

  const loginUser2=async function (req,res){
    const verifyMobile=req.body.mobile
    const verifyPassword=req.body.password

  let bothData2=await userModel.findOne({mobile:verifyMobile,password:verifyPassword })
  if(!bothData2) res.send({status:false,
  
    msg:"mobile or password in invalid"})
  
let token2= jwt.sign({userId2:bothData2._id.toString()}, "functionUp")


// res.setheaders("X-auth-token", token2)
res.send({status:true,  tokenId:token2})

}



//////EXAMPLES FOR UNDERSTANDING 

const loginUser3=async function(req,res){
  let validName=req.body.firstName
  let validPassword=req.body.password
  bothDAta3=await userModel.findOne({firstName:validName,password:validPassword});
if(!bothDAta3) return res.send({status:false, msg:"please enter valid name or password "})

let token3= jwt.sign({userId3:bothDAta3._id.toString()},"functionUp")
res.send({status:true,tokenId:token3 })
}





/////////ASSIGNMENT 3

const getUser= async function(req,res){
let token = req.headers["x-auth-token"];

if(!token) {return res.send({status:false, msg:"token must be required"});
}
let decodeToken= await jwt.verify(token,"functionUp")
if(!decodeToken) return res.send({status:false, msg:"token validation failed"})




let userId=req.params.userId
let userDetails= await userModel.findById(userId)
if(!userDetails) return res.send({status:false, msg:"user Id in invalid no such user found"})
res.send({status:true, Data:userDetails})


}





////////Assignment 4

//Write a **PUT api /users/:userId** to update user details. Pass the userId as path 
//param in the url and update the attributes received in
 //the request body. Check that request must contain 
 //**x-auth-token** header. If absent, return a suitable error.

const updateUser2= async function(req,res){
let token=req.headers["x-auth-token"]
if(!token){
  res.send({status:false,msg:"token is required"})

}
let userId=req.params.userId
let  userDetails=await userModel.findById(userId)
if(!userDetails) {return res.send("no such user found")

}

let updateUserData=await userModel.findOneAndUpdate({_id:userId},{$set:{age:40}},{new:true});

res.send({status:true, msg:updateUserData})
}






///////Assignment 5c

/*- Write a **DELETE api /users/:userId** that takes the userId in the path params and marks the isDeleted attribute for a user as true. Check that request must contain **x-auth-token** header. If absent, return a suitable error.
- Once, all the apis are working fine, move the authentication related code in a middleware called auth.js
- Add this middleware at route level in the routes where applicable.*/





const deleteUser= async function(req,res){
  let token=req.headers["x-auth-token"]
  if(!token){
    return res.send({status:false, msg:"token required please enter valid input"})
  }
  
let userId=req.params.userId
userDet=await userModel.findById(userId)
if(!userDet){return res.send({status:false, msg:"no such user found"})};

let updateDeleteUser=await userModel.findOneAndUpdate({_id:userId},{$set:{isDeleted:true}},{new:true});
res.send({status:true, msg:updateDeleteUser})




}


// const deleteUser = async function (req, res) {

//   let userId = req.params.userId;
//   if (!userId) {
//     return res.send({
//       satus:false,
//       msz:"No such user exists"});
//    }
//   //  let find1 = await userModel.findOne({ _id: userId})
//   //  console.log(find1);
//   let  deleteUser = await userModel.findOneAndUpdate({  _id: userId },{$set:{isDeleted:true}},{new:true});
//   res.send({status:true,msz:deleteUser})
  
// }












// const getUserData = async function (req, res) {
//   let token = req.headers["x-auth-token"]
//   if(!token) {
//     return res.send({status:false, msz:"token is not present"})
//   }
//   let decodeToken = jwt.verify(token, "functionUp")
//   if(!decodeToken) {
//     return res.send({status:false, msz:"Invalid token"})
//   }

//  // compare valid token or not  | 
 
// // let olduser = req.params.userId
// // let modifyUser = req.headers.userId
// // if(olduser != modifyUser)
// // return res.send({status:false, msz:"User and token in not matched"})
 

//   let userId = req.params.userId

//   let userDetails = await userModel.findById(userId)
//   if(!userDetails) {
//     return res.send({status:false, msz:"User does't Exit's"})
//   }
//   res.send({status:true, Data: userDetails})
// }





// const loginUser = async function (req, res) {
//   let userName = req.body.emailId;
//   let password = req.body.password;

//   let user = await userModel.findOne({ emailId: userName, password: password });
//   if (!user)
//     return res.send({
//       status: false,
//       msg: "username or the password is not corerct",
//     });

// Once the login is successful, create the jwt token with sign function
// Sign function has 2 inputs:
// Input 1 is the payload or the object containing data to be set in token
// The decision about what data to put in token depends on the business requirement
// Input 2 is the secret (This is basically a fixed value only set at the server. This value should be hard to guess)
// The same secret will be used to decode tokens 
//   let token = jwt.sign(
  //   {
  //     userId: user._id.toString(),
  //     batch: "thorium",
  //     organisation: "FunctionUp",
  //   },
  //   "functionup-plutonium-very-very-secret-key"
  // );
//   res.setHeader("x-auth-token", token);
//   res.send({ status: true, token: token });


// const getUserData = async function (req, res) {
//   let token = req.headers["x-Auth-token"];
//   if (!token) token = req.headers["x-auth-token"];

//   //If no token is present in the request header return error. This means the user is not logged in.
//   if (!token) return res.send({ status: false, msg: "token must be present" });

//   console.log(token);

// If a token is present then decode the token with verify function
// verify takes two inputs:
// Input 1 is the token to be decoded
// Input 2 is the same secret with which the token was generated
// Check the value of the decoded token yourself

// Decoding requires the secret again. 
// A token can only be decoded successfully if the same secret was used to create(sign) that token.
//
// And because this token is only known to the server, it can be assumed that if a token is decoded at server then this token must have been issued by the same server in past.
//   let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
//   if (!decodedToken)
//     return res.send({ status: false, msg: "token is invalid" });

//   let userId = req.params.userId;
//   let userDetails = await userModel.findById(userId);
//   if (!userDetails)
//     return res.send({ status: false, msg: "No such user exists" });

//   res.send({ status: true, data: userDetails });
//   // Note: Try to see what happens if we change the secret while decoding the token
// };

// const updateUser = async function (req, res) {
//   // Do the same steps here:
//   // Check if the token is present
//   // Check if the token present is a valid token
//   // Return a different error message in both these cases

//   let userId = req.params.userId;
//   let user = await userModel.findById(userId);
//   //Return an error if no user with the given id exists in the db
//   if (!user) {
//     return res.send("No such user exists");
//   }

//   let userData = req.body;
//   let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
//   res.send({ status: updatedUser, data: updatedUser });
// };







module.exports.createUser = createUser;

module.exports.updateUser2 = updateUser2;
module.exports.loginUser = loginUser;
module.exports.loginUser2 = loginUser2;
module.exports.loginUser3 = loginUser3;
module.exports.getUser = getUser;
module.exports.deleteUser=deleteUser;

