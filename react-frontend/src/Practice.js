import { CircularProgress } from "@material-ui/core";
import React,{Component} from "react";

class  Practice extends Component{
    constructor(props){
        super(props);
        this.onChange=this.onChange.bind(this)
     this.state={
         title:'App'
     }
    }
    onChange(event){
        this.setState({
            title:'New app '
        })
    }
    render(){
       
        return(
            <div style={{'textAlign':'center'}}>
                <h1>{this.state.title}</h1>
                <p onClick={this.onChange}>Click here </p>
              
                </div>
             
        )
    }
}
export default Practice