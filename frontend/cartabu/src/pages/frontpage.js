import React, { Component } from 'react'
import {Button,Form,FormGroup,Label,Input} from 'reactstrap'
import '../App.css';
import {Link} from 'react-router-dom'
// import ServiceAvailable from './services'
import Cardmagic from './mainpagecard'


class Homie extends Component{ //the required user details for registeration. If the details were not given then empty string will be passed as data as my schema is sensitive I had to remove required 
    constructor(props){
        super(props)
        this.state={
            name:'',
            mobilenumber:'',
            email:'',
            date:'',
            address:''
        }
    }
    //handlers for the event change
    namehandleChange=event=>{
        this.setState({name:event.target.value})
    }
    mobilenumberhandleChange=event=>{
        this.setState({mobilenumber:event.target.value})
    }
    emailhandleChange=event=>{
        this.setState({email:event.target.value})
    }
    datehandleChange=event=>{
        this.setState({date:event.target.value})
       
    }
    addresschangeHandler=event=>{
        this.setState({address:event.target.value})
    }
    
    //this funtion calls the backend and post the info in DB
    onSubmitted=(event)=>{

        const data={
            name:this.state.name,
            mobilenumber:this.state.mobilenumber,
            email:this.state.email,
            date:this.state.date
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch("http://localhost:8080/user/adduser", requestOptions)
        .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }
    //here the rendering happens
    render(){
        return(
            <Form className="first-page container ">
        <center>
        <h1>Zhivan Bike Service</h1>
        <h2>Welcome</h2>
        </center>
        <FormGroup >
          <Label>Email</Label>
          <Input type='email' placeholder='example@gmail.com' onChange={this.emailhandleChange}/>
        </FormGroup>
        <FormGroup>
          <Label>Name</Label>
          <Input type='text' placeholder='Enter Your name here' onChange={this.namehandleChange}/>
        </FormGroup>
        <FormGroup>
          <Label>Address</Label>
          <Input type='text' placeholder='Enter your address here' onChange={this.addresschangeHandler}/>
        </FormGroup>
        <FormGroup>
          <Label>MobileNumber</Label>
          <Input type='number' placeholder='Enter Your Mobile Number here' onChange={this.mobilenumberhandleChange}/>
        </FormGroup>
        <FormGroup>
          <Label>Date of service</Label>
          <Input type='date' placeholder='Enter Your Mobile Number here' onChange={this.datehandleChange}/>
        </FormGroup>
        <Link from="/" to="/service"><Button type="submit" className="btn-dark btn-block " onClick={this.onSubmitted} >Submit</Button></Link>
        <br></br>
        {/* <Link from="/" to="/service"><Button type="submit" className="btn-dark btn-block " >ServicePage</Button></Link> */}

        <br></br>
        <Link to="/admin"><Button className="btn-lg btn-dark btn-block ">For ADMINS</Button></Link>
        <br></br>
        <br></br>
        <Cardmagic/>
    </Form >
    
        )
    }
   
    
}
export default Homie