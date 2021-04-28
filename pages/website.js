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
                    <h3 id={data.id}>{data.header}</h3>
                    <h4 >{data.title}</h4>
                   
                    <p>{data.p}</p>
                    <p>{data.p2}</p>
                    <p>{data.p3}</p>
                    </>  )
                
                                          
                        
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
