
 //handle on submit
const form = document.getElementById('form');
        
form.addEventListener('submit', function(e) {
// Prevent default behavior:
e.preventDefault();

function validateUser(e) {
    var name = document.getElementById('name');
    var number = document.getElementById('number');
    if (name.value != 'Elizabeth')
    {
        alert('Your emails don\'t match.');
        return false;
    } else {
        return true;
    }
}

// Create payload as new FormData object:
const payload = new FormData(form);
// Post the payload using Fetch:
fetch('https://httpbin.org/post', {
method: 'POST',
body: payload,
})
.then(res => res.json())
.then((data) => {
 let formData = data;
 //console.log(formData);
})
// .then(data => console.log(data))
})
//api data
let fetchRes = fetch(
"https://ghibliapi.herokuapp.com/films");
        // fetchRes is the promise to resolve
        // it by using.then() method
        fetchRes.then(res =>
            res.json()).then(data => {
                data.forEach(movie => {
                //console.log(movie.title);
                })
            })
