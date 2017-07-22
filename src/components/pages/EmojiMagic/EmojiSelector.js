// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component } from 'react'
import { Badge, IconButton, Heading, Paragraph, ParagraphHolder, PrimaryNavigation, Blockquote } from 'components'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import renderIf from 'render-if'
import {Motion, spring} from 'react-motion';
// var VelocityComponent = require('./velocity-component');
// var VelocityTransitionGroup = require('./velocity-transition-group');
// var LoadingCrossfadeComponent = require('./loading-crossfade-component');


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
  justify-content: center;
`
const FlexColumn = styled.div`
  flex-direction: column;
  justify-content: center;
`

const Flex1 = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
`


const EmojiList = [
  ['grinning face with smiling eyes', '01F601', '&#128513;'],
  ['face with tears of joy', '01F602', '	&#128514;', '	&#128514;'],
  ['smiling face with open mouth', '01F603', '&#128515;'],
  ['smiling face with open mouth and smiling eyes', '01F604', '&#128516;'],
  ['smiling face with open mouth and cold sweat', '01F605', '	&#128517;'],
  ['smiling face with open mouth and tightly-closed eyes', '01F606', '	&#128518;'],
  ['winking face', '01F609', '&#128521;'],
  ['smiling face with smiling eyes', '01F60A', '&#128522;'],
  ['face savouring delicious food', '01F60B', '&#128523;'],
  ['relieved face', '01F60C', '&#128524;'],
  ['smiling face with heart-shaped eyes', '01F60D', '&#128525;'],
  ['smirking face', '01F60F', '&#128527;'],
  ['unamused face', '01F612', '&#128530;'],
  ['face with cold sweat', '01F613', '&#128531;'],
  ['pensive face', '01F614', '&#128532;'],
  ['confounded face','01F616', '&#128534;'],
  ['face throwing a kiss', '01F618', '&#128536;'],
  ['kissing face with closed eyes', '01F61A', '&#128538;'],
  ['face with stuck-out tongue and winking eye', '01F61C', 	'&#128540;'],
  ['face with stuck-out tongue and tightly-closed eyes', '01F61D', '&#128541;'],
  ['disappointed face', '01F61E', '&#128542;'],
  ['angry face', '01F620', '&#128544;'],
  ['pouting face', '01F621', 	'&#128545;'],
  ['crying face', '01F622', '&#128546;'],
  ['persevering face', '01F623', '&#128547;'],
  ['face with look of triumph', '01F624', '&#128548;'],
  ['disappointed but relieved face', '01F625', '&#128549;'],
  ['fearful face', '01F628', '&#128552;'],
  ['weary face', '01F629', '&#128553;'],
  ['sleepy face', '01F62A', '&#128554;'],
  ['tired face', '01F62B', '&#128555;'],
  ['loudly crying face', '01F62D', '&#128557;'],
  ['face with open mouth and cold sweat', '01F630', '&#128560;'],
  ['face screaming in fear', '01F631', '&#128561;'],
  ['astonished face', '01F632', '&#128562;'],
  ['flushed face', '01F633', '&#128563;'],
  ['dizzy face', '01F635', 	'&#128565;'],
  ['face with medical mask', '01F637',	'&#128567;'],
  ['cat face with wry smile', '01F63C', '&#128572;'],
  ['rocket', '01F680', '&#128640;'],
  ['recreational vehicle', '01F699', '&#128665;'],
  ['toilet', '01F6BD', '&#128701;'],
]

const styles = {
  dropdown: {
    backgroundColor: 'white',
    position: 'absolute',
    marginTop: '0',
    marginleft: '40%',
    left: '43vw',
    zIndex: '101',
    height: '200px',
    overflow: 'hidden',
    overflowY: 'auto',
  },
  floatspan: {
    float: 'left',
    display: 'inline-block',
  },
  emojiname: {
    fontSize: '23px',
    float: 'left',
    display: 'inline-block',
  },
  positionAbsolute: {
    position: "absolute",
    overflow: 'hidden',
    overflowY: 'auto',
    opacity: '1'
  },
  EmojiChooseStyle: {
    width: "30%",
    position: 'absolute'
  }
}

const DropDown = styled.div`
    backgroundColor: 'white',
    position: 'absolute',
    marginTop: '0',
    marginleft: '40%',
    left: '43vw',
    zIndex: '101',
    overflow: 'hidden',
    overflowY: 'auto',
  `



  // const AnimatedSelector = (props) => (
  //   <Motion defaultStyle={{ height: 0 }} style={{ opacity: spring(props.height) }}>
  //     { (style) => <DropDown style={style}>Can you see me?</DropDown> }
  //   </Motion>
  // )


const EmojiChoose = ({match, sendEmoji}) => {
  // console.log('inside EmojiChoose and match is ', match);
  const matchname = match[0];
  const matchemoji = `\\${match[1]}`;
  // console.log('value of matchemoji ',matchemoji);
  const EmojiBox = styled.div`
    padding-bottom: 5px;
    margin-left: 5px;
    &:after{
      content: "${matchemoji}";
      font-size: 20px;
    }`
  const EmojiItem = styled.div`
    padding-left: 5px;
    padding-top: 5px;
    clear: both;
    height: 35px;
    padding-right: 5px;
    &:hover{
      cursor: pointer;
      cursor: hand;
      background-color: #5DB7DE;
    }
    &:active{
      background-color: #340068;
      color: #FFFCF9;
    }`
  return(
    <EmojiItem onClick={()=>sendEmoji(match[0], match[2])}>
      <span style={styles.floatspan}>
        <div style={styles.emojiname}>
          {matchname}
        </div>
       <EmojiBox style={styles.floatspan}/>
      </span>
    </EmojiItem>
  )
}


class EmojiSelector extends Component{
  constructor(props){
    super(props)
    this.state = {
      matcharray: [],
      mouseIsDownOnSearch: true,
      mouseInsideSearch: true,
      visible: true,
      xClick: 0,
      yClick: 0,
      height: 0
    };
  }

  componentWillMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  handleClick = e => {
    if(!ReactDOM.findDOMNode(this).contains(e.target)) {
      this.setState({
        visible: false
      })
      // this.props.clearSearchBox()
    }
  }

  sendEmoji(emojiname, emojinumber){
    // e.preventDefault();
    console.log('inside sendEmoji and emojiname is ', emojiname, ' emojinumber is ', emojinumber);
    // this.setState({
    //   visible: false
    // })
    this.props.setEmoji(emojinumber);
    this.props.setSelectBox(emojiname);
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      visible: nextProps.searchVisible
    })
    var matcharray = [];
    var listitemmatches = false;
    EmojiList.forEach(listitem=>{
      let listitemarray = listitem[0].split(" ");
      listitemmatches = false;
      listitemarray.forEach(wordinlist=>{
        var wordsmatch = true;
        for(var x=0; x<nextProps.searchEmoji.length; x++){
          if(nextProps.searchEmoji[x]!=wordinlist[x]){
            wordsmatch = false;
          }
          if(x===nextProps.searchEmoji.length-1){
            if(wordsmatch===true){
              listitemmatches = true;
            }
          }
        }
      });
      if (listitemmatches === true){
        matcharray.push(listitem);
      }
    });
    // console.log('here are the matching words: ', matcharray);
    var height = matcharray.length*40;
    if (height>180){
      height = 180;
    }
    this.setState({
      matcharray: matcharray,
      visible: true,
      height: height
    })
  }

 //  </div>
 //  {renderIf(this.state.matcharray.length!=0 && this.state.visible === true)(
 //    <FlexRow>
 //     <Flex1 style={styles.dropdown}>
 //      {emojiChoice}
 //     </Flex1>
 //    </FlexRow>
 //  )}
 // </div>



render(){

     let emojiChoice;
       if(this.state.matcharray.length!=0){
             emojiChoice = this.state.matcharray.map((match,i) => {
               return (
                  <EmojiChoose style={styles.EmojiChooseStyle} key={i} match={match} sendEmoji={this.sendEmoji.bind(this)} />
               );
             });
       }

    return (
        <Motion style={{x: spring((this.state.visible===true && this.state.matcharray.length!=0) ? this.state.height : 0)}}>
          {({x}) =>
            // children is a callback which should accept the current value of
            // `style`
              <div style={{
                height: `${x}px`,
                backgroundColor: 'white',
                overflow: 'hidden',
                overflowY: 'auto',
                zIndex: '999',
                postion: 'absolute',
                display: 'inline-block',
              }}>
               {emojiChoice}
              </div>
          }
        </Motion>
    );
 }



}




export default EmojiSelector
