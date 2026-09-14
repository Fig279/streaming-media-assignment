const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const mediaHandler = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
    console.log(request.url);
    switch (request.url) {
        case '/':
            htmlHandler.getIndex(request, response, "index");
            break;
        case '/party.mp4':
            mediaHandler.getParty(request, response, "/party.mp4");
            break;
        case '/bling.mp3':
            mediaHandler.getParty(request, response, "/bling.mp3");
            break;
        case '/bird.mp4':
            mediaHandler.getParty(request, response, "/bird.mp4");
            break;
        case '/page2':
            htmlHandler.getIndex(request, response, "page2");
            break;
        case '/page3':
            htmlHandler.getIndex(request, response, "page3");
            break;
        default:
            htmlHandler.getIndex(request, response, "index");
            break;
    };

}

http.createServer(onRequest).listen(port, () => {
    console.log(`Listening on 127.0.0.1:${port}`);
});