// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component } from 'react'
import { Badge, IconButton, Heading, Paragraph, ParagraphHolder, PrimaryNavigation, Blockquote } from 'components'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import renderIf from 'render-if'
import {Motion, spring} from 'react-motion';
// import { StyleSheet, css } from 'aphrodite';
// import { css } from 'glamor'
import glamorous from "glamorous";






// const ClickEmoji2 = glamorous.div(
//   {
//     position: "absolute",
//     zIndex: "100",
//     height: '10px',
//     width: '10px',
//     '&::after': {
//       fontSize:"20px"
//     },
//     transformOrigin:'center center',
//     -msTransformOrigin:'center center', /* IE 9 */
//     -webkitTransformOrigin: 'center center', /* Safari and Chrome */
//     -mozTransformOrigin:'center center', /* Firefox */
//     -oTransformOrigin:'center center', /* Opera */
//   },
//   ({ top }) => ({
//     top: top
//   }),
//   ({ left }) => ({
//     left: left
//   }),
// );


const EmojiGlamor = glamorous.div(
  {
    position: 'absolute',
    fontSize: '20px',
    pointerEvents: 'none'
  },
  ({top})=>({
    top: top
  }),
  ({left})=>({
    left: left
  }),
  ({rotateval})=>({
    transform: rotateval
  }),
  ({font})=>({
    fontSize: font
  })
);

const ClickEmoji = ({emojinumber, emojitop, emojileft}) =>{
  const EmojiBox = styled.div`
    position: absolute;
    top: ${emojitop}px;
    left: ${emojileft}px;
    z-index: 100;
    &:after{
      content: "${emojinumber}";
      font-size: 20px;
    }`
    return(
      <EmojiBox/>
    );
}

const styles = {
  clickthrough:{
    pointerEvents: 'none'
  }
}


class EmojiAdder extends Component{
  constructor(props){
    super(props)
    this.state = {
      // animateX: null,
      // animateY: null
    };
  }

  componentDidMount(){
    // console.log('emoji adder mounted!');
  }

   componentWillReceiveProps(nextProps){
      console.log('inside EmojiAdder and nextProps.highestIndex is ', nextProps.highestIndex);
      console.log('inside EmojiAdder and nextProps.indexValue is ', nextProps.indexValue);
   }
  //   //  console.log('inside EmojiAdder and nextProps.emo is ', nextProps.emojiXY);
  //   //  console.log('value of key is ', nextProps.key)
  //   this.setState({
  //     emojinumber: nextProps.emojinumber
  //   },()=>{
  //     console.log('inside componentWillReceiveProps and value of emojinumber is ', this.state.emojinumber)
  //   });
  //  }
  // const ClickEmoji = styled.div`
  //     position: absolute;
  //     &:after{
  //       content: "${this.props.emojiXY.emojinumber}";
  //       font-size: 20px;
  // `

  // componentWillEnter(){
  //   this.state.twirl.forEach(onetwirl=>{
  //     if (onetwirl.top===this.props.emojiXY.top && onetwirl.left===this.props.emojiXY.left){
  //       //dont twirl
  //       this.setState({
  //         shouldtwirl:false
  //       })
  //     }
  //   })
  //   var tempObj = {};
  //   var tempArray = [];
  //   var top = this.props.emojiXY.top;
  //   var left = this.props.emojiXY.left;
  //   tempObj = {top, left};
  //   tempArray = this.state.twirl;
  //   tempArray.push(tempObj);
  //   this.setState({
  //     twirl: tempArray
  //   })
  // }

  componentWillReceiveProps(nextProps){
    console.log('value of emojinumber in componentWillReceiveProps in EmojiAdder ', nextProps.emojiXY.emojinumber);
    console.log('value of highestIndex in componentWillReceiveProps in EmojiAdder ', nextProps.highestIndex);
    console.log('value of indexValue in componentWillReceiveProps in EmojiAdder ', nextProps.indexValue);
    console.log('value of counterValue in componentWillReceiveProps in EmojiAdder ', nextProps.counterValue);
  }

  render(){

    let emojiStyle = {
      position: "absolute",
      top: this.props.emojiXY.top-3 + "px",
      left: this.props.emojiXY.left + "px",
      zIndex: '100',
      // after::content: this.props.emojiXY.emojinumber,
      // after::fontSize: '20px'
    }
      // <div style={emojiStyle} className="winkytongueface" />
      // <div>{this.props.emojisXY}</div

      // <div style={emojiStyle} className="winkytongueface" />
      // {renderIf(this.state.shouldtwirl===false)(
      //   <ClickEmoji emojinumber={this.props.emojiXY.emojinumber} emojitop={this.props.emojiXY.top-3} emojileft={this.props.emojiXY.left}/>
      // )}
      // <Motion style={{x: spring((this.props.emojiXY.top===this.state.animateY&&this.props.emojiXY.left===this.state.animateX) ? 360 : 0)}}>
      //   {({x}) =>
      //     // children is a callback which should accept the current value of
      //     // `style`
      //       <ClickEmoji emojinumber={this.props.emojiXY.emojinumber} emojitop={this.props.emojiXY.top-3} emojileft={this.props.emojiXY.left}
      //        style={{
      //         transform:`rotate(${x}deg)`,
      //        }}
      //       />
      //   }
      // </Motion>

      //
      // const ClickEmoji = ({emojinumber, emojitop, emojileft}) =>{
      //   const EmojiBox = styled.div`
      //     position: absolute;
      //     top: ${emojitop}px;
      //     left: ${emojileft}px;
      //     z-index: 100;
      //     &:after{
      //       content: "${emojinumber}";
      //       font-size: 20px;
      //     }`
      //     return(
      //       <EmojiBox/>
      //     );
      // }

      // {renderIf(this.props.emojiXY.highestIndex===this.props.emojiXY.indexValue)(
      //   <Motion
      //      defaultStyle={{ rotate: 0, height: 0 }}
      //      style={{ rotate: spring(180), height:1000 }}
      //    >
      //      {style =>
      //        (
      //           <div
      //           className={{
      //             transform: `rotate( ${style.rotate}deg )`,
      //             height: `${style.height}px`,
      //             position: `absolute`,
      //             top: `${this.props.emojiXY.top}px`,
      //             left: `${this.props.emojiXY.left}px`,
      //             zIndex: `100`,
      //             &:after{
      //               content: `${this.props.emojiXY.emojinumber}`,
      //               fontSize: '20px'
      //             }
      //           }}/>
      //        )
      //      }
      //    </Motion>
      //  )}
      //
      //   {renderIf(this.props.emojiXY.highestIndex!=this.props.emojiXY.indexValue)(
      //       <ClickEmoji emojinumber={this.props.emojiXY.emojinumber} emojitop={this.props.emojiXY.top-3} emojileft={this.props.emojiXY.left}/>
      //   )}
      // {renderIf(this.props.emojiXY.highestIndex===this.props.emojiXY.indexValue)(
      //   <Motion
      //      defaultStyle={{ rotate: 0, height: 0 }}
      //      style={{ rotate: spring(360), height:1000 }}
      //    >
      //      {style =>
      //        (
      //           <EmojiGlamor
      //            size="20px"
      //            top={`${this.props.emojiXY.top-3}px`}
      //            left={`${this.props.emojiXY.left}px`}
      //            rotateval={`rotate(${style.rotate}deg)`}
      //            emojinumber={`${this.props.emojiXY.emojinumber}`}
      //           />
      //        )
      //      }
      //    </Motion>
      //  )}
      // </div>

     return (
       <div style={styles.clickthrough}>
       {renderIf(this.props.indexValue===this.props.highestIndex)(
         <Motion
            defaultStyle={{ fontspring: 100, rotate: 0 }}
            style={{ fontspring: spring(20), rotate: spring(360)}}
          >
            {style =>
              (
                <EmojiGlamor
                 top={`${this.props.emojiXY.top-3}px`}
                 left={`${this.props.emojiXY.left}px`}
                 rotateval={`rotate(${style.rotate}deg)`}
                 font={`${style.fontspring}px`}
                 dangerouslySetInnerHTML={{__html: this.props.emojiXY.emojinumber}}
                />
              )
            }
          </Motion>
        )}
        {renderIf(this.props.indexValue!=this.props.highestIndex)(
           <EmojiGlamor
            top={`${this.props.emojiXY.top-3}px`}
            left={`${this.props.emojiXY.left}px`}
            rotateval={`rotate(0deg)`}
            dangerouslySetInnerHTML={{__html: this.props.emojiXY.emojinumber}}
           />
         )}
       </div>
     );
  }
}

export default EmojiAdder
