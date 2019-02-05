import Promise = require("promise");
import {Item} from "../../../entity/item";
import {PoolConnection} from "mysql";
import {ItemDAO} from "../item-dao";


export class ItemDAOImpl implements ItemDAO {

    constructor(private connection: PoolConnection) {}

    delete(code: string): Promise<boolean> {

        return new Promise((resolve, reject) => {

            this.connection.query(`DELETE FROM iteminfo WHERE code='${code}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });

    }

    find(code: string): Promise<Array<Item>> {

        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM iteminfo WHERE code='${code}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });

    }

    findAll(): Promise<Array<Item>> {

        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM iteminfo`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });

    }

    save(entity: Item): Promise<boolean> {

        return new Promise((resolve, reject) => {

            this.connection.query(
                `INSERT INTO iteminfo VALUES ('${entity.code}','${entity.description}','${entity.unitPrice}','${entity.qtyOnHand}')`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });

    }

    update(entity: Item): Promise<boolean> {
        return new Promise((resolve, reject) => {

            console.log(`UPDATE Item SET description = '${entity.description}', qtyOnHand ='${entity.qtyOnHand}', unitPrice ='${entity.unitPrice}' WHERE code='${entity.code}'`);
            this.connection.query(`UPDATE iteminfo SET description = '${entity.description}', qtyOnHand ='${entity.qtyOnHand}', unitPrice ='${entity.unitPrice}' WHERE code='${entity.code}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    count(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.connection.query("select count(*) as count from iteminfo",(err, results) => {
                if (err){
                    reject(err);
                }  else {
                    resolve(results[0].count);
                }
            });
        });
    }

}