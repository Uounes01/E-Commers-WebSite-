import {Fade} from 'react-reveal'


const   Hero= () => {

   const orderNow = () =>{
     window.scrollTo({
       top: 1150,
       behavior:'smooth'
     })
   }


    return(
        <section className="hero section" id="home" style={{backgroundImage:`url(./media/bg-hero.jpg)`}}  >
      
        <Fade top>
          <h1 className="hero__title">
          Start Your Day <br />
          Following Up On Natural Products <br />
          And Buying Them <br/>
          For Better Health.
          </h1>
          <button className="hero__button" onClick={orderNow}>Shop Now</button>
        </Fade>

      </section>
    );
};
export default Hero;