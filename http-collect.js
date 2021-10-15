'use strict'
const http = require('http')
const bl = require('bl')
const url = process.argv[2]

// http.get(url, (response) => {
//     response.setEncoding('utf8');
//     let rawData = '';
//     response.on('data', (chunk) => rawData += chunk);
//     response.on('error', console.error);
//     response.on('end', () => {
//         console.log(rawData.length);
//         console.log(rawData);
//     })
// }).on('error', console.error)

http.get(url, (response) => {
    response.pipe(bl((err, data) => {
        if (err) {
            return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
})

