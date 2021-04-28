import fetch from 'isomorphic-unfetch'
import React from 'react';
import {Table} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
                    <div>
                    <section className="container">				 
           <h2 className="my-4"> {data.title}</h2>                                       
               <div className="col-xs-12">
               <div className=" p-2" style={{backgroundColor:"#005a87",color:"#fff"}}>
                     <p>{data.header}</p>
                     </div>
              <Table striped bordered hover>
                  <thead>
                      <tr style={{backgroundColor:"#f65a64",color:"#fff"}}>
                      <th>{data.headernamee}</th>
                      <th>{data.headerdesignation}</th>
                      <th>{data.headeremail}</th>
                      <th>{data.headerphone}</th>
                      
                      </tr>
                  </thead>           
                  <tbody>
                            <tr>
                              <td><span class="bt-content"><strong>{data.namee}</strong></span></td>
                              <td><span class="bt-content">{data.designation}</span></td>
                              <td><span class="bt-content">{data.email}</span></td>
                              <td><span class="bt-content">{data.phone}</span></td>
                              
                            </tr>  
                  </tbody>                  
                </Table>
           </div>	 
        </section> 
    
             
                  </div>    
                  )        
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
