let arrProduct = [];
const getApiProduct = async () => {

    try {

        let result = await axios({
            url: "https://shop.cyberlearn.vn/api/Product",
            method: "GET",
        });

        arrProduct = result.data.content;
        console.log('Kết quả',result.data.content);
        let htmt = '';
        let currentItem = 4;
        for (let i = 0; i < currentItem; i++) {

            let prod = arrProduct[i];
            htmt += ` 
                      <div class="col-lg-3 col-md-6 col-sm-12 " id="prod__item">
                        <div class="card">
                            <div class="card-header">
                                <img src=${prod.image} class="w-100" />
                            </div>
                            <div class="card-body bg-dark text-light">
                                <p><i class="fa fa-star"> (4.5)</i></p>
                                <h4>${prod.name}</h4>
                            </div>
                            <div class="card-footer d-flex bg-dark text-light">
                                <p>${prod.price}$</p>
                                <button id="btnBuy">Add to cart</button>
                            </div>
                         </div>
                     </div>
            `
        }
        document.querySelector('#list__item').innerHTML = htmt;
        document.querySelector('#loadMoreBtn').onclick = function(){

            let currentItems = document.querySelectorAll('#prod__item').length;
            if (currentItem < arrProduct.length){
                 for ( let i = currentItems; i < arrProduct.length; i ++){

                    let item = arrProduct[i];
                    htmt += ` 
                            <div class="col-lg-3 col-md-6 col-sm-12" id="prod__item">
                            <div class="card">
                                <div class="card-header">
                                    <img src=${item.image} class="w-100" />
                                </div>
                                <div class="card-body bg-dark text-light">
                                <p><i class="fa fa-star"> (4.5)</i></p>
                                    <h4>${item.name}</h4>
                                </div>
                                <div class="card-footer d-flex bg-dark text-light">
                                    <p>${item.price}$</p>
                                    <button id="btnBuy">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    `
                 }
                 document.querySelector('#list__item').innerHTML = htmt;
                 document.querySelector('#loadMoreBtn').style.display = 'none';
            }
        }
    } catch (erro) {

        console.log(erro)
    }
}

window.onload = function(){

    getApiProduct();
}