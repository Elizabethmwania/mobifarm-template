import fetch from 'node-fetch'
const options = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer T4ie7x4UxoprUNsiAXwnTGShN4EVkxXvwo2gUhYnl0BTstt3jc05OmMc67bf5Ky3Dx5NYQ0ipnJaqafelGLBuA==',
      'Content-Type': 'application.json',
    },
    body: '{"crbIdentity":{"nationalId":"25915141","reportType":"Bank","countryCode":"KE","reference":"abc01"}}'
  };
  
  fetch('https://uat.finserve.africa/v3-apis/v3.0/validate/crb', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));