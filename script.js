document.getElementById('form').addEventListener('submit', (element) => {
    element.preventDefault();
    searchContent(document.querySelector('input[name="content"]').value);
});

function searchContent() {
    const name = document.getElementById('title');


    const omdbApi = new XMLHttpRequest();
    const omdbUrl =  `http://www.omdbapi.com/&apikey=862178f8=${name}&type=movie`;
    omdbApi.open('get', omdbUrl, true);

    omdbApi.onload = function(e) {
        e.preventDefault();

        if(this.status == 200) {
            const result = JSON.parse(this.responseText);

            console.log(result);

            const outputResult = '';
            for(const i in result) {
                outputResult +=
                '<div class="item">' +
                '<p>Title:' + result.Title + '</p>' +
                '</div>'
            }
            document.getElementById('search-result').innerText = outputResult;
        } else {
            alert('Movie not found!');
        }
    }
    omdbApi.send(); //The 400 (Bad Request) status code - (ошибка клиента; узнать как исправить)
}














