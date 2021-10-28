let api_key = '6a1d4f2afd3b4379bd04f56e72a8bb6d';

function clickevent(){
    event.preventDefault();
    const search_value = document.getElementsByName('searchbox')[0].value;     // get the search value
    //console.log(search_value);
    getResults(search_value);
}

function foodclickevent(){      // for food news
    getResults('Food');
}

function techclickevent(){     // for technology news
    getResults('Technology');
}

function sportsclickevent(){    // for sports news
    getResults('Sports');
}

function businessclickevent(){    // for business news
    getResults('Business');
}

let newsaccordion = document.getElementById('newsaccordion');   // used to grab the news container


// for news specific to any search
function getResults(query){      
    const xhr = new XMLHttpRequest();    // create an ajax get request
    xhr.open('GET', `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${api_key}`, true);  // used for get request

    // when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let json = JSON.parse(this.responseText);
            console.log(json);
            let articles = json.articles;
            let newshtml = "";
            articles.forEach(function(element, index) {
                let news = `<div class="card">
                                <div class="card-header" id="heading${index}">
                                    <h2 class="mb-0">
                                        <button
                                        class="btn btn-link"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapse${index}"
                                        aria-expanded="true"
                                        aria-controls="collapse${index}"
                                        >
                                        <b>Breaking News ${index+1}</b> - ${element.title}
                                        </button>
                                    </h2>
                                </div>
    
                                <div
                                id="collapse${index}"
                                class="collapse show"
                                aria-labelledby="heading${index}"
                                data-parent="#newsaccordion"
                                >
                                    <div class="card-body"> ${element.content}. <a href="${element.url}" target="_blank"> <b>Read More...</b> </a> </div>
                                </div>
                            </div>`;
                newshtml += news;
            })
            newsaccordion.innerHTML = newshtml;
        }
        else{
            console.log("Some error occured")
        }
    }
    
    xhr.send()   // sends the final result
}

const xhr = new XMLHttpRequest();  // create an ajax get request

xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${api_key}`, true);  // used for get request

// when response is ready
xhr.onload = function () {
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        console.log(json);
        let articles = json.articles;
        let newshtml = "";
        articles.forEach(function(element, index) {
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                    <button
                                    class="btn btn-link"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapse${index}"
                                    aria-expanded="true"
                                    aria-controls="collapse${index}"
                                    >
                                    <b>Breaking News ${index+1}</b> - ${element.title}
                                    </button>
                                </h2>
                            </div>

                            <div
                            id="collapse${index}"
                            class="collapse show"
                            aria-labelledby="heading${index}"
                            data-parent="#newsaccordion"
                            >
                                <div class="card-body"> ${element.content}. <a href="${element.url}" target="_blank"> <b>Read More...</b> </a> </div>
                            </div>
                        </div>`;
            newshtml += news;
        })
        newsaccordion.innerHTML = newshtml;
    }
    else{
        console.log("Some error occured")
    }
}

xhr.send()  // sends the final result



