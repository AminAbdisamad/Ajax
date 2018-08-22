/**
 * Easy Http v3.0
 * Library for http request
 * @version : 3.0
 * @author : Mohamed A. Abdisamad
 */
class easyHttp {
  /** Get Http Request */
  async get(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
  /** POST Http Request */
  async post(url, data) {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const response = await res.json();
    return response;
  }

  /** PUT Http Request */
  async put(url, data) {
    const prep = await fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const response = await prep.json();
    return response;
  }
  /** PUT Http Request */
  async delete(url) {
    const prep = await fetch(url);
    const data = await prep.json();
    return 'User Deleted';
  }
}
