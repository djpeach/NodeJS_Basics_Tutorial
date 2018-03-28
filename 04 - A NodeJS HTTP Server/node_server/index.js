const http = require('http');

let serveHomePage = (response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Welcome to my home page</h1>");
    response.write("<a href='/nextpage'>Check out the next page</a>");
    response.end();
}

let doThisOnRequest = (request, response) => {
    if(request.method == 'GET' && request.url == '/') {
        serveHomePage(response);
    } 
    // else if (request.method == 'GET' && request.url == '/nextpage') {
    //     response.writeHead(200, {"Content-Type": "text/html"});
    //     response.write("<h3>Welcome to the next page!</h3>");
    //     response.write("<a href='./'>Go back to the home page</a>");
    //     response.end();
    // } else {
    //     response.writeHead(404, {"Content-Type": "text/plain"});
    //     response.write("Error 404: Page not found.")
    //     response.end();
    // }
    console.log('A request happened');
    response.end();
}

const server = http.createServer(doThisOnRequest);

server.listen(3000, '127.0.0.1', () => {
  console.log(`Server running at http://localhost:3000/`);
});