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
                      <div class="col-lg-3 col-md-6 col-sm-12" id="prod__item">
                        <div class="card">
                            <div class="card-header">
                                <img src=${prod.image} class="w-100" />
                            </div>
                            <div class="card-body justify-content-around align-items-center">
                                <p class ="d-flex">
                                  <i class="fa fa-star"></i> 
                                  <p>(4.5)</p>
                                </p>
                                <h3>${prod.name}</h3>
                            </div>
                            <div class="card-footer d-flex justify-content-around align-items-center">
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
                                <div class="card-body justify-content-around align-items-center">
                                    <p  class ="d-flex">
                                        <i class="fa fa-star"></i> 
                                        <p>(4.5)</p>
                                    </p>
                                    <h3>${item.name}</h3>
                                </div>
                                <div class="card-footer d-flex justify-content-around align-items-center">
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