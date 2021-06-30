import React from 'react'
import { Component } from 'react';
import { Form,Button } from 'react-bootstrap';

class BMR extends Component {
    constructor(props){
        super(props)
        this.state={
            height:null,
            weight:null,
            age:null
        }
    }
    handleform=(event)=>{
        event.preventDefault()
    }
    handleInputChange=(event)=>{
        event.preventDefault()
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    calculate=()=>{
        var res=document.getElementById("res");
        var {height}=this.state
        var {weight}=this.state
        var {age}=this.state
        console.log(height,weight,age)
        //mifflin-st jeor equation
        var manBMR=((10*weight)+(6.25*height)-(5*age)+5);
        var womenBMR=(10*weight)+(6.25*height)-(5*age)-161;

        res.innerHTML="<br><h6>MenBMR : "+manBMR+" womenBMR : "+womenBMR+"</h6>"
        console.log("mbmr:",manBMR,"wbmr:",womenBMR)
    }

    render(){
    return (
        <div className="container my-3">
        <p>Based on Mifflin-st jeor equation</p>
        <Form onSubmit={this.handleform}>
            <Form.Group>
                <Form.Label>Enter height in cm</Form.Label>
                <Form.Control name="height" type="number" placeholder="Enter height in cm" onChange={this.handleInputChange}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Enter weight in kg</Form.Label>
                <Form.Control name="weight" type="number" placeholder="Enter weight in kg" onChange={this.handleInputChange}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Enter age</Form.Label>
                <Form.Control name="age" type="number" placeholder="Enter age" onChange={this.handleInputChange}/>
            </Form.Group>
            <Form.Group>
              <Button onClick={this.calculate} className="btn-sucess">Calculate</Button>
            </Form.Group>
        </Form>

        <div id="res" className="text-center"></div>

    </div>
    )}
}
export default BMR