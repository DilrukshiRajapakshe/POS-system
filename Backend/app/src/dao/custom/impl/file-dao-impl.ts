import Promise = require("promise");
import {File} from "../../../entity/file";
import {PoolConnection} from "mysql";
import {FileDAO} from "../file-dao";
import axios = require("axios");

export class FileDAOImpl implements FileDAO {

    constructor(private connection: PoolConnection) {
    }

    count(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.connection.query("select count(*) as count from Customer",(err, results) => {
                if (err){
                    reject(err);
                }  else {
                    resolve(results[0].count);
                }
            });
        });
    }

    delete(file: string): Promise<boolean> {

        return new Promise((resolve, reject) => {

            this.connection.query(`DELETE FROM File WHERE file='${file}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });

    }

    find(file: string): Promise<Array<File>> {

        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM File WHERE file='${file}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });

    }

    findAll(): Promise<Array<File>> {

        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM File`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });

    }

    save(entity: File): Promise<boolean> {

        return new Promise((resolve, reject) => {

            this.connection.query(`INSERT INTO File VALUES ('${entity.file}')`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });

    }

    update(entity: File): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.connection.query(`UPDATE File SET file = '${entity.file}' WHERE id='${entity.file}'`,
                (err, results) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

}
