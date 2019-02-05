"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var ItemDAOImpl = /** @class */ (function () {
    function ItemDAOImpl(connection) {
        this.connection = connection;
    }
    ItemDAOImpl.prototype.delete = function (code) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("DELETE FROM iteminfo WHERE code='" + code + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    ItemDAOImpl.prototype.find = function (code) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM iteminfo WHERE code='" + code + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    ItemDAOImpl.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM iteminfo", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    ItemDAOImpl.prototype.save = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("INSERT INTO iteminfo VALUES ('" + entity.code + "','" + entity.description + "','" + entity.unitPrice + "','" + entity.qtyOnHand + "')", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    ItemDAOImpl.prototype.update = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log("UPDATE Item SET description = '" + entity.description + "', qtyOnHand ='" + entity.qtyOnHand + "', unitPrice ='" + entity.unitPrice + "' WHERE code='" + entity.code + "'");
            _this.connection.query("UPDATE iteminfo SET description = '" + entity.description + "', qtyOnHand ='" + entity.qtyOnHand + "', unitPrice ='" + entity.unitPrice + "' WHERE code='" + entity.code + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    ItemDAOImpl.prototype.count = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("select count(*) as count from iteminfo", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results[0].count);
                }
            });
        });
    };
    return ItemDAOImpl;
}());
exports.ItemDAOImpl = ItemDAOImpl;
