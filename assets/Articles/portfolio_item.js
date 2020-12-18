$.getJSON('../Assets/portfolio.json', function (json) {
    var array = [];
    for (var key in json) {
        if (json.hasOwnProperty(key)) {
            var item = json[key];
            array.push({
                name: item.name,
                category: item.category,
                description: item.description,
                github_link: item.github_link,
                date_published:item.date_published,
                category_name:item.category_name,
                link_to_screenshot:item.link_to_screenshot,
                link_to_source:item.link_to_source
            });            
        }
    }
    displayPortfolio(array);
    });

function displayPortfolio(array) {
    
    var portfolio = array;
    console.log(portfolio);



    var i = 0;


    portfolio.forEach(function () {




            document.getElementById('full-portfolio').innerHTML +=
                `
            <!-- Portfolio Item -->                    
            <div class="card single-portfolio col-sm-4 all ${portfolio[i].category_name}">
                <div class="relative">
                    <div class="thumb">
                        <div class="overlay overlay-bg"></div>
                        <!-- Image -->
                        <img class="image img-fluid" src="${portfolio[i].link_to_screenshot}" alt="">
                    </div>  
                </div>
                <div class="p-inner">
                    <!-- Text and Tag -->
                    <h4>
                        <a href="${portfolio[i].link_to_source}">  
                            ${portfolio[i].name}
                        </a>
                    </h4>
                    <div class="cat">${portfolio[i].category}</div>
                    <p>${portfolio[i].description}</p>
                </div>                                         
            </div>
            `;
            i++
        }

    );

}
displayPortfolio();