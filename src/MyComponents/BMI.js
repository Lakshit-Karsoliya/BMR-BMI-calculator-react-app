import React from 'react';
import { Component } from 'react';
import { Form,Button } from 'react-bootstrap';

class BMI extends Component {
    constructor(props){
        super(props);
        this.state={
            height:null,
            weight:null
        }
    }
    handlesubmit=(event)=>{
        event.preventDefault()

    }
    handleInputChange=(event)=>{
        event.preventDefault()
        console.log(event)
        console.log(event.target.height)
        console.log(event.target.value)
        
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    
    calculate=()=>{
        var c=document.getElementById("resBMR")
        var {height}=this.state;
        var {weight}=this.state;
        console.log("h=",height,"w=",weight)
        var bmi=(weight/(height*height))*10000;
        
        if (bmi>25){
            c.innerHTML="<br><h6>BMI : "+bmi+"</h4><p>OverWeight</p>"
        }
        else if(bmi<15){
            c.innerHTML="<br><h6>BMI : "+bmi+"</h4><p>UnderWeight</p>"
        }
        else{
            c.innerHTML="<br><h6>BMI : "+bmi+"</h4><p>Normal</p>"
        }

        console.log('bmi:',bmi)
    }
  

    render(){
        //const {height}=this.state;
        //const {weight}=this.state;
        return(
            <div>
                <div className="container my-3">
                    <Form onSubmit={this.handlesubmit}>
                        <Form.Group>
                            <Form.Label>Enter height in cm</Form.Label>
                            <Form.Control type="number" name="height" placeholder="Enter height in cm" onChange={this.handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Enter weight in kg</Form.Label>
                            <Form.Control type="number" name="weight" placeholder="Enter weight in kg" onChange={this.handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                        <Button className="btn-sucess" onClick={this.calculate}>Calculate</Button>
                        </Form.Group>
                    </Form>

                    <div id="resBMR" className="text-center"></div>
                </div>
            </div>
        )
    }
}


export default BMI