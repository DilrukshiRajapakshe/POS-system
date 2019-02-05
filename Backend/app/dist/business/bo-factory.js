"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_bo_impl_1 = require("./customer-bo-impl");
var item_bo_impl_1 = require("./item-bo-impl");
var orderdetails_bo_impl_1 = require("./orderdetails-bo-impl");
var DAOTypes;
(function (DAOTypes) {
    DAOTypes[DAOTypes["CUSTOMER"] = 0] = "CUSTOMER";
    DAOTypes[DAOTypes["ITEM"] = 1] = "ITEM";
    DAOTypes[DAOTypes["ORDERS"] = 2] = "ORDERS";
    DAOTypes[DAOTypes["ORDERDETAILS"] = 3] = "ORDERDETAILS";
})(DAOTypes = exports.DAOTypes || (exports.DAOTypes = {}));
function getDAO(daoType, connection) {
    switch (daoType) {
        case DAOTypes.CUSTOMER:
            return new customer_bo_impl_1.CustomerBoImpl(connection);
        case DAOTypes.ITEM:
            return new item_bo_impl_1.ItemBoImpl(connection);
        case DAOTypes.ORDERDETAILS:
            return new orderdetails_bo_impl_1.OrderDertailsBOImpl(connection);
        default:
            return null;
    }
}
exports.getDAO = getDAO;
