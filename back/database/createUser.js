//dependencies
import dotenv from 'dotenv';
dotenv.config({ path: './../.env' });
import { con } from './createDbInitially.js';

export function createUser(username, password){

// connect to database
con.connect(async function(err) {

  //select promise
  let queryPromise = new Promise(function(myResolve, myReject) {
    
    con.query("SELECT * FROM users WHERE name = '"+username+"' AND password = '"+password+"'", function (err, result, fields) {
      if (err) throw err;
      myResolve(result);
    });

    });


  let queryResult = await queryPromise.then(
    function(value) { 
return value[0];
     },
    function(error) { /* code if some error */ }
  );

//insert value
if (queryResult?.name == username ||  queryResult?.password == password){

  console.log("this user or password already exists");

}else{

con.query("INSERT INTO users (name, password) VALUES ('"+username+"', '"+password+"')", function (err, result) {
if (err) throw err;
console.log("1 record inserted");
});

}
});

}
  
