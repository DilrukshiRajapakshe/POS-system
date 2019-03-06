import {File} from "../../entity/file";
import axios = require("axios");
export interface FileDAO extends SuperDAO<File,string>{

    count():Promise<number>
}
