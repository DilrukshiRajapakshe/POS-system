import {File} from "../../entity/file";

export interface FileDAO extends SuperDAO<File,string>{

    count():Promise<number>
}