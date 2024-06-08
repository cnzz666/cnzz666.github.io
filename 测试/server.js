const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const querystring = require('querystring');

const hostname = '127.0.0.1';
const port = 3000;
let storedUsername = '';
let storedPassword = '';

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  if (req.method === 'GET' && parsedUrl.pathname === '/') {
    // 显示登录页面
    fs.readFile('login.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading login.html');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (req.method === 'POST' && parsedUrl.pathname === '/login') {
    // 处理登录逻辑
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const postData = querystring.parse(body);
      // 存储用户名和密码
      storedUsername = postData.username;
      storedPassword = postData.password;
      // 返回OK
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('OK');
    });
  } else if (req.method === 'GET' && parsedUrl.pathname === '/result.html') {
    // 显示结果页面
    fs.readFile('result.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading result.html');
      } else {
        // 替换模板中的用户名和密码
        const resultHtml = data.toString()
          .replace('<!-- USERNAME -->', storedUsername)
          .replace('<!-- PASSWORD -->', storedPassword);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(resultHtml);
      }
    });
  } else {
    // 404 Not Found
    res.writeHead(404);
    res.end('404 Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
