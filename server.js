const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/api/home" && req.method === "GET") {
    res.end(JSON.stringify({
      page: "Home",
      message: "Welcome to Home Page from Backend"
    }));
  }

  else if (req.url === "/api/about" && req.method === "GET") {
    res.end(JSON.stringify({
      page: "About",
      message: "This project is a Multi Page Frontend + Backend App"
    }));
  }

  else if (req.url === "/api/contact" && req.method === "GET") {
    res.end(JSON.stringify({
      page: "Contact",
      email: "contact@example.com",
      phone: "6382721533"
    }));
  }

  else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: "API Not Found" }));
  }
});

server.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});

/*const http = require("http");

const server = http.createServer((req, res) => {

  // Allow React to connect (CORS)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/api/message" && req.method === "GET") {
    res.end(JSON.stringify({
      message: "Hello from Node.js Server, this is your backend speaking!"
    }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: "Not Found" }));
  }

});

server.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});*/
