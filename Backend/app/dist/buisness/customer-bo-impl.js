"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomerBOImpl = /** @class */ (function () {
    function CustomerBOImpl() {
    }
    CustomerBOImpl.prototype.deleteCustomer = function (id) {
        return CustomerDAO.deleteCustomer(id);
    };
    CustomerBOImpl.prototype.findAllCustomers = function () {
        return undefined;
    };
    CustomerBOImpl.prototype.findCustomer = function (id) {
        return undefined;
    };
    CustomerBOImpl.prototype.saveCustomer = function (customer) {
        return undefined;
    };
    CustomerBOImpl.prototype.updateCustomer = function (customer) {
        return undefined;
    };
    return CustomerBOImpl;
}());
exports.CustomerBOImpl = CustomerBOImpl;
