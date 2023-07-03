import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../header/Navbar";

const Beverages = () => (
  <>
    <Navbar />
    <h2 className=" bev-h2 text-[25px]	text-center">OUR BEVERAGES MENU</h2>
    <div className="menu-priceList">
      <div className="card-page menu-price-beverage">
        <div className="card max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="priceListHeader ">
            <h2>HOT DRINKS</h2>
          </div>
          <div className="priceListContainer">
            <div className="priceListImg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb3CDhAsdPObHEiki8rQop-q_PFvwPL4K64j7GdQXEV9RnfdSjHBAC1Dg13P2HeZqdwBY&usqp=CAU"
                alt=""
              />
            </div>
            <div className="priceListDetail">
              <h4>RISTRETTO/DOPPIO</h4>
              <h6>2,00€/ 2,70€</h6>
            </div>
          </div>
          <div className="priceListContainer">
            <div className="priceListImg">
              <img
                src="https://qph.cf2.quoracdn.net/main-qimg-5300b1625fae85195c27806420ac292d-pjlq"
                alt=""
              />
            </div>
            <div className="priceListDetail">
              <h4>ESPRESSO/DOPPIO</h4>
              <h6>2,00€/ 2,70€</h6>
            </div>
          </div>
          <div className="priceListContainer">
            <div className="priceListImg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0xcH6N_sj3aTe9J7vsdLdpgDi1qpqAsHQWhUqtH2BvwCxyJvg4whdBZ3DJ-uNjJoLFE4&usqp=CAU"
                alt=""
              />
            </div>
            <div className="priceListDetail">
              <h4>FLAT WHITE</h4>
              <h6>3,60€</h6>
            </div>
          </div>
          <div className="priceListContainer">
            <div className="priceListImg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_fT1_2Kfo7VvMj7Os-47zGKNBrsn3wKU4QA&usqp=CAU"
                alt=""
              />
            </div>
            <div className="priceListDetail">
              <h4>CAPPUCCINO</h4>
              <h6>3,20€</h6>
            </div>
          </div>{" "}
          <div className="priceListContainer">
            <div className="priceListImg">
              <img
                src="https://media.istockphoto.com/id/1256257189/it/foto/caff%C3%A8-latte-macchiato-caff%C3%A8-stratificato.jpg?s=170667a&w=0&k=20&c=2O3UjYA1kAGW8m9Y2Tw9VKM_8tGS9374UIyhgc-S7gA="
                alt=""
              />
            </div>
            <div className="priceListDetail">
              <h4>CAFFÈ LATTE</h4>
              <h6>3,90€</h6>
            </div>
          </div>{" "}
          <div className="priceListContainer">
            <div className="priceListImg">
              <img
                src="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/vimdb/155108.jpg"
                alt=""
              />
            </div>
            <div className="priceListDetail">
              <h4>LATTE MACCHIATO</h4>
              <h6>0,3L 3,60€</h6>
            </div>
          </div>{" "}
          <div className="priceListContainer">
            <div className="priceListImg">
              <img
                src="https://feelgoodfoodie.net/wp-content/uploads/2021/11/how-to-make-hot-chocolate-7.jpg"
                alt=""
              />
            </div>
            <div className="priceListDetail">
              <h4>HOT CHOCOLATE</h4>
              <h6>0,3L 3,90€</h6>
            </div>
          </div>{" "}
          <div className="priceListContainer">
            <div className="priceListImg">
              <img
                src="https://www.foodandwine.com/thmb/gmDibzz-fJM0mKZU6RXMrjSNlQU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Masala-Chai-Latte-FT-RECIPE0622-580648d3d28a49748259e85334fbe00b.jpg"
                alt=""
              />
            </div>
            <div className="priceListDetail">
              <h4>CHAI LATTE</h4>
              <h6>0,3L 3,90€</h6>
            </div>
          </div>{" "}
          <div className="priceListContainer">
            <div className="priceListImg">
              <img
                src="https://www.sunglowkitchen.com/wp-content/uploads/2022/07/oat-milk-matcha-latte-1.jpg"
                alt=""
              />
            </div>
            <div className="priceListDetail">
              <h4>MATCHA LATTE</h4>
              <h6>0,25L 4,50€</h6>
            </div>
          </div>
        </div>

        <div className="card max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="priceListHeader ">
            <h2>FILTER COFFEE</h2>
          </div>
          <div className="priceListContainer">
            <div className="priceListImg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1V85SDdHQrsNR_brL84E089s86w4t8fP7_Q&usqp=CAU"
                alt=""
              />
            </div>
            <div className="priceListDetail">
              <h4>BATCH BREW</h4>
              <h6>0,25l 3,50€</h6>
            </div>
          </div>
          <div className="priceListContainer">
            <div className="priceListImg">
              <img
                src="https://www.mistobox.com/media/catalog/product/cache/0/image/450x450/9df78eab33525d08d6e5fb8d27136e95/m/b/mb_tandem-red_fruit-berry_png_7.jpg"
                alt=""
              />
            </div>
            <div className="priceListDetail">
              <h4>GUATEMALA TODOS SANTOS</h4>
              <p>
                Hints of following flavors: walnut, chocolate, plum Recommended
                brewing method: V60
              </p>
              <h6>0,25l 4,50€</h6>
            </div>
          </div>
          <div className="priceListContainer">
            <div className="priceListImg">
              <img
                src="https://m.media-amazon.com/images/I/71AqGaflNvL._AC_UF350,350_QL80_.jpg"
                alt=""
              />
            </div>
            <div className="priceListDetail">
              <h4>HONDURAS COMSA BIO</h4>
              <p>
                Hints of following flavors: chocolate, cane sugar Recommended
                brewing method: V60
              </p>
              <h6>0,25l 4,50€</h6>
            </div>
          </div>
          <div className="priceListContainer">
            <div className="priceListImg">
              <img
                src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/otten-coffee_otten-coffee-arabica-kenya-thiriku-ab-bubuk-kopi_full04.jpg"
                alt=""
              />
            </div>
            <div className="priceListDetail">
              <h4>KENYA THIRIKU</h4>
              <p>
                Hints of following flavors: Stone fruits, dark berries
                Recommended brewing method: Kalita
              </p>
              <h6>0,25l 4,50€</h6>
            </div>
          </div>{" "}
          <div className="priceListContainer">
            <div className="priceListImg">
              <img
                src="https://cdn.shopify.com/s/files/1/0571/2897/6538/products/DB-Mock-Brazil-Colombia-1kg_1200x1200.jpg?v=1636029804"
                alt=""
              />
            </div>
            <div className="priceListDetail">
              <h4>KOLUMBIEN LA CLAUDINA</h4>
              <p>
                Hints of the following flavors: almond, toffee, orange
                Recommended brewing method: Kalita
              </p>
              <h6>0,25l 4,50€</h6>
            </div>
          </div>
        </div>
        <div className="card max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="priceListHeader">
            <h2>ICED COFFEE</h2>
          </div>
          <div className="priceListContainer">
            <div className="priceListImg">
              <img
                src="https://www.nescafe.com/gb/sites/default/files/iced-latte-macchiato-recipe-grid-view-desktop.jpg"
                alt=""
              />
            </div>
            <div className="priceListDetail">
              <h4>ICED LATTE MACCHIATO</h4>
              <p>milk, ice cubes, 2 shots of espresso</p>
              <h6>0,3l 3,90€</h6>
            </div>
          </div>
          <div className="priceListContainer">
            <div className="priceListImg">
              <img
                src="https://www.starbucksathome.com/hr/sites/default/files/styles/recipe_recommendation/public/2021-03/2-IcedLatte_LongShadow_Cream_1.png?itok=vF5oTEfx"
                alt=""
              />
            </div>
            <div className="priceListDetail">
              <h4>ICED FLAT WHITE</h4>
              <p>milk, ice cubes, 2 shots of ristretto</p>
              <h6>0,25l 3,70€</h6>
            </div>
          </div>
          <div className="priceListContainer">
            <div className="priceListImg">
              <img
                src="https://coffeeatthree.com/wp-content/uploads/iced-americano-recipe.jpg"
                alt=""
              />
            </div>
            <div className="priceListDetail">
              <h4>ICED AMERICANO</h4>
              <p>water, ice cubes, 2 shots of espresso</p>
              <h6>0,25l 2,70€</h6>
            </div>
          </div>
          <div className="priceListContainer">
            <div className="priceListImg">
              <img
                src="https://id.jura.com/-/media/global/images/coffee-recipes/images-redesign-2020/rosemary_orange_tonic_2000x1400px.jpg?la=en&hash=F922C60CC205E2465F513F301135CCFBC2CF7C4D"
                alt=""
              />
            </div>
            <div className="priceListDetail">
              <h4>ESPRESSO-TONIC</h4>
              <p>Fever Tree Tonic, ice cubes, 2 shots of espresso</p>
              <h6>0,25l 4,50€</h6>
            </div>
          </div>{" "}
          <div className="priceListContainer">
            <div className="priceListImg">
              <img
                src="https://www.liveeatlearn.com/wp-content/uploads/2020/04/easy-cold-brew-coffee-vert.jpg"
                alt=""
              />
            </div>
            <div className="priceListDetail">
              <h4>COLD BREW</h4>
              <p>cold brewed for 8 hours, served on ice cubes</p>
              <h6>0,25l 3,70€</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Beverages;
