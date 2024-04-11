import React from 'react';
import Button from 'react-bootstrap/Button';
function Display({ email, password, setEmail, setPassword }) {
  return <>
    <h2>Form input value is </h2>
    <h4>Email: {email}</h4>
    <h4>Password: {password}</h4>
    <Button variant="primary" onClick={() => {
      setEmail("")
      setPassword("")
    }}>
      Clear
    </Button>
  </>
}

export default Display
