// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component } from 'react'
import { Badge, IconButton, Heading, Paragraph, PrimaryNavigation, ParagraphHolder, Blockquote } from 'components'
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
  flex-grow: 3;
`

const Hello = styled.div`
  color: tomato;
  max-width: 80px;
  background-color: blue;
`

const styles = {
  button: {
    // marginTop: '6px',
    // marginRight: '10px',
    // marginBottom: '6px',
    width: '80vw',
    backgroundColor: '#70A37F',
    color: 'white',
    padding: '14px 20px',
    margin: '8px 0',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  form: {
    minWidth: '80vw',
    textAlign:  'center'
  },
  input: {
    minWidth: '80vw',
    padding: '12px 20px',
    margin: '8px 0',
    display: 'inline-block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box'
    // width: '1000px'
  },
  textarea:{
    minWidth: '80vw',
    minHeight: '20vh',
    padding: '12px 20px',
    margin: '8px 0',
    display: 'inline-block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    rows:'10',
    cols: '40'
  }
};




// const ParagraphHolder = styled.div`
//   background-color: rgba(200,200,200,0.8);
//   margin-left: 10px;
//   margin-right: 10px;
// `
class MessagePage extends Component{
  constructor(props){
    super(props)
    this.state={
      formName: '',
      formMessage: ''
    }
    var self = this;
  }

  // nameChange(event) {
  //   this.setState({formName: event.target.value});
  // }
  //
  // messageChange(event) {
  //   this.setState({formMessage: event.target.value});
  // }
  //
  // handleSubmit(event) {
  //    alert('A name was submitted: ' + this.state.formName);
  //   event.preventDefault();
  // }

  // <form onSubmit={this.handleSubmit.bind(this)}>
  //   <label>
  //     Name:
  //     <input type="text" value={this.state.formName} onChange={this.nameChange.bind(this)} />
  //   </label><br/>
  //   <label>
  //     Message:
  //      <textarea value={this.state.value} onChange={this.messageChange.bind(this)} />
  //   </label><br/>
  //   <input type="submit" value="Submit" />
  // </form>

  // <form method="POST" action="http://formspree.io/pweyand@gmail.com">
  //   <input type="email" name="email" placeholder="Your email">
  //   <textarea name="message" placeholder="Your message"></textarea>
  //   <button type="submit">Send</button>
  // </form>

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
              <form style={styles.form} method="POST" action="http://formspree.io/pweyand@gmail.com">
                <input style={styles.input} type="email" name="email" placeholder="Your email"/><br/>
                <textarea style={styles.textarea} name="message" placeholder="Your message"></textarea>
                <button style={styles.button} type="submit">Send</button>
              </form>
            </FlexRow>
            <FlexRow>
               <ParagraphHolder><Paragraph> If you&#39;re wondering how this works, I have no idea either. But it&#39;s a free online service that let&#39;s you redirect emails without having to spin up a backend. For this blog I really don&#39;t see the need (atm), so I went with <a href="https://formspree.io/">this</a> thingy. If you want to check it out that would be cool. Only downside is the stupid captcha form. But whatever. Form styling was shamelessly parodied from <a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_forms">here</a>.</Paragraph></ParagraphHolder><br/>
            </FlexRow>
          </FlexContainer>
    )
  }


}

export default MessagePage
