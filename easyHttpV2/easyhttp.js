/**
 * Easy Http v2.0
 * Library for http request
 * @version : 2.0
 * @author : Mohamed A. Abdisamad
 */
class easyHttp {
  /** Get Http Request */
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }
  /** POST Http Request */
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  /** PUT Http Request */
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .then(err => reject(err));
    });
  }
  /** PUT Http Request */
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(() => resolve('user Deleted'))
        .catch(err => reject(err));
    });
  }
}
