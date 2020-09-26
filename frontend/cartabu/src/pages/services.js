import React from 'react'
import {Button} from 'reactstrap'
import './service.css'
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';



class ServiceAvailable extends React.Component{ //second set of information taken from the user and updated in the DB as I could'nt get the username from the previous page I added a constant name here so the updation happens for the same name.. In backend you can add or manipulate easily using postman I'm kinda new to this front end sorry peace!
    constructor(props){
        super(props);
        this.state={
            generalservice:false,
            oilchange:false,
            waterwash:false,
            description:''
        }
    }
    //Handlers for the events
    handlegs=(event)=>{
        this.setState({generalservice:event.target.checked})
        console.log("clicked")
    }
    handleoilchange=(event)=>{
        this.setState({oilchange:event.target.checked})
    }
    handlewaterwash=(event)=>{
        this.setState({waterwash:event.target.checked})
    }
    handleothers=(event)=>{
        this.setState({description:event.target.value})
    }
    //this fetches info from my db and updates the service data 
    onSubmitted=(event)=>{
        const data={
            generalservice:this.state.generalservice,
            oilchange:this.state.oilchange,
            waterwash:this.state.waterwash
        }
        const resu=JSON.stringify(data)
        console.log(resu)
        const name="shiyaam"
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }
        fetch(`http://localhost:8080/service/addservice/${name}`,requestOptions)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    //rendering happends here

    render(){
        return(
            
            <div>
         <h3>Hello What kinda service do you expect</h3>       
            
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={this.state.generalservice} onChange={this.handlegs} name="gilad" />}
                label="General Service"
              /></FormGroup>
              <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={this.state.oilchange} onChange={this.handleoilchange} name="gilad" />}
                label="Oil Change"
              /></FormGroup>
              <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={this.state.waterwash} onChange={this.handlewaterwash} name="gilad" />}
                label="Water wash"
              /></FormGroup>
        <br></br>

      <TextField
          id="outlined-multiline-static"
          label="Description"
          value={this.state.description}
          onChange={this.handleothers}
          rows={4}
          defaultValue="Default Value"
          variant="outlined"
          /><br></br>
          <br></br>
          <br></br>


        <Link from="/service" to="/previousbooking"><Button type="submit" className="btn-dark btn-block " onClick={this.onSubmitted} >Submit</Button></Link>
          
        </div>
        
    )
}}
export default ServiceAvailable