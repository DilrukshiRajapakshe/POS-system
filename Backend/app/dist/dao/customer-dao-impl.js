"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var Promise = require("promise");
var CustomerDAOImpl = /** @class */ (function () {
    function CustomerDAOImpl() {
    }
    CustomerDAOImpl.prototype.deleteCustomer = function (id) {
        var connection = mysql.createConnection({
            host: "localhost",
            port: 3306,
            database: "thogakade",
            user: "root",
            password: "19960913"
        });
        return new Promise(function (resolve, reject) {
            connection.query("DELETE FROM Customer WHERE id='" + id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    CustomerDAOImpl.prototype.findCustomer = function (id) {
        var connection = mysql.createConnection({
            host: "localhost",
            port: 3306,
            database: "thogakade",
            user: "root",
            password: "19960913"
        });
        return new Promise(function (resolve, reject) {
            connection.query("SELECT * FROM Customer WHERE id='" + id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    CustomerDAOImpl.prototype.updateCustomer = function (customer) {
        var connection = mysql.createConnection({
            host: "localhost",
            port: 3306,
            database: "thogakade",
            user: "root",
            password: "19960913"
        });
        return new Promise(function (resolve, reject) {
            connection.query("UPDATE Customer SET name='" + customer.name + "', \n                      address='" + customer.address + "' WHERE id='" + customer.id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    CustomerDAOImpl.prototype.findAllCustomers = function () {
        var connection = mysql.createConnection({
            host: "localhost",
            port: 3306,
            database: "thogakade",
            user: "root",
            password: "19960913"
        });
        return new Promise(function (resolve, reject) {
            connection.query("Select * from Customer", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    CustomerDAOImpl.prototype.saveCustomer = function (customer) {
        var connection = mysql.createConnection({
            host: "localhost",
            port: 3306,
            database: "thogakade",
            user: "root",
            password: "19960913"
        });
        return new Promise(function (resolve, reject) {
            connection.query("Insert into customer values ('" + customer.id + "','" + customer.name + "','" + customer.address + "','" + customer.salary + "')", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(customer.id);
                }
            });
        });
    };
    return CustomerDAOImpl;
}());
exports.CustomerDAOImpl = CustomerDAOImpl;
