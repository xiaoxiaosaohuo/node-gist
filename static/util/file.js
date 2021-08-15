const fs = require('fs');

/**
 * 读取文件方法
 * @param {*} filepath 
 * @return {string|binary} 
 */
const file = (filepath)=>{
    const content = fs.readFileSync(filepath,'binary');
    return content;
}

module.exports = file;