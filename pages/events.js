import fetch from 'isomorphic-unfetch'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Card, CardBody, CardTitle,CardSubtitle ,CardImg } from 'reactstrap';
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
                    <>
                  
                  <Row>
            
              <Col xs={4}  style={{ padding: 5 }}>
               
                  <Card className="my-2">
                    <CardImg
                      variant="top"
                      src={data.img}
                      style={{ maxHeight: 300 } }
                    />
                    <CardBody>
                      <CardTitle className="font-weight-bold" >{data.title}</CardTitle>
                      <Card className="p-2"><CardSubtitle>{data.publish}</CardSubtitle></Card>
                    </CardBody>
                  </Card>
                
              </Col>
           
          </Row>
                </>
                  )}                         
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
