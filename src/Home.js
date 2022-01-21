import React from "react";
import "./Home.css";
import Item from "./item";
import Product from "./Product";
import Carousel from "react-elastic-carousel";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
					<div className="Carousel">
						<Carousel
							enableAutoPlay
							autoPlaySpeed={3900}
							// autoPlay
							infiniteLoop
							itemsToShow={1}
							pagination={true}
							// itemPadding={[0, -30]}

							// showArrows={false}
						>
							<Item>
								<img
									src="https://m.media-amazon.com/images/I/61FkG0lVNdL._SX3000_.jpg"
									alt=""
								/>
							</Item>
							<Item>
								<img
									src="https://m.media-amazon.com/images/I/61XeI2ouz6L._SX3000_.jpg"
									alt=""
								/>
							</Item>
							<Item>
								<img
									src="https://m.media-amazon.com/images/I/615K5ffvbGL._SX3740_.jpg"
									alt=""
								/>
							</Item>
							<Item>
								<img
									src="https://m.media-amazon.com/images/I/71PiGY+Y6ML._SX3000_.jpg"
									alt=""
								/>
							</Item>
							<Item>
								<img
									src="https://m.media-amazon.com/images/I/71WBRk5SWhL._SX3740_.jpg"
									alt=""
								/>
							</Item>
							<Item>
								<img
									src="https://m.media-amazon.com/images/I/71pRV2VfXRL._SX3740_.jpg"
									alt=""
								/>
							</Item>
							<Item>
								<img
									src="https://m.media-amazon.com/images/I/61pg+50rEtL._SX3000_.jpg"
									alt=""
								/>
							</Item>
						</Carousel>
					</div>
        <div className="home_row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/G/01/kindle-content-smeghn/2021/GB1231/Email-CorpEmail_500x500._AC_SY230_.jpg"
          />

          <Product
            id="49538094"
            title="Gesho Entchet | Authentic Ethiopian Aroma Hops Stems (4 oz) | NON GMO | No Preservatives | Made and Imported from Ethiopia"
            price={15.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/415aeP4Z42S._SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
            id="B0787D2T9D"
            title="Ethiopian/Eritrean Traditional Coffee Set"
            price={48.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61qscYvyjyL._AC_SL1000_.jpg"
          />
          <Product
            id="2133850"
            title="Ufree Hair Clippers for Men + T-Blade Trimmer Kit, Professional Hair Cutting Kit Beard Trimmer Barbers Clippers for Men Women Kids Clipper Set Cordless &..."
            price={59.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/71yCgYscPkL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Nathan James Piper Faux White Marble Round Modern Living Accent Side or Coffee, Sofa Center Table for Dining Room/Tea with Metal Frame, Black"
            price={142}
            rating={5}
            image="https://m.media-amazon.com/images/I/8168KUtkImL._AC_SX679_.jpg"
          />
          <Product
            id="3254354345"
            title="Tomoca Ethiopian Ground Coffee"
            price={33}
            rating={4}
            image="https://m.media-amazon.com/images/I/91Ly50FuXRL._SL1500_.jpg"
          />
           <Product
            id="3254354346"
            title="Tomoca Ethiopian GroRIF6 Exercise Bike – Indoor Cycling Bike with Phone and Tablet Mount, 40 Lb Flywheel and Belt Drive System – Stationary Bike with Adjustable Seat, Bottle...und Coffee"
            price={399}
            rating={4}
            image="https://m.media-amazon.com/images/I/61fLK1gtUHL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/91naog1-yPL._AC_SL1500_.jpg"
          />
          <Product
            id="4903850"
            title="KIEKRO 2 in 1 Hair and Facial Steamer, Hair Steamer, Face Steamer, Hair Humidifier, Hot Mist Moisturizing, Hydration System Sprayer, Personal Care Use, Home and Salon (Blue White)"
            price={68}
            rating={3}
            image="https://m.media-amazon.com/images/I/61ZIN3SQyVL._SX425_.jpg"
          />
          <Product
            id="B0787D2T9D"
            title="APL: Athletic Propulsion Labs Women's Techloom Pro Sneakers"
            price={48.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71OMpHALXOL._AC_UY695_.jpg"
          />
          <Product
            id="B0787D2T9D"
            title="Niter Kibbeh Ethiopian Spice Clarified Butter"
            price={10}
            rating={4}
            image="https://m.media-amazon.com/images/I/51TwRaQ61bL._SL1080_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
