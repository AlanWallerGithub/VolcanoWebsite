//dependencies
import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config({ path: './../.env' });
export var con;

//establish connection

export async function createDbInitially(){

  con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
  });

// create database
con.connect(async function(err) {

    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE IF NOT EXISTS volcanodb", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });

    con.query("USE volcanodb", function (err, result) {
      if (err) throw err;
      console.log("Database in use");
    });

    con.query("CREATE TABLE IF NOT EXISTS users (name VARCHAR(255), password VARCHAR(255), lives INT DEFAULT 1)", function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });



});}



