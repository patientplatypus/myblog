// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component } from 'react'
import { Badge, IconButton, Heading, Paragraph, AlignContainer, ParagraphHolder, PrimaryNavigation, Blockquote } from 'components'
import styled from 'styled-components'
import CanvasContainer from './CanvasContainer';
import renderIf from 'render-if'
import EmojiSelector from './EmojiSelector';
import glamorous from "glamorous";
import {Motion, spring} from 'react-motion';

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

const Flex1 = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
`

const FlexRow2 = styled.div`
  flex-direction: row;
  justify-content: left;
`
const FlexColumn = styled.div`
  flex-direction: column;
  justify-content: center;
`

const Hello = styled.div`
  color: tomato;
  max-width: 80px;
  background-color: blue;
`

// const ClickEmoji = glamorous.div(
//   {
//     '&::after': {
//       content: `\\01F601`,
//     }
//   },
//   ({size})=>({
//     fontSize: size
//   }),
// );

const EmojiGlamor = glamorous.div(
  {
    fontSize: '100px',
    backgroundColor: 'red',
    borderRadius: "20px"
  },
  ({size})=>({
    width: size,
    height: size*1.2,
    fontSize: size
  })
);

const styles = {
  SelectorMargin: {
    margin: '0 auto'
  },
  inputstyle: {
    width: "300px"
  },
  relativeStyle: {
    position: "relative"
  },
  tornadostyling: {
    fontSize: '100px'
  }
}

class EmojiMagic extends Component{
  constructor(props){
    super(props)
    this.state = {
      searchEmoji: '',
      emojinumber: null,
      searchVisible: true,
      savedEmoji: null,
      tornadobuttonvisible: true,
      sendTornado: false
    }
  }

  setEmoji(emoji){
    console.log("***************");
    console.log('value of the emoji in setEmoji in index ', emoji);
    this.setState({
      emojinumber:emoji
    }, ()=>{
      console.log('after setstate of emoji in index and value is ', this.state.emojinumber);
    })
  }

  setSelectBox(emojiname){
    this.setState({
      searchEmoji: emojiname,
      savedEmoji: emojiname,
      searchVisible: false
    })
  }

  tornadoclicked(e){
    e.preventDefault();
    this.setState({
      tornadobuttonvisible: false
    })
    this.setState({
      sendTornado: true
    })
  }

  tornadoDone(){
    console.log('inside tornadoDone');
    this.setState({
      sendTornado: false,
      tornadobuttonvisible: true
    }, ()=>{
      console.log('after sendTornado change state and its value is ', this.state.sendTornado)
    })
  }

  clearSearchBox(searchEmoji){
    var self = this;
    setTimeout(()=>{
      if (searchEmoji!=self.state.savedEmoji){
        self.setState({
          searchEmoji: ''
        })
      }
    },10000);
  }

  render(){
    return (
      <FlexContainer style={styles.relativeStyle}>
        <FlexRow>
          <Heading>Why Everything You Think Is Wrong and the World Is Bullshit</Heading>
        </FlexRow>
        <FlexRow>
          <PrimaryNavigation/>
        </FlexRow>
        <br/>
        <FlexRow>
          <input style={styles.inputstyle}  value={this.state.searchEmoji} onClick={(e)=>{this.setState({searchEmoji:""})}} onChange={(e)=>{this.setState({searchEmoji: e.target.value, searchVisible:true})}} type="searchEmoji" name="searchEmoji" placeholder="Search Emoji"/>
        </FlexRow>
        <FlexRow style={styles.relativeStyle}>
          <EmojiSelector styles={styles.SelectorMargin} searchEmoji={this.state.searchEmoji} clearSearchBox={this.clearSearchBox.bind(this)} setEmoji={this.setEmoji.bind(this)}  searchVisible={this.state.searchVisible} setSelectBox={this.setSelectBox.bind(this)}/>
        </FlexRow>
        <br/>
        <FlexRow>
          <CanvasContainer emojinumber={this.state.emojinumber} searchEmoji={this.state.searchEmoji}
          tornadoDone={this.tornadoDone.bind(this)}
           savedEmoji={this.state.savedEmoji} sendTornado={this.state.sendTornado}/>
        </FlexRow>
        <br/>
        <FlexRow>
          <Motion style={{fontspring: spring(this.state.tornadobuttonvisible ? 100 : 0)}}>
             {style =>
               (
                 <EmojiGlamor
                  size={`${style.fontspring}px`}
                  onClick={(e)=>{this.tornadoclicked(e)}}
                 >&#127786;</EmojiGlamor>
               )
             }
           </Motion>
        </FlexRow>
        <br/>
      </FlexContainer>
    )
  }
}

export default EmojiMagic
