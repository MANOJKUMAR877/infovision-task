import React, { Component } from "react";
import { Card,Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
export default class PageNotFound extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '18rem' ,marginLeft:700,marginTop:350}}>
          <Card.Header>404</Card.Header>
          <Card.Body>
            <Card.Title>Page Not Found 404</Card.Title>
            <Link to="/">
            <Button variant="primary">Go To Home </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
