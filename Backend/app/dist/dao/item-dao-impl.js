"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var Promise = require("promise");
var ItemDAOImpl = /** @class */ (function () {
    function ItemDAOImpl() {
    }
    ItemDAOImpl.prototype.deleteItem = function (id) {
        var connection = mysql.createConnection({
            host: "localhost",
            port: 3306,
            database: "thogakade",
            user: "root",
            password: "19960913"
        });
        return new Promise(function (resolve, reject) {
            connection.query("DELETE FROM Item WHERE id='" + id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    ItemDAOImpl.prototype.findItem = function (id) {
        var connection = mysql.createConnection({
            host: "localhost",
            port: 3306,
            database: "thogakade",
            user: "root",
            password: "19960913"
        });
        return new Promise(function (resolve, reject) {
            connection.query("SELECT * FROM Item WHERE id='" + id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    ItemDAOImpl.prototype.updateItem = function (item) {
        var connection = mysql.createConnection({
            host: "localhost",
            port: 3306,
            database: "thogakade",
            user: "root",
            password: "19960913"
        });
        return new Promise(function (resolve, reject) {
            connection.query("UPDATE Item SET name='" + item.name + "', \n                      address='" + item.address + "' WHERE id='" + item.id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    ItemDAOImpl.prototype.findAllItems = function () {
        var connection = mysql.createConnection({
            host: "localhost",
            port: 3306,
            database: "thogakade",
            user: "root",
            password: "19960913"
        });
        return new Promise(function (resolve, reject) {
            connection.query("Select * from Item", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    ItemDAOImpl.prototype.saveItem = function (item) {
        var connection = mysql.createConnection({
            host: "localhost",
            port: 3306,
            database: "thogakade",
            user: "root",
            password: "19960913"
        });
        return new Promise(function (resolve, reject) {
            connection.query("Insert into Item values ('" + item.code + "','" + item.description + "','" + item.unitPrice + "','" + item.qtyOnHand + "')", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(item.code);
                }
            });
        });
    };
    return ItemDAOImpl;
}());
exports.ItemDAOImpl = ItemDAOImpl;
