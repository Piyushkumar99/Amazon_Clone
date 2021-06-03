import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Avatar/HeroPC_1500x600_SVA._CB667240774_.jpg"
                alt="amazon_pay"
            />

            <div className="home__row">
                <Product 
                    id="1234" 
                    title="Wings of Fire: An Autobiography of Abdul Kalam"
                    price={80}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51wbVQTpTgL._SX339_BO1,204,203,200_.jpg"
                />

                <Product 
                    id="1235" 
                    title="Strava Nutrition Weight Gainer with Whey protein, Ashwagandha extract and digestive enzymes (Chocolate Flavour) 1kg / 2.2 lbs"
                    price={99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81mrNUdG8rL._SL1500_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id="1236" 
                    title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)"
                    price={129}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"
                />
                <Product 
                    id="1237" 
                    title="realme narzo 30 Pro (Sword Black, 6GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers"
                    price={279}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71RWePBUWaS._SL1500_.jpg"
                />
                <Product 
                    id="1238"
                    title="123ASUS ROG Zephyrus S GX531GW-ES009T 15.6-inch 144Hz Full HD Gaming Laptop (8th Gen Core i7 8750H/16GB/512GB PCIe SSD/Windows 10/RTX 2070 Max-Q 8GB Graphics), Black"
                    price={2740.85}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81xmpElZxhL._SL1500_.jpg"
                />
            </div>

            <div className="home_row">
                <Product 
                    id="1239" 
                    title="Samsung 27 inch (68.5 cm) Curved LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Audio Ports - LC27F390FHWXXL (Black)"
                    price={232.98}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71nplbAMwzL._SL1202_.jpg"
                />
            </div>

        </div>
    );
}

export default Home;
