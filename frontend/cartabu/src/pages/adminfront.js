import React from 'react';
import axois from 'axios'
class AdminFront extends React.Component{//arr of output will be recevied so I initialised with arr:[]
    constructor(props){
        super(props)
        this.state={
            arr:[]
        }
    }
    //happens when the components mount as the funtion says
    componentDidMount=()=>{
        this.listhandler()
        
    }
    
    //I managed to receive the data and console it but I could'nt display the details 
    listhandler=()=>{
        axois.get("/user/allusers")
       .then((res)=>{
           const data=res.data
           console.log(data)
           this.setState({arr:data})
       })
        .catch(err=>{
            console.log(err)
        })

        
         
    }

    renderusers=()=>{
        var newer=JSON.parse(this.state.arr)
        console.log(newer)
    }
    
    render(){
        return(
            <div>
                <h2>The list of users</h2>
                

            </div>
            
            
        )
    }
}

export default AdminFront