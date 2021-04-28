import fetch from 'isomorphic-unfetch'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faFacebook,faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Home.module.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';


function Home(props)
{
            return <>
            <Header />
            <section className="container">
            
           
              {
                props.data.map(data=>{
                  return(
                    <section className={styles.cards}>
                    <a  className={styles.card}>
                        <div className={styles.card__image}  > <img  src={data.imgsrc} alt={data.srcname} /></div>
                        <div className={styles.card__content}>
                            <div className={styles.card__title}><h4>{data.title}</h4></div>
                            <div className={styles.card__snippet}>{data.description}</div>                               
                        <div className={styles.card__sociallinks}> 
                                <ul className={styles.card__socialicons}>
                                        </ul>					
                            <span className={styles.card__Button}>{data.button}</span>
                        </div>
                        </div>
                    </a>                
          </section> 
                  )
                }
                                          
                        
                )                
              }
             
              </section>
              <Footer />
            </>   
}


Home.getInitialProps=async function () 
{
  const res = await fetch(`http://apilink`)// API Link
  const data = await res.json()
  return {
    data
  }
}
export default Home;
