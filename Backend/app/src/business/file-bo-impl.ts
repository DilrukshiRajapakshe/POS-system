import {FileDTO} from "../dto/filedto";
import {pool} from "../db/db-pool";
import {DAOTypes, getDAO} from "../dao/dao-factory";
import Promise = require("promise");
import {FileDAO} from "../dao/custom/file-dao";
import axios = require("axios");

export class FileBoImpl{

    findAllFile(): Promise<Array<FileDTO>>{

        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const fileDAO = <FileDAO> getDAO(DAOTypes.FILEDETAIL, connection);

                    const promise = fileDAO.findAll();
                    promise.then(files => {
                        resolve(files);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });

    }

    findFile(id: string): Promise<Array<FileDTO>>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const fileDAO = <FileDAO> getDAO(DAOTypes.FILEDETAIL, connection);

                    const promise = fileDAO.find(id);
                    promise.then(file => {
                        resolve(file);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });
    }

    saveFile(file: FileDTO): Promise<boolean>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const fileDAO = <FileDAO> getDAO(DAOTypes.FILEDETAIL, connection);

                    const promise = fileDAO.save(file);
                    promise.then(result => {
                        resolve(result);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });
    }

    updateFile(file: FileDTO): Promise<boolean>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const fileDAO = <FileDAO> getDAO(DAOTypes.FILEDETAIL, connection);

                    const promise = fileDAO.update(file);
                    promise.then(result => {
                        resolve(result);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });
    }

    deleteFile(id: string): Promise<boolean>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const fileDAO = <FileDAO> getDAO(DAOTypes.FILEDETAIL, connection);

                    const promise = fileDAO.delete(id);
                    promise.then(result => {
                        resolve(result);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });
    }

    fileCount():Promise<number>{
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if(err){
                    reject(err)
                }else {
                    const fileDAO=<FileDAO> getDAO(DAOTypes.FILEDETAIL, connection);
                    const promise= fileDAO.count();
                    promise.then(count =>{
                        resolve(count);
                    } ).catch(err=>{
                        reject(err);
                    })
                }
            })
        });
    }

}
