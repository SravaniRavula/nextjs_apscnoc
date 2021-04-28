import fetch from 'isomorphic-unfetch'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';




function Website(props)
{
            return <>
            <Header />
            <section className="container">        
           
            {
                props.data.map(data=>{
                  return( 
                    <>
                    <h1 id={data.id}>{data.Header}</h1>
                    <br />
                   <p>{data.Name}</p>
                   <p>{data.Designation}</p>
                   <p>{data.Department}</p>
                   <p>{data.Address}</p>
                   <p>{data.phone}</p>
                   <p>{data.Email}</p>
                  </>    
                  )
                
                                          
                        
                })                
              }
             
              </section>
              <Footer />
            </>   
}


Website.getInitialProps=async function () 
{
  const res = await fetch(`http://apilink`)// API Link
  const data = await res.json()
  return {
    data
  }
}
export default Website;
