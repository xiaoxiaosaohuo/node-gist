const fs = require("fs");
const mimes = require("./mimes");

/**
 * 遍历读取目录类容
 * @param {string} reqPath 请求资源的绝对路径
 * @return {array} 目录内容列表
 */
const walk = (reqpath)=>{
    const files = fs.readdirSync(reqpath);
    const dirList = [];
    const fileList = [];
    for(let i = 0,len=files.length; i<len; i++){
        let item = files[i];
        let itemArr = item.split(".");
        let itemMime = itemArr.length > 1 ? itemArr[itemArr.length - 1] : "undefined";

        if (typeof mimes[itemMime] === "undefined") {
          dirList.push(files[i]);
        } else {
          fileList.push(files[i]);
        }
    }
    let result = dirList.concat(fileList);

    return result;
}
module.exports = walk;