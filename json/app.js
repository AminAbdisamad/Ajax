const displayCustomer = document.querySelector('#customer');
const displayCustomers = document.querySelector('#customers');
document.querySelector('#customer').addEventListener('click', LoadCustomer);
document.querySelector('#customers').addEventListener('click', LoadCustomers);
function LoadCustomer() {
  //Initialize XHR
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'customer.json', true);
  xhr.onload = function() {
    if (this.status == 200) {
      const customer = JSON.parse(this.responseText);
      let output = `<ul>
      <li>ID: ${customer.id}</li>
      <li>Name: ${customer.name}</li>
      <li>Email: ${customer.Email}</li>
      <li>Phone: ${customer.Phone}</li>
      <li>Skills: ${customer.Skills}</li>
      <li>Company: ${customer.Company}</li>
      </ul>`;
      displayCustomer.innerHTML = output;
    }
  };
  xhr.send();
}

// Loading customers from JSON file
function LoadCustomers() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'customers.json', true);
  xhr.onload = function() {
    if (this.status == 200) {
      const customers = JSON.parse(this.responseText);
      //   console.log(customers);
      let output = '';
      customers.forEach(customer => {
        output += `<ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.Company}</li>
        <li>Phone: ${customer.Phone}</li>
        </ul>`;
      });
      displayCustomers.innerHTML = output;
    }
  };
  xhr.send();
}
