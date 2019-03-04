"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var FileDAOImpl = /** @class */ (function () {
    function FileDAOImpl(connection) {
        this.connection = connection;
    }
    FileDAOImpl.prototype.count = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("select count(*) as count from Customer", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results[0].count);
                }
            });
        });
    };
    FileDAOImpl.prototype.delete = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("DELETE FROM File WHERE file='" + file + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    FileDAOImpl.prototype.find = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM File WHERE file='" + file + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    FileDAOImpl.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM File", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    FileDAOImpl.prototype.save = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("INSERT INTO File VALUES ('" + entity.file + "')", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    FileDAOImpl.prototype.update = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("UPDATE File SET file = '" + entity.file + "' WHERE id='" + entity.file + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    return FileDAOImpl;
}());
exports.FileDAOImpl = FileDAOImpl;
