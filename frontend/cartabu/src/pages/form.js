import React, { Component } from 'react'
import {Button,Form,FormGroup,Label,Input} from 'reactstrap'
import '../App.css';
import {Link} from 'react-router-dom'

class Admin extends Component{ //admin form 
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            isValid:false
        }
    }
    //handlers for the occuring events
    usernamehandleChange=event=>{
        this.setState({username:event.target.value})
    }
    passwordhandleChange=event=>{
        this.setState({password:event.target.value})
    }
    handlevalidation=event=>{
        this.setState({isValid:true})
    }
    
    
    //Submits and checks the data with db if correct we will receive a confirmation in node server
    crazySubmit=async(event)=>{
        event.preventDefault()
        const data={
            username:this.state.username,
            password:this.state.password
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        await fetch("http://localhost:8080/user/adminuser", requestOptions)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }
    onClick(){
        console.log("tehuy")
    }
    //rendering happens here
    render(){
        return(
            <Form className="first-page ">
        <center>
        <h1>Zhivan Bike Service</h1>
        <h2>Admin Pannel</h2>
        </center>
        <FormGroup >
          <Label>Username</Label>
          <Input type='name' placeholder='Enter username' onChange={this.usernamehandleChange}/>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type='password' placeholder='Enter Password' onChange={this.passwordhandleChange}/>
        </FormGroup>
        <Link from="/admin" to="/adminlog"><Button type="submit" className="btn-dark btn-block " onClick={this.crazySubmit,this.handlevalidation} >Submit</Button></Link>
        <br></br>
        <br></br>
        <br></br>
    </Form >
    
        )
    }
   
    
}
export default Admin