// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component } from 'react'
import { Badge, IconButton, Heading, Paragraph, ParagraphHolder, PrimaryNavigation, SecondaryNavigation, TertiaryNavigation, Caption, Link, ParagraphSmall, AlignContainer, SubHeader} from 'components'
import renderIf from 'render-if'
import styled from 'styled-components'
import axios from 'axios'

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
  display: flex;
`


const styles = {
  images: {
    width: "200px",
    height: "auto",
    paddingLeft: "40px",
    paddingRight: "40px"
  }
}

class SellModal extends Component{
  constructor(props){
    super(props);
    this.state = {
      pictureurl: null,
      boughtfor: null,
      soldfor: null,
      currentprice: null,
      pictureid: null,
      userref: null
    }
  }

  componentWillMount(){
    console.log('value of sellpicturedata ', this.props.sellpicturedata);
    console.log('value of sellpicturedata ', this.props.sellpicturedata['pictureurl']);
    console.log('value of sellpicturedata ', this.props.sellpicturedata['boughtfor']);
    console.log('value of sellpicturedata ', this.props.sellpicturedata['soldfor']);
    console.log('value of sellpicturedata ', this.props.sellpicturedata['currentprice']);
    console.log('value of sellpicturedata ', this.props.sellpicturedata['pictureid']);
    console.log('value of sellpicturedata ', this.props.sellpicturedata['userref']);
    if (this.props.sellpicturedata['currentprice'] == -1){
      this.setState({
        pictureurl: this.props.sellpicturedata['pictureurl'],
        boughtfor: this.props.sellpicturedata['boughtfor'],
        soldfor: this.props.sellpicturedata['soldfor'],
        currentprice: 0,
        pictureid: this.props.sellpicturedata['pictureid'],
        userref: this.props.sellpicturedata['userref']
      })
    }
    if (this.props.sellpicturedata['currentprice'] != -1){
      this.setState({
        pictureurl: this.props.sellpicturedata['pictureurl'],
        boughtfor: this.props.sellpicturedata['boughtfor'],
        soldfor: this.props.sellpicturedata['soldfor'],
        currentprice: this.props.sellpicturedata['currentprice'],
        pictureid: this.props.sellpicturedata['pictureid'],
        userref: this.props.sellpicturedata['userref']
      })
    }
  }

  sendtoSellPicture(e){
    e.preventDefault();
    this.props.sellPicture(this.props.picture);
  }

  sendtoSellModalClose(e){
    e.preventDefault();
    axios.post('http://localhost:5000/changeprice', {
      pictureid: this.state.pictureid,
      name: this.state.username,
      userref: this.state.userref,
      pictureurl: this.state.pictureurl,
      currentprice: this.state.currentprice
    })
      .then((response)=>{
       console.log('response from the python call ', response.data);
       this.props.sellModalClose(this.props.username);
     })
     .catch((err)=>{
       console.log('python axios error');
       console.log('and the error is ', err);
     });

  }


  render(){
    return(
      <AlignContainer>
        <br/>
        <h3> How Much Would You like to Sell For?</h3>
        <br/>
        <img src={this.state.pictureurl}/>
        <FlexRow>
          <p>Enter a New Price to Sell At</p>
        </FlexRow>
        <input  value={this.state.currentprice} onChange={(e)=>{this.setState({currentprice: e.target.value})}} type="currentprice" name="currentprice" placeholder="currentprice"/><br/>
        <button onClick={(e)=>this.sendtoSellModalClose(e)}>Save</button>
        <br/>
      </AlignContainer>
    )
  }
}

export default SellModal
