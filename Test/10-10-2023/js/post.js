const api_key = '&api_key=live_SAjBUDfHK7N2ma5ULncuEGJNgi3RHmCk7LM9kaCX5XftYulVZkw4KG6Uy4thjIlb'
const url = `https://api.thecatapi.com`

// const urlPost = 'https://api.thecatapi.com/v1/images/search?limit=10'

function get100Cats() {
    const apiUrl = `${url}/v1/images/search?limit=10${api_key}`

    $.ajax({
        url: apiUrl,
        type: 'GET',
        dataType: 'json',
        success: function(response) {
            const data = response
            let grid = document.getElementById('cat-wall');
            data.map(function(data){
                grid.innerHTML += `<img src="${data.url}">`
            })
        },
        error: function(error){
            console.error('Error:', error);
            document.getElementById('cat-wall').innerText = 'Error fetching cat data.';
        }
    })
}

window.onload = function() {
    get100Cats();
}

// if (document.readyState) {
//     get100Cats();
// }
 