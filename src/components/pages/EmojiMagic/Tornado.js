// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component } from 'react'
import { Badge, IconButton, Heading, Paragraph, ParagraphHolder, PrimaryNavigation, Blockquote } from 'components'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import renderIf from 'render-if'
import {Motion, spring} from 'react-motion';
import glamorous from "glamorous";
var SimplexNoise = require('simplex-noise');



const EmojiGlamor = glamorous.div(
  {
    position: 'absolute',
    pointerEvents: 'none',
  },
  ({top})=>({
    top: top
  }),
  ({left})=>({
    left: left
  }),
  ({font})=>({
    fontSize: font,
    width: font,
    height: font
  })
);

const styles = {
  clickthrough:{
    pointerEvents: 'none'
  }
}


class Tornado extends Component{
  constructor(props){
    super(props);
    var minX = Math.ceil(120);
    var maxX = Math.floor(200);
    var minY = Math.ceil(120);
    var maxY = Math.floor(200);
    if (Math.random()<=0.5){
      var xSpring = -1*(Math.floor(Math.random() * (maxX - minX)) + minX);
    }else{
      var xSpring = (Math.floor(Math.random() * (maxX - minX)) + minX);
    }
    if (Math.random()<=0.5){
      var ySpring = -1*(Math.floor(Math.random() * (maxY - minY)) + minY);
    }else{
      var ySpring = (Math.floor(Math.random() * (maxY - minY)) + minY);
    }
    this.state = {
      previousX: this.props.randomX,
      previousY: this.props.randomY,
      perlinX: this.props.randomX,
      perlinY: this.props.randomY,
      xSpring: xSpring,
      ySpring: ySpring,
      counter: 0,
      tornadoTime: 0,
      shrinkTornado: false,
      tornadoFont: 50
    };
    this.jitter = this.jitter.bind(this);
    // this.stopTornado = this.stopTornado.bind(this);
  }


  jitter() {
    do{
      var minX = Math.ceil(20);
      var maxX = Math.floor(30);
      var minY = Math.ceil(20);
      var maxY = Math.floor(30);
      if (Math.random()<=0.5){
        var xSpring = -1*(Math.floor(Math.random() * (maxX - minX)) + minX);
      }else{
        var xSpring = (Math.floor(Math.random() * (maxX - minX)) + minX);
      }
      if (Math.random()<=0.5){
        var ySpring = -1*(Math.floor(Math.random() * (maxY - minY)) + minY);
      }else{
        var ySpring = (Math.floor(Math.random() * (maxY - minY)) + minY);
      }
    }
    while(xSpring+this.state.perlinX>900||xSpring+this.state.perlinX<100||ySpring+this.state.perlinY>700||ySpring+this.state.perlinY<100);

    if(xSpring+this.state.perlinX>900||xSpring+this.state.perlinX<100||ySpring+this.state.perlinY>700||ySpring+this.state.perlinY<100){}else{
      this.setState({
        perlinX: xSpring+this.state.perlinX,
        perlinY: ySpring+this.state.perlinY,
        tornadoTime: this.state.tornadoTime+500
      }, () => {
        if(this.state.tornadoTime<15000){
          setTimeout(this.jitter, 500);
        }else{
          this.stopTornado();
        }
      });
    }
  }

  stopTornado(){
    var self = this;
    console.log('inside stopTornado');
    this.setState({
      tornadoFont: 20
    },()=>{
      setTimeout(()=>{
        this.props.tornadoDone()
      },1000)
    })
  }

  componentDidMount(){
    localStorage.setItem('tornadoX', this.props.randomX);
    localStorage.setItem('tornadoY', this.props.randomY);
    this.jitter();
  }

  testfunc(xvalue, yvalue){
    if(Math.abs(xvalue-localStorage.getItem('tornadoX'))>20||Math.abs(yvalue-localStorage.getItem('tornadoY')>20)){
      localStorage.setItem('tornadoX', xvalue);
      localStorage.setItem('tornadoY', yvalue);
    }
  }


  render(){
     return (
       <div>
         <Motion
            defaultStyle={{ xValue: this.state.previousX, yValue: this.state.previousY, font: 50 }}
            style={{ xValue: spring(this.state.perlinX, {stiffness: 1, damping: 1}), yValue: spring(this.state.perlinY,{stiffness: 1, damping: 1}), font: spring(this.state.tornadoFont)}}
          >
            {style =>
              (
                <div>
                  <EmojiGlamor
                    top={`${style.xValue}px`}
                    left={`${style.yValue}px`}
                    font={`${style.font}px`}
                  >
                    &#127786;
                  </EmojiGlamor>
                  {this.testfunc(style.xValue,style.yValue)}
                </div>
              )
            }
          </Motion>
       </div>
     );
  }
}

export default Tornado
