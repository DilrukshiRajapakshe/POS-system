import mysql = require("mysql");

export const pool = mysql.createPool({
    host:"localhost",
    port:3306,
    database:"sew",
    user:"root",
    password:"123",
    connectionLimit: 10
});