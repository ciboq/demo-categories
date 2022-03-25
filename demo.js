
fetch('https://api.airtable.com/v0/appAcEvq8fb5jWc6B/Table%201')
.then(response => response.json())
.then(data => {
    console.log(data);
});