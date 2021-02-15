import React from "react";
import { withAsyncAction } from "../../redux/HOCs";

class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      message: '',
      count: 0,
      image: ''
    }
  }

  componentDidMount() {
    this.fetchMessages();
  }

  fetchMessages = () => {
    this.props.getMessage(this.props.username).then((res) => {
      console.log(res.payload)
      this.setState({
        messages: res.payload.messages,
        count: res.payload.count
      })
    })
  }
  deleteMessageHandler=(messageId)=>{
    this.props.deleteMessage(messageId).then(() =>{
      this.fetchMessages();
    })
  }


  newMessageHandler = () => {
    let text = this.state.message;
    this.props.createMessage(text).then(() => {
      this.fetchMessages();
      this.setState({
        message: ''
      })
    })
  }
  likeMessageHandler =(messageId) =>{
    this.props.addLike(messageId).then(() =>{
      this.fetchMessages();
    })
  }
   

  handleChange = (event) => {
    let data = {...this.state};
   
    data[event.target.name] = event.target.value;   

    this.setState(data);

  }
  reset =() =>{
    this.setState({messages:[]})
  }

  render() {
    let display = (<div>No Messages Found</div>)
    if (this.state.messages) {
      display = this.state.messages.map((value) => {
        console.log(value);
        return (
          <li key={value.id}>{value.text}
          <button onClick={() =>this.likeMessageHandler(value.id)}>
            
          </button>
          </li>
        )
      })
    }
   
  
    return (
   <div className="Messages">
     <div className="Reset"></div>
     <div className="ListMessage">
          {display}
        </div>
        <div className="NewMessage">
          <input name="message" onChange={this.handleChange} value={this.state.message}/>
          
          <button onClick={this.newMessageHandler}> Send Message </button>
          <button onClick={this.reset}>Reset</button>
        
        </div>
      </div>
    );
  }
}

export default withAsyncAction("profile", "all")(Messages);
