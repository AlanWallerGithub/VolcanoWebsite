//dependencies
import dotenv from 'dotenv';
dotenv.config({ path: './../.env' });
import { con } from './createDbInitially.js';

export async function resetLives(username, password){

    let queryResult;

// connect to database
await con.connect(async function(err) {

  //select promise
  let queryPromise = new Promise(function(myResolve, myReject) {
    
    con.query("UPDATE users SET lives= 1 WHERE name = '"+username+"' AND password = '"+password+"'", function (err, result, fields) {
      if (err) throw err;
      myResolve(result);
    });

    });


  queryResult = await queryPromise.then(
    function(value) { 
return true;
     },
    function(error) { return false; }
  );



});


return queryResult;


}
  
