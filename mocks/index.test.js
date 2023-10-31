const File = require("./src/file")
const {error} = require('./src/constants');
const assert = require('node:assert')

;(async ()=>{

    // variable on this scope are only valid on execution time
{
    const filePath = './mock/emptyFile-invalid.csv'
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJson(filePath);
    await assert.rejects(result,expected);
}

{
    const filePath = './mock/invalid-header.csv'
    const expected = new Error(error.FILE_FIELDS_ERROR_MESSAGE)
    const result = File.csvToJson(filePath);
    await assert.rejects(result,expected);
}

})();