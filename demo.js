console.log('hi')

fetch('https://api.airtable.com/v0/appAcEvq8fb5jWc6B/albums', {
    headers: {
        Authorization: 'Bearer keyU0oov6exskr2Q0',
    },
})
.then(response => response.json())
.then(data => {
    console.log(data);
    const container = document.querySelector('.container');
    data.records.forEach(album => {
    console.log(album);


container.innerHTML += `
<div class="album">
<h3>${album.fields.file}</h3>

</div>
`;
});
});