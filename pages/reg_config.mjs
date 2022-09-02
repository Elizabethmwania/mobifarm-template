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

// Button click handler
const onRegisterButtonClick = () => {
  const nationalIdElement = document.getElementById('nationalid');
  const nationalIdText = nationalIdElement.value.trim();

  //if field empty
  if (!nationalIdText){
    return alert('Missing National ID value');
  }
  return checkNationalId (nationalIdText, displayResult);
};

//api call to check nationalid to pass result
const checkNationalId = (nationalid, callback) => {
  const data = {
    text: nationalid,
    text: firstname,
    text:lastname,

  };
  const formatedData = Qs.stringify(data);
  fetch('https://uat.finserve.africa/v3-apis/v3.0/validate/crb', options)
    .then(response => 
    {const data = response.data;
      callback(data)
    })
    .catch(error => console.error(error))
};

const displayResult = () => {
  const label = result.label;
  const resultElement = document.getElementById('result');
  resultElement.setAttribute('class', label);
  let resultText = '';

  switch (label) {
    case 'match':
      resultText = 'ID matches user names';
      break;
    case 'unmatch':
      resultText = 'ID does not match users names';
    default:
      resultText = 'No information provided';  
  }

  resultElement.textContent = resultText;

};
