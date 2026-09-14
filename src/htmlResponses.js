const fs = require('fs'); // file system module

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const page3 = fs.readFileSync(`${__dirname}/../client/client3.html`);

const pages = {
    "index": index,
    "page2": page2,
    "page3": page3,

}

const getIndex = (request, response, pageName) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(pages[pageName]);
    response.end();
};

module.exports = {
    getIndex: getIndex,
}

