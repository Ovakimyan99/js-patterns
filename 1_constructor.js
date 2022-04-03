// ES5
function Server(name, ip) {
  this.name = name
  this.ip = ip
}

Server.prototype.getUrl = function() {
  return `https://${this.ip}:80`
}

// OR ES6
class Server {
  constructor(name, ip) {
    this.name = name
    this.ip = ip
  }

  getUrl() {
    return `https://${this.ip}:80`
  }
}

const aws = new Server('AWS Germany', '123, 432, 345. 23')

