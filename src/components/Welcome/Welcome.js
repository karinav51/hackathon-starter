import React from "react";
import { withAsyncAction } from "../../redux/HOCs";
import Menu from "../menu/Menu";
import { Link } from "react-router-dom";


function Welcome(props) {
    console.log(props);
    let name = "";
    if (props.match) {
      name = props.match.params.name;
    } else {
      name = props.name;
    }
    return( <div className="Welcome"> 
             <Menu />
             {/* <button style={{padding: "20px", backgroundColor:"dodgerblue", color:"white"}}><Link to='/'>Log Out</Link> </button><br/> */}
             <button>Like</button>
              <button>Dislike</button><br/> 



              
             <h3 style={{color:"white"}}>Welcome{name}!</h3> 
              
            </div> )
  }
  

export default withAsyncAction("profile", "all" )(Welcome);

