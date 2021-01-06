$.getJSON('/assets/Articles/graphics_design.json', function (json) {
    var array = [];
    for (var key in json) {
        if (json.hasOwnProperty(key)) {
            var item = json[key];
            array.push({
                name: item.name,
                category: item.category,
                description: item.description,
                deviantart_link: item.deviantart_link,
                category_name:item.category_name,
                link_to_screenshot:item.link_to_screenshot,
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




            document.getElementById('graphics_port').innerHTML +=
                `

                <!-- ${portfolio[i].category} -->
                <div class="col-lg-4 col-md-6 portfolio-item filter-${portfolio[i].category_name}">
                    <div class="portfolio-wrap">
                        <img src="${portfolio[i].link_to_screenshot}" class="img-fluid" alt="">
                        <div class="portfolio-info">
                            <h4>${portfolio[i].name}</h4>
                            <p>${portfolio[i].category}</p>
                            <p>${portfolio[i].description}</p>
                            <div class="portfolio-links">
                                <a href="${portfolio[i].deviantart_link}" data-gall="portfolioGallery"
                                    class="venobox" title="Ghost Recon Wildlands"><i class="bx bx-plus"></i></a>
                                <a href="/portfolio-details.html" data-gall="portfolioDetailsGallery"
                                    data-vbtype="iframe" class="venobox" title="Portfolio Details"><i
                                        class="bx bx-link"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ${portfolio[i].category} -->



            
            `;
            i++
        }

    );

}
displayPortfolio();