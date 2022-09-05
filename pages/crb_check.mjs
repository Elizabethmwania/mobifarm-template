async function makeRequest() {
  try {
    const response = await fetch('https://randomuser.me/api/');

    console.log('response.status: ', response.status); // 👉️ 200
    console.log(response);

    function validateUser(e) {
    var number = document.getElementById('number');
    if (number.value = "isActive")
    {
        alert('You cant Register!');
        return false;
    } else {
      if(number.value != "isActive"){
        alert('registered successifully')

      }
        return true;
    }
}


  } catch (err) {
    console.log(err);
  }
}

makeRequest();
