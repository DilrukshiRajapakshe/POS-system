"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mysql = require("mysql");
var app = express();
app.use(express.json());
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "thogakade",
    user: "root",
    password: "19960913"
});
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.getAllCustomer = function () {
        connection.query("select * from customer", function (err, results, fields) {
        });
    };
    Customer.prototype.saveCustomer = function (customer) {
        connection.query("INSERT INTO Customer VALUES (?,?,?,?)", function (err1, results, fields) {
        });
    };
    Customer.prototype.removeCustomer = function () {
        connection.query("DELETE FROM Customer WHERE id='?'", function (err1, results, fields) {
        });
    };
    Customer.prototype.updateCustomer = function () {
        connection.query("UPDATE Customer SET name=()", function (err1, results, fields) {
        });
    };
    Customer.prototype.searchCustomer = function (id) {
        connection.query("SELECT * FROM Customer WHERE id=()", function (err1, results, fields) {
        });
    };
    return Customer;
}());
exports.Customer = Customer;
