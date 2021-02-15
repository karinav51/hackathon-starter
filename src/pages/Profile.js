import React from "react";
import Menu from "../components/menu/Menu";
import Messages from "../components/messages/Messages"
import { userIsAuthenticated } from "../redux/HOCs";
import images from "../assets/images/cdc-vaccine-cov19.jpg";

class Profile extends React.Component {
  
  render() {
    console.log(this.props.Messages)
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} 
        username={this.props.match.params.username}
        />
        {/* <img className="fact-cov" src ={images}/> */}
        <Messages username={this.props.match.params.username} />
        
        <img className="cdc-vaccine" src ={images}/>
  
        
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
