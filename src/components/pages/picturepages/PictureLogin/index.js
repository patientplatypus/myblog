// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component, PropTypes } from 'react'
import { Badge, IconButton, Heading, Paragraph, ParagraphHolder, PrimaryNavigation, SecondaryNavigation, TertiaryNavigation, Caption, Link, ParagraphSmall, AlignContainer, SubHeader} from 'components'
import renderIf from 'render-if'
import styled from 'styled-components'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom';
import PictureMain from '../PictureMain'

// import {withRouter} from 'react-router-dom';

const FlexContainer = styled.div`
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
`
const FlexRow = styled.div`
  flex-direction: row;
`

const Hello = styled.div`
  color: tomato;
  max-width: 80px;
  background-color: blue;
`

const styles = {
  images: {
    maxWidth: "80%",
    marginBottom: "5px"
  },
  iframe: {
    border: "0",
    borderWidth: "0",
    width: "225",
    height: "200",
    borderRadius: "5px"
  },
  smoker:{
    maxHeight: "222px",
    marginRight: "10px",
    marginBottom: "5px"
  }
}

class PictureLogin extends Component{

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  constructor(props){
    super(props);
    this.state = {
      name: '',
      password: '',
      redirect: ''
    }
  }



  registerClick(e){
    //usersuccessfullyadded useralreadyexists
    e.preventDefault();
    var self = this;
    console.log('inside registerclick and name is: ', this.state.name, ' password is ', this.state.password);
    axios.post('http://localhost:5000/register', {
      name: this.state.name,
      password: this.state.password
    })
      .then((response)=>{
       console.log('response from the python call ', response.data);
       if(response.data === 'usersuccessfullyadded'){
        // self.props.history.push('/picturemain')
        // access with this.props.location.state
        self.props.history.push({
          pathname: '/picturemain',
          state: {
            name: this.state.name
          }
        })
       }
      })
     .catch(()=>{
       console.log('python axios error');
     });
  }

  loginClick(e){
    //passwordsmatch passwordsdontmatch usernamenotfound
    e.preventDefault();
    var self = this;
    console.log('inside loginclick and name is: ', this.state.name, ' password is ', this.state.password);
    axios.post('http://localhost:5000/login', {
      name: this.state.name,
      password: this.state.password
    })
      .then((response)=>{
       console.log('response from the python call ', response.data);
       if(response.data === 'passwordsmatch'){
        console.log(self.props)
        // self.props.history.push('/picturemain')
        self.props.history.push({
          pathname: '/picturemain',
          state: {
            name: this.state.name
          }
        })
       }
     })
     .catch((err)=>{
       console.log('python axios error');
       console.log('and the error is ', err);
     });
  }

  resetRedirect(){
    this.setState({
      redirect: ""
    })
  }

  render(){
    return(
        <FlexContainer>
          <FlexRow>
            <div>Login</div>
            <input  value={this.state.name} onChange={(e)=>{this.setState({name: e.target.value})}} type="username" name="username" placeholder="User Name"/><br/>
            <input  value={this.state.password} onChange={(e)=>{this.setState({password: e.target.value})}} type="password" name="password" placeholder="Password"/><br/>
            <button onClick={(e)=>this.registerClick(e)}>Register</button>
            <button onClick={(e)=>this.loginClick(e)}>Login</button>
          </FlexRow>
        </FlexContainer>
    )
  }
}

export default withRouter(PictureLogin);
