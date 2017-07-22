// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component } from 'react'
import { Badge, IconButton, Heading, Paragraph, ParagraphHolder, PrimaryNavigation, Blockquote } from 'components'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import EmojiAdder from './EmojiAdder';

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

const CanvasRelative = styled.div`
  position: relative;
  z-index: 1;
`

const styles = {
  canvasStyle: {
    postion: 'absolute',
    height: '800px',
    width: '1000px'
  },
  clickthrough: {
    pointerEvents: 'none'
  }
}

class CanvasContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      xClick: 0,
      yClick: 0,
      tempArray: [],
      emojisXY: [],
      emojinumber: "\\01F61C"
    };
  }

  componentDidMount() {
      // console.log('inside componentdidmount of CanvasContainer');
       this.updateCanvas();
   }

  // componentWillReceiveProps(nextProps){
  //   console.log('in CanvasContainer componentWillReceiveProps and value of emojinumber is ', nextProps.emojinumber);
  //   if (nextProps.emojinumber!=undefined){
  //     this.setState({
  //       emojinumber: nextProps.emojinumber
  //     })
  //   }
  // }

   updateCanvas() {
      let canvas = ReactDOM.findDOMNode(this.refs.myCanvas);
      let ctx = canvas.getContext('2d');
      for (var x = 0; x <= 1000; x += 20) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 800);
      }
      ctx.strokeStyle = "rgba(235,235,211,0.3)";
      ctx.stroke();
      for (var y = 0; y <= 800; y += 20) {
       ctx.moveTo(0, y);
       ctx.lineTo(1000, y);
     }
     ctx.strokeStyle = "rgba(235,235,211,0.3)";
     ctx.stroke();
     this.setState({
       tempArray: []
     })
   }

  canvasClick(e) {
    if (this.props.searchEmoji===this.props.savedEmoji){
      var tempArray = this.state.tempArray;
      this.setState({
        xClick: e.clientX,
        yClick: e.clientY
      },()=>{
        // console.log('you clicked the canvas');
        let canvas = ReactDOM.findDOMNode(this.refs.myCanvas);
        var rect = canvas.getBoundingClientRect();
        var xCoordinate =  rect.left;
        var yCoordinate =  rect.top;
        let yCanvasClick = this.state.yClick - rect.top;
        let xCanvasClick = this.state.xClick - rect.left;
        // console.log('xCoordinate ', xCoordinate, ' yCoordinate ', yCoordinate);
        // console.log('yClick ', this.state.yClick, ' xClick ', this.state.xClick);
        // console.log('click coordinate canvas x:', xCanvasClick, ' y: ', yCanvasClick);
        // var c=document.getElementById("myCanvas");
        var ctx=canvas.getContext("2d");

        if (xCanvasClick%20===0){
          var ceilX = xCanvasClick+20;
          var floorX = xCanvasClick;
        }else{
          var ceilX = Math.ceil(xCanvasClick/20)*20;
          var floorX = Math.floor(xCanvasClick/20)*20;
        }

        if (yCanvasClick%20===0){
          var ceilY = yCanvasClick+20;
          var floorY = yCanvasClick;
        }else{
          var ceilY = Math.ceil(yCanvasClick/20)*20;
          var floorY = Math.floor(yCanvasClick/20)*20;
        }

        // console.log('floorX: ', floorX, ' floorY: ', floorY, ' ceilX: ', ceilX, ' ceilY: ', ceilY);
        // ctx.fillRect(floorX,floorY,10, 10);
        var tempObj = {};
        var top = floorY;
        var left = floorX;
        var emojinumber = this.props.emojinumber;
        var tempObj = {top, left, emojinumber};

        var spliceindex = -1;

        tempArray.forEach((item,i) => {
          if (item.top === tempObj.top && item.left===tempObj.left){
            spliceindex = i;
          }
        })

        if(spliceindex>-1){
          // setTimeout(()=>{
            tempArray.splice(spliceindex, 1);
          // },500)
        }

        tempArray.push(tempObj);
        this.setState({
          emojisXY: tempArray,
          tempArray: tempArray,
        }, ()=>{
          console.log('value of emojisXY is ', this.state.emojisXY);
        });
      });
    }
  }

  // let addEmojis;
    // var self = this;


    AddEmojis(){
      var self = this;
      var counter = 0;
      let emojiReturn;
      if(self.state.emojisXY.length!=0){
        emojiReturn = self.state.emojisXY.map((emojiXY,i) => {
         return (
           <EmojiAdder style={styles.clickthrough} key={i} emojiXY={emojiXY} highestIndex={this.state.emojisXY.length-1} indexValue={i}
           counterValue={counter}/>
         );
         counter = counter+1;
       });
     }
     return(emojiReturn);
    }


  render(){
     return (
       <div>
         <FlexRow>
           <CanvasRelative>
            <canvas style={styles.canvasStyle} onClick={(e)=>this.canvasClick(e)} ref="myCanvas" width={1000} height={800}/>
            {this.AddEmojis()}
           </CanvasRelative>
         </FlexRow>
         <FlexRow>

         </FlexRow>
       </div>
     );
  }
}

export default CanvasContainer
