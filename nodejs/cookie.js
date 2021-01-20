const http = require('http');
const cookie = require('cookie');

http.createServer((request, response) => {
  console.log(request.headers.cookie);
  let cookies = {};
  if(request.headers.cookie !== undefined) {
    cookies = cookie.parse(request.headers.cookie);
  }
  console.log(cookies.yummy_cookie);

  response.writeHead(200, {
    'Set-Cookie' : [
      `yummy_cookie=choco`, 
      `tasty_cookie=strawberry`,
      `permanent=cookies; Max-Age=${60*60*24*30}`,
      `secure_cookie=iamsecure; Secure`,
      `httponly_cookie=hi; HttpOnly`,
      'path_cookie=cookie; Path=/cookie',
      'domain_cookie=domain; Domain=o2.org'
    ]
  });

  response.end('Cookie!!');
}).listen(3000);