function easyHttp() {
  this.http = new XMLHttpRequest();
}

// Make HTTP GET
easyHttp.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);
  this.http.onload = () => {
    if (this.http.status === 200) {
      callback(null, this.http.responseText);
    } else {
      callback('Error: ' + this.http.status);
    }
  };
  this.http.send();
};

// Make HTTP POST
easyHttp.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('content-type', 'application/json');
  this.http.onload = () => {
    callback(null, this.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};
// Make HTTP PUT Request
easyHttp.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.onload = () => {
    callback(null, this.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};
// Make HTTP Delete Request

easyHttp.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);
  this.http.onload = () => {
    if (this.http.status === 200) {
      callback(null, 'Post Deleted');
    } else {
      callback('Error: ' + this.http.status);
    }
  };
  this.http.send();
};
