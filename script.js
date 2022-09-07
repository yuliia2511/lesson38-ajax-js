const titleInput = document.getElementById('title');
const submitBtn = document.getElementById('btn');
const prom = document.getElementById('prom');

function searchResult(title, source) {
    let blockTitle = document.createElement('div');
    blockTitle.setAttribute('class', 'search-title');
    blockTitle.innerText +=  `${title}`;

    prom.append(blockTitle);
    let blockImg = document.createElement('img');

    if (source == 'N/A') {
        blockImg.setAttribute('src', `/img/ilustracao-de-pagina-de-erro-web.jpeg`);
    } else {
        blockImg.setAttribute('src', `${source}`);
    }

    prom.append(blockImg);
}

function createRequest(method, url) {
    return fetch(url).then(response => {
        return response.json();
    });
}

function submitRequest(element) {
    element.preventDefault();

    let s = `${titleInput.value}`;
    const requestItem = `https://www.omdbapi.com/?apikey=862178f8&s=${titleInput.value}`;

    createRequest('GET', requestItem).then(data => {
        JSON.stringify(data.Search.forEach(element => {
            searchResult(element.Title, element.Poster);
        }));
    });
}

submitBtn.addEventListener('click', submitRequest);








// document.getElementById('form').addEventListener('submit', (element) => {
//     element.preventDefault();
//     searchContent(document.querySelector('input[name="content"]').value);
// });

// function searchContent() {
//     const name = document.getElementById('title');

//     const omdbApi = new XMLHttpRequest();
//     const omdbUrl =  `https://www.omdbapi.com/?apikey=862178f8&i=tt3896198&name=${name}`;
//     omdbApi.open('get', omdbUrl, true);

//     omdbApi.onload = function(e) {
//         e.preventDefault();

//         if(this.status == 200) {
//             const result = JSON.parse(this.responseText);

//             const outputResult = '';
//             for(const i in result) {
//                 outputResult ==
//                 '<div class="item">' +
//                 '<p>Title:' + result.Title + '</p>' +
//                 '</div>'
//             }
//             document.getElementById('search-result').innerText = outputResult;
//         } else {
//             alert('Movie not found!');
//         }
//     }
//     omdbApi.send(); 
// }





