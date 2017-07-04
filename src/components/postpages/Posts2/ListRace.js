
// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component } from 'react'
import { Badge, IconButton, Heading, Paragraph, ParagraphHolder, PrimaryNavigation, SecondaryNavigation, TertiaryNavigation, Caption, Link, ParagraphSmall, AlignContainer, SubHeader} from 'components'
import styled from 'styled-components'
import axios from 'axios'
import renderIf from 'render-if'

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
  display: flex;
  flex-direction: row;
`

const SelectorBox = styled.div`
    display: flex;
    box-sizing: border-box;
    margin: 0 auto;
    height: 400px;
    width: 300px;
    background-color: RGB(140, 133, 110);
    position: relative;
`

const SelectorButton = styled.div`
    position: absolute;
    bottom: 0;
    width: 100px;
    height: 50px;
    float: left;
    margin: 10px;
    border-radius: 10px;
    background-color: blue;
    color: white;
    padding-top: 30px;
    text-align: center;
`

const Hello = styled.div`
  color: tomato;
  max-width: 80px;
  background-color: blue;
`

const DnDWrap = styled.div`
  display: flex;
  box-sizing: border-box;
  margin: 0 auto;
  width: 400px;
  height: auto;
  flex-wrap: wrap;
`

const EquipmentWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 20%;
`

const DnDContainer = styled.div`
  background-color: RGB(140, 133, 110);
  color: yellow;
  margin: 10px;
  text-align: center;
  vertical-align: middle;
`

const styles = {
  equipment: {
    width: "100px",
    height: "100px"
  },
  character: {
    width: "200px",
    height: "340px",
  },
  equipmentClearLeft: {
    width: "100px",
    height: "100px",
  }
}






export class ListRace extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
    render(){
      return(
        <div></div>
      )
    }
}

export default ListRace
