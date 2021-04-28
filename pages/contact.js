import fetch from 'isomorphic-unfetch'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';




function Contact(props)
{
            return <>
            <Header />
            <section className="container">        
           
              {
                props.data.map(data=>{
                  return( 
                    <>
                    <h1 id={data.id}>{data.Header}</h1>                   
                    <p>{data.p1}</p>
                   <p>{data.p2}</p>
                   <p>{data.p3}</p>
                   <p>{data.p4}</p>
                   <p>{data.p5}</p>
                   <p>{data.p6}</p>
                  </>    
                  )    
                })                
              }
             
              </section>
              <Footer />
            </>   
}


Contact.getInitialProps=async function () 
{
  const res = await fetch(`http://apilink`)// API Link
  const data = await res.json()
  return {
    data
  }
}
export default Contact;
