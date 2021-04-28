import React from 'react'
import {gql, useQuery,  useMutation } from "@apollo/client"
import { Formik, Field, Form } from "formik";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client"



const CREATE_SESSION =gql `
  mutation createSession($session: SessionInput!) {
    createSession(session: $session) {
      firstName
      lastName
      email
      phoneNumber
      address
    }
  }
`




const Contact = () => {  
 
  const [ create, { called, error } ] = useMutation(CREATE_SESSION);

  if(called) return <p>Contact Details Submitted Successfully!</p>

  if(error) return <p>Failed to submit Contact Details</p>

  return (	
    <div	
      style={{	
        width: "100%",	
        display: "flex",	
        alignContent: "center",	
        justifyContent: "center",	
        padding: 10,	
      }}	
    >	
      <Formik	
        initialValues={{	
          firstName: "",	
          lastName: "",	
          email: "",	
          phoneNumber:"",
          address: "",	
        }}	
        onSubmit={ async (values) => {
          await create({ variables: {session: values }});
        }}		
      >	
        {() => (	
           
          <Form style={{ width: "100%", maxWidth: 500 }}>
             <section className="container">
            <h1 className="d-flex justify-content-center my-4 py-4">
                Contact US
            </h1>
            </section>
            <div className="mb-3" style={{ paddingBottom: 5 }}>	
              <label htmlFor="inputFirstName">First Name</label>	
              <Field	
                id="inputFirstName"	
                className="form-control"	
                required	
                autoFocus	
                name="firstName"	
              />	
            </div>	
            <div className="mb-3" style={{ paddingBottom: 5 }}>	
              <label htmlFor="inputLastName">Last Name</label>	
              <Field	
                id="inputLastName"	
                className="form-control"	
                required	
                autoFocus	
                name="lastName"	
              />	
            </div>	
            <div className="mb-3" style={{ paddingBottom: 5 }}>	
              <label htmlFor="inputEmail">Email</label>	
              <Field	
                type="textarea"	
                id="inputEmail"	
                className="form-control"	
                required	
                name="email"	
              />	
            </div>	
            <div className="mb-3" style={{ paddingBottom: 5 }}>	
              <label htmlFor="inputPhoneNumber">Phone Number</label>	
              <Field	
                name="phoneNumber"	
                id="inputPhoneNumber"	
                className="form-control"	
                required	
              />	
            </div>	
            <div className="mb-3" style={{ paddingBottom: 5 }}>	
              <label htmlFor="inputAddress">Address</label>	
              <Field	
                name="address"	
                id="inputAddress"	
                className="form-control"	
                required	
              />	
            </div>	
            <div style={{ justifyContent: "center", alignContent: "center" }}>
              <button className="btn btn-primary">Submit</button>	
            </div>
          </Form>	
        )}	
      </Formik>	
    </div>	
  );	
}





const ContactForm = () => {
    const client = new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
          uri: "http://apilink" // your graphql server link
        }),
        credentials: "same-origin",
      })
  
    return (
        <>
         <Header />
      <ApolloProvider client={client}>
        <div>          
          <Contact />
        </div>
      </ApolloProvider>
      <Footer />
      </>
    );
  };
  
  export default ContactForm;







