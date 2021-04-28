import fetch from 'isomorphic-unfetch'
import React from 'react';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import styles from '../styles/Home.module.css';

function Home(props)
{
   return <>
            <Header />
            <div className={styles.HeroSection}> 
            <section className="container">
            <section className="testimonials">
                <div className="fixed-bnr">
                        <Carousel className="container" >
                          <Carousel.Item interval={1000}>
                            <img
                              className="d-block w-100"
                              src="/assets/Banner-1.jpg"
                              alt="First slide"
                            />

                          </Carousel.Item>
                          <Carousel.Item interval={1000}>
                            <img
                              className="d-block w-100"
                              src="/assets/Banner-2.jpg"
                              alt="Second slide"
                            />

                          </Carousel.Item>
                          <Carousel.Item interval={1000}>
                            <img
                              className="d-block w-100"
                              src="/assets/Banner-3.jpg"
                              alt="Third slide"
                            />

                          </Carousel.Item>
                          <Carousel.Item>
                             <img
                                    className="d-block w-100"
                                    src="/assets/Banner-4.jpg"
                                    alt="Fourth slide"
                             />
                           </Carousel.Item>
                           <Carousel.Item>
                                      <img
                                        className="d-block w-100"
                                        src="/assets/Banner-5.jpg"
                                        alt="Fifth slide"
                                      />

                                    </Carousel.Item>

                        </Carousel>
                        </div>
                 </section>
                 </section>
            </div>
                 <section className="container">
           
              {
                props.data.map(data=>{if(data.key=="HOME"){
                  return(                    
                    <section className="container" >
                    <h3 className="text-center m-4">{data.title}</h3>
                   <div className="row">
                        <section className="col-lg-8 p-4">
                            <p className="text-justify">
                           {data.p}
                            </p>
                            <a href="#" class="btn btn-danger">{data.button}</a>
                            </section>
                            <section  className="images col-lg-4 p-4">
                                <img className="img-thumbnail float-left" src={data.img}/>

                        </section>
                     </div>
            </section>     
                  )
                }                                             
                })                
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
