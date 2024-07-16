//dependencies
import dotenv from 'dotenv';
dotenv.config({ path: './../.env' });
import { con } from './createDbInitially.js';

export async function loginUser(username, password){

    let queryResult;

// connect to database
await con.connect(async function(err) {

  //select promise
  let queryPromise = new Promise(function(myResolve, myReject) {
    
    con.query("SELECT * FROM users WHERE name = '"+username+"' AND password = '"+password+"'", function (err, result, fields) {
      if (err) throw err;
      myResolve(result);
    });

    });


  queryResult = await queryPromise.then(
    function(value) { 
return value[0];
     },
    function(error) { /* code if some error */ }
  );



});


if (queryResult?.name == username && queryResult?.password == password){

    return true;
  
  }else {
    return false;
  }


}
  
