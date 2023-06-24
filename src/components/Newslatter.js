import React, { useState,useEffect } from 'react'
import { Alert, Col,Row } from 'react-bootstrap'

export default function Newslatter({onValidated,status,message}) {
    const[email,setEamil]=useState('');
    useEffect(()=>{
        if(status==='success') clearFields();
    },[status])
    const handleSubmit=(e)=>{
        e.preventDefault();
        email.indexOf("@")>-1 &&
        onValidated({
            EMAIL:email
        })
    }
    const clearFields=()=>{
        setEamil("");
    }
  return (
    <Col lg ={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>

            <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
            {status==='Sending' && <Alert variant='danger'>Sending...</Alert>}
            {status==='error' && <Alert variant='danger'>{message}</Alert>}
            {status==='success' && <Alert variant='success'>{message}</Alert>}
            </Col>
            <Col md={6} xl={7}>
                <form onSubmit={handleSubmit}>
                    <div className="new-email-bx">
                        <input type="email" onChange={(e)=>setEamil(e.target.value)} value={email} placeholder='Email Address' />
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </Col>
        </Row>
      </div>
    </Col>
  )
}
