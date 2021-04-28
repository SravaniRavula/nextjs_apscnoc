import fetch from 'isomorphic-unfetch'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle,  Button } from 'reactstrap';
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
                    <section className="container">
                    <Card className=" m-3 " >
                                    <div className="row">
                                   <CardImg className="col-sm-4 m-3 " variant="top" src={data.img} />               
                                           <CardBody className="col-md-7 p-3">
                                             <CardTitle>{data.publish}</CardTitle>
                                              <cardTitle >{data.title}</cardTitle>
                                              <CardText>{data.text} </CardText>              
                                              <Button variant="primary">Go somewhere</Button>
                                            </CardBody>
                       </div>
                    </Card>
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
