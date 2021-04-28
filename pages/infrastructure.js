import fetch from 'isomorphic-unfetch'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';




function Home(props)
{
            return <>
            <Header />
            <section className="container">        
           
              {
                props.data.map(data=>{if(data.key=="INFRASTRUCTURE"){
                  return( 
                    <>
                    <h1 id={data.id}>{data.title}</h1>
                    <br />
                   <p>{data.p1}</p>
                   <p>{data.p2}</p>
                   <p>{data.p3}</p>
                  </>    
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
