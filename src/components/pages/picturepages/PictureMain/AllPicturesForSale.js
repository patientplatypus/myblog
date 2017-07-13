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
`

const PictureContainer = styled.div`
  max-width: 200px;
  max-height: 400px;
  background-color: skyblue;
`

const styles = {
  images: {
    maxWidth: "90%",
    minWidth: "90%",
    paddingLeft: "40px",
    paddingRight: "40px",
    marginTop: "10px",
    marginBottom: "10px"
  }
}

class AllPicturesForSale extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentDidMount(){

  }

  sendtoModal(e){
    e.preventDefault();
    this.props.openModalAllPictures(this.props.picture.pictureurl, this.props.picture.currentprice, this.props.picture.pictureid, this.props.picture.userref);
  }


  render(){
    return(
      <PictureContainer>
        <AlignContainer>
          <img style={styles.images} src={this.props.picture.pictureurl}/>
          <p>This is the current price </p>
          <br/>
          {this.props.picture.currentprice}
          <br/>
          <button onClick={(e)=>this.sendtoModal(e)}>Buy Picture</button>
        </AlignContainer>
      </PictureContainer>
    )
  }
}



export default AllPicturesForSale
