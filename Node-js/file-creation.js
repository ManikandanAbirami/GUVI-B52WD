const http = require("http");
const fs = require("fs");
const path = require("path");

const folderPath = "./files"; //Folder where our files will get saved

if (!fs.existsSync(folderPath)) {
  // Create the folder if it doesnt exist
  fs.mkdirSync(folderPath, { recursive: true });
}

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/create-file" && req.method === "GET") {
    // Create a file with current timestamp
    const now = new Date();
    const fileName = `${now.toISOString().replace(/:/g, "-")}.txt`;
    const filePath = path.join(folderPath, fileName);

    fs.writeFile(filePath, now.toString(), (err) => {
      if (err) {
        res.writeHead(500);
        res.end("Server error!");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`File created: ${fileName}`);
    });
  } else if (req.url === "/list-files" && req.method === "GET") {
    //List all the text files in the folder
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        res.writeHead(500);
        res.end("Server error!");
        return;
      }
      const txtFiles = files.filter((file) => path.extname(file) === ".txt");
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(txtFiles));
    });
  } else {
    res.writeHead(400);
    res.end("Not found!");
  }
});

const port = 8080;
server.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
