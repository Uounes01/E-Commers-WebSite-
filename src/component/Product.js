import data from '../json/data.json'
import { useState } from 'react';
import {Fade} from 'react-reveal'
import { FaWhatsapp } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

  
const Product = () => {
   const [filter,setFilter]= useState('main-menu')

return(
    <section className="products section" id="products">
        <div className="products__container container">
        <Fade left delay={400}>
           <h2 className="section__title">
            Find Natural Product and <br />
            choose what you love
           </h2>
        </Fade>
        
          <ul className="products__filters">
           <Fade left delay={800}>
             <li
              className={`products__item products__line ${filter === 'main-menu' && `active-product`}`}
              onClick={() => setFilter('main-menu')}
              data-filter=".delicacies"
            >
              <h3 className="products__title">Vitamins</h3>
              <span className="products__stock">+11 products</span>
            </li>
            <li className={`products__item products__line ${filter === 'coffee' && `active-product`}`}
             onClick={() => setFilter('coffee')}
                 data-filter=".coffee">
              <h3 className="products__title">Oils</h3>
              <span className="products__stock">+20 products</span>
            </li>
            <li className={`products__item products__line ${filter === 'desserts' && `active-product`}`} 
             onClick={() => setFilter('desserts')}
            data-filter=".cake">
              <h3 className="products__title">Honey</h3>
              <span className="products__stock">+10 products</span>
            </li>
          </Fade>
           
          </ul>

          <div className="products__content grid">
            {data.categories.map((category,index)=>{
                return(
                    category.category === filter &&  
                  <Fade key={index} bottom delay={80}>
                    <article className="products__card main-menu">
                     <div className="products__shape">
                     <a href="ProductPageURL" >
                     <a href='https://wa.me/+212680833928'>
                        <img  
                       
                           src={category.imageUrl}
                            alt=""
                           className="products__img"
                          />
                         </a> 
                         </a>
                      </div>
                      <div className="products__data">
                         <h2 className="products__price">{category.price}DH</h2>
                         <h3 className="products__name">{category.title}</h3>
                         <button className="button products__button">
                         <a href='https://wa.me/+212680833928'>
                         
                         <p className="what">By in Whatsapp</p>
                         <FaWhatsapp />
                         <FaShoppingCart />
                         </a>
                         </button>
                      </div>
                   </article>
                 </Fade>    
                    
                );
            })};

          </div>
        </div>
      </section>
);};
export default Product;