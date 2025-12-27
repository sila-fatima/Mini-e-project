var cards = ""
fetch('../jsonfiles/oxford.json')
    .then(Response => Response.json())
    .then(data => {
        for (const eachitem of data) {
            cards += `  <div class="col-lg-3 col-md-6" style="border: none; " >  
                <div class="card">
                    <img class="card-img" src="${eachitem.image}" alt="">
                    <h3 class="card-name"><a style="font-size:25px;font-weight: 640;"
                            href="${eachitem.link}">
                    ${eachitem.name}</a> </h3>
                    <p class="card-brand">${eachitem.brand}</p>
                    <p class="card-price">${eachitem.price}</p>
                </div>
                    </div>`

        }
        document.querySelector(".cards").innerHTML = cards
    })