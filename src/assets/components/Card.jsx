import React from 'react'
import Name from './Name'
import Description from './Description'
import Price from './Price'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import myJSON from './Product';
import Path from './Path';


function BasicExample() {
  return (
    <Card style={{height: "500px"}}className='border bg-dark text-white'>
      <Card.Body>
        <Card.Title>
            <Path />
            <Name />
        </Card.Title>
        <Card.Text>
        <Description />
        <Price />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default BasicExample;