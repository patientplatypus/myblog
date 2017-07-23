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
      circleX: null,
      circleXr: null,
      circleY: null,
      circleYr: null,
      circlestarted: false,
      cosValue: 0,
      sinValue: 0,
      numpicked: 0,
      takethisone: false,
      stopcircle: false
    };
    this.circlejitter=this.circlejitter.bind(this);
  }

  componentDidMount(){
    console.log('emoji adder mounted!');
    // if (this.state.numpicked<=3){
    //   if(Math.random()<.1){
    //     this.setState({
    //       takethisone:true,
    //       numpicked: this.state.numpicked+1
    //     })
    //   }else{
    //     this.setState({
    //       takethisone:false
    //     })
    //   }
    // }else{
    //   this.setState({
    //     takethisone: false
    //   })
    // }
    // this.circlejitter();
    if (this.props.indexValue<=3){
      this.setState({
        takethisone:true
      })
    }else{
      this.setState({
        takethisone:false
      })
    }
  }

  componentWillReceiveProps(nextProps, nextState) {
    // console.log('value of emojinumber in componentWillReceiveProps in EmojiAdder ', nextProps.emojiXY.emojinumber);
    // console.log('value of highestIndex in componentWillReceiveProps in EmojiAdder ', nextProps.highestIndex);
    // console.log('value of indexValue in componentWillReceiveProps in EmojiAdder ', nextProps.indexValue);
    // console.log('value of counterValue in componentWillReceiveProps in EmojiAdder ', nextProps.counterValue);

    // if (nextProps.sendTornado===true){
    //   console.log('inside EmojiAdder componentWillReceiveProps and sendTornado is true');
    // }
    // console.log('value of this.state.circlestarted is ', nextState.circlestarted);
    if (nextProps.sendTornado!=this.props.sendTornado){
      console.log('value of nextProps.sendTornado is ', nextProps.sendTornado);
      console.log('value of this.state.circlestarted is ', this.state.circlestarted);

      if (nextProps.sendTornado===true&&this.state.circlestarted===false){
      console.log('inside the first if statement');
        this.setState({
          circlestarted: true,
          stopcircle: false,
          numpicked: 0
        },()=>{
          this.circlejitter();
        })
      }
      if (nextProps.sendTornado===false){
        this.setState({
          stopcircle: true,
          circlestarted: false,
          numpicked: 0
        })
      }
    }

  }


  circlejitter(){
    console.log('inside circlejitter');
    // console.log('math cosine*10: ', Math.cos(this.state.cosValue*180/Math.PI)*200);
    // var circleX =  Math.cos(this.state.cosValue*180/Math.PI)*20+parseInt(localStorage.getItem('tornadoX'));
    // console.log('value of circleX: ', circleX);
    this.setState({
      circleX:Math.cos(this.state.cosValue*180/Math.PI)*100+parseInt(localStorage.getItem('tornadoX')),
      circleY: Math.cos(this.state.cosValue*180/Math.PI)*100+parseInt(localStorage.getItem('tornadoY')),
      cosValue: this.state.cosValue===360 ? 0: this.state.cosValue+1,
      sinValue: this.state.sinValue===360 ? 0: this.state.sinValue+1,
    }, ()=>{
      // console.log('value of circleX: ', this.state.circleX);
      // console.log('value of circleY: ', this.state.circleY);
      // console.log('value of cos ', (Math.cos(this.state.cosValue*180/Math.PI)*.5));
      if(this.state.stopcircle===false){
        setTimeout(this.circlejitter,200);
      }
    })
  }

  render(){

    let emojiStyle = {
      position: "absolute",
      top: this.props.emojiXY.top-3 + "px",
      left: this.props.emojiXY.left + "px",
      zIndex: '100',
    }


     return (
       <div style={styles.clickthrough}>
       {renderIf(this.props.sendTornado===false || this.state.takethisone === false)(
         <div>
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
         )}
        {renderIf(this.props.sendTornado===true && this.state.takethisone === true)(
          <div>
          <Motion
             defaultStyle={{ top: this.props.emojiXY.top-3, left: this.props.emojiXY.left }}
             style={{ top: spring(this.state.circleX,{stiffness: 30, damping: 5}), left: spring(this.state.circleY,{stiffness: 30, damping: 5})}}
           >
             {style =>
               (
                 <EmojiGlamor
                  top={`${style.top}px`}
                  left={`${style.left}px`}
                  rotateval={`rotate(0deg)`}
                  font={`20px`}
                  dangerouslySetInnerHTML={{__html: this.props.emojiXY.emojinumber}}
                 />
               )
             }
           </Motion>
           </div>
        )}
       </div>
     );
  }
}

export default EmojiAdder
