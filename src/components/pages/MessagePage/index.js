// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component } from 'react'
import { Badge, IconButton, Heading, Paragraph, PrimaryNavigation, Blockquote } from 'components'
import styled from 'styled-components'

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
const ParagraphHolder = styled.div`
  background-color: rgba(200,200,200,0.8);
  margin-left: 10px;
  margin-right: 10px;
`
class MessagePage extends Component{
  constructor(props){
    super(props)
    this.state={
      formName: '',
      formMessage: ''
    }
    var self = this;
  }

  nameChange(event) {
    this.setState({formName: event.target.value});
  }

  messageChange(event) {
    this.setState({formMessage: event.target.value});
  }

  handleSubmit(event) {
     alert('A name was submitted: ' + this.state.formName);
    event.preventDefault();
  }


  render(){
    return(
          <FlexContainer>
            <FlexRow>
              <Heading>Why Everything You Think Is Wrong and the World Is Bullshit</Heading>
            </FlexRow>
            <FlexRow>
              <PrimaryNavigation/>
            </FlexRow>
            <FlexRow>
               <ParagraphHolder><Paragraph> This is the place where you can send me a message. If it sucks I will not bother. If it does not suck, I may bother. Good luck, we are all counting on you. </Paragraph></ParagraphHolder><br/>
            </FlexRow>
            <FlexRow>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <label>
                Name:
                <input type="text" value={this.state.formName} onChange={this.nameChange.bind(this)} />
              </label><br/>
              <label>
                Message:
                 <textarea value={this.state.value} onChange={this.messageChange.bind(this)} />
              </label><br/>
              <input type="submit" value="Submit" />
            </form>
            </FlexRow>
          </FlexContainer>
    )
  }


}

export default MessagePage
