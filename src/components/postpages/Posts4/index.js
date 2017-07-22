// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component } from 'react'
import { Badge, IconButton, Heading, Paragraph, ParagraphHolder, PrimaryNavigation, SecondaryNavigation, TertiaryNavigation, ImageResizeContainer, AlignContainer } from 'components'
import styled from 'styled-components'
import './main.css'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { obsidian } from 'react-syntax-highlighter/dist/styles';


const CodeModal = () => {
  const codeString = 'import React, { Component } from "react"\n'+
  'import styled from "styled-components"\n'+
  'import renderIf from "render-if"\n'+
  '\n'+
  'const FlexContainer = styled.div`\n'+
    'display: -webkit-flex; \n'+
    'display: flex; \n'+
    '-webkit-flex-direction: column; \n'+
    'flex-direction: column; \n'+
    '-webkit-align-items: center; \n'+
    'align-items: center; \n'+
    '-webkit-justify-content: center; \n'+
    'justify-content: center; \n'+
  '`\n'+
  'const FlexRow = styled.div`\n'+
    'flex-direction: row;\n'+
  '`\n'+
  '\n'+
  `const styles = {
    images: {
      width: "200px",
      height: "auto",
      paddingLeft: "40px",
      paddingRight: "40px"
    }
  }

  class Modal extends Component{
    constructor(props){
      super(props);
      this.state = {
        openModal: false,
        modalopen: 0,
        modalclosed: 0
      }
    }

    componentWillReceiveProps(nextProps){
      if (nextProps.isOpen===true && this.state.openModal===false){
        document.body.scrollTop = window.scrollY;
        document.body.style.overflow = "hidden";
        this.setState({
          openModal: true
        })
      }
      if(nextProps.isOpen===false && this.state.openModal===true){
        document.body.style.overflow = "visible";
        this.setState({
          openModal: false
        })
      }
    }

    render(){
      if (this.props.isOpen === false){
        return null
      }

      let modalStyle = {
        position: "absolute",
        top: window.scrollY + window.innerHeight/2,
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "9999",
        background: "#8A4F7D",
        overflow: "hidden",
        minWidth: "80vw",
        minHeight: "40vh",
        maxWidth: "100vw",
        maxHeight: "100vh",
        overflowY: "auto",
      }

      let backdropStyle = {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: window.scrollY + "px",
        left: "0px",
        zIndex: "9998",
        background: "rgba(0,0,0,0.3)",
        overflow: "hidden"
      }

      return(
        <div>
          <div style={modalStyle}>
            {this.props.children}
          </div>
          <div style={backdropStyle}></div>
        </div>
      )



    }
  }

  export default Modal`;


  return <SyntaxHighlighter language='javascript' className='codeStyling' style={obsidian}>{codeString}</SyntaxHighlighter>;
}



const CallModal = () => {
  const codeString = `
  <Modal isOpen={this.state.picturedeletemodalopen}>
    <AlignContainer>
      <PictureHeader>
        <h3>Are you super sure you want to delete this picture forever and ever?</h3>
      </PictureHeader>
      <AlphaPictureHolder>
        <FlexRow>
          <ImageContainer>
            <img style={styles.images2} src={this.state.picturetodeleteurl}/>
          </ImageContainer>
        </FlexRow>
        <FlexRow>
          <AlignContainer>
            <div className='platybucks'>
              <p>I want to live!</p>
            </div>
          </AlignContainer>
        </FlexRow>
      </AlphaPictureHolder>
      <br/>
      <FlexRow>
        <span>
          <div className='buttonsmallwarning' style={styles.floatbuttons} onClick={(e)=>{this.deletepictureforsure(e)}}>Delete</div>
          <div className='buttonsmall' style={styles.floatbuttons} onClick={(e)=>{this.canceldelete(e)}}>Cancel</div>
        </span>
      </FlexRow>
      <br/>
    </AlignContainer>
  </Modal>`;


  return <SyntaxHighlighter language='javascript' className='codeStyling2' style={obsidian}>{codeString}</SyntaxHighlighter>;
}


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

const styles = {
  paddingstyle: {
    padding: "10px"
  },
  subtext: {
    backgroundColor: "#A2C1B3",
    color: "#2C4C3E",
    textAlign: "center",
    margin: "4px auto",
    width: "100%",
    padding: "3px",
  },
  soimadea: {
    backgroundColor: "#141414",
    color: "#45D40C",
    textAlign: "center",
    margin: "4px auto",
    fontSize: "40px",
    width: "90%",
    padding: "3px",
    paddingRight: "100px"
  },
  whycare: {
    backgroundColor: "#B87D4B",
    color: "#523A34",
    textAlign: "center",
    margin: "4px auto",
    fontSize: "40px",
    width: "500px",
    height: "100px",
    padding: "3px",
    paddingRight: "100px"
  },
  chooseyourweapon: {
    backgroundColor: "#465775",
    color: "#E26866",
    textAlign: "center",
    margin: "4px auto",
    fontSize: "40px",
    width: "500px",
    height: "100px",
    padding: "3px",
    paddingRight: "100px"
  },
  textybox: {
    padding: "10px",
    lineHeight: "40px",
    backgroundColor: "#2C4C3E",
    color: "#A2C1B3",
    fontSize: '30px',
    fontWeight: "boldest",
    width: "80%",
    textAlign: "center",
    margin: "0 auto"
  },
  textybox2: {
    padding: "10px",
    lineHeight: "40px",
    backgroundColor: "#141414",
    color: "#45D40C",
    fontSize: '30px',
    fontWeight: "boldest",
    width: "80%",
    textAlign: "center",
    margin: "0 auto"
  },
  textybox3: {
    padding: "10px",
    lineHeight: "40px",
    backgroundColor: "#B87D4B",
    color: "#523A34",
    fontSize: '30px',
    fontWeight: "boldest",
    width: "80%",
    textAlign: "center",
    margin: "0 auto"
  },
  textybox4: {
    padding: "10px",
    lineHeight: "40px",
    backgroundColor: "#465775",
    color: "#E26866",
    fontSize: '30px',
    fontWeight: "boldest",
    width: "80%",
    textAlign: "center",
    margin: "0 auto"
  },
  image80: {
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    top: "0",
    margin: "0 auto"
  },
  trippyheader: {
    width: "60%",
    height: "auto",

  }
}
// style: require('../dist/styles/tomorrow-night-eighties').default,
class Posts4 extends Component{
// const Posts4 = () => {
  constructor(props){
    super(props);
    this.state={
      //  style: require('../dist/styles/tomorrow-night-eighties').default,
    }
  }
  render(){
    return (
      <FlexContainer>
        <FlexRow>
          <Heading>Why Everything You Think Is Wrong and the World Is Bullshit</Heading>
        </FlexRow>
        <FlexRow>
          <PrimaryNavigation/>
        </FlexRow>
        <FlexRow>
          <TertiaryNavigation currentNav={4} latestNav={4}/>
        </FlexRow>
        <FlexRow>
          <span>
            <p>
            <div className="floatspan headerfont">
              <div className="moneybags floatspan marginright"/>
              <div className="floatspan">
               <div className="headerchild1">
                  MONEY
               </div>
               <div className="headerchild2">
                  MONEY
              </div>
                MONEY
              </div>
              <div className="moneyflight floatspan marginleft"/>
            </div>
            </p>
          </span>
        </FlexRow>
        <FlexRow>
          <span>
            <div className="floatspan powerbox">
              <p>
                <div className='winkytongueface floatspan'/>
                <div className='winkytongueface floatspan'/>
                <div className='winkytongueface floatspan'/>
                <div className="floatspan powerboxwords">
                    fear the man who has the power of emoji, but not the wisdom of emoji
                </div>
                <div className='winkytongueface floatspan'/>
                <div className='winkytongueface floatspan'/>
                <div className='winkytongueface floatspan'/>
              </p>
            </div>
          </span>
        </FlexRow>

        <FlexRow>
          <div style={styles.textybox}>
            <p>
              This post is about money. Mullah, dollars, cabbage. The big green. What we&#39;re all chasing these days. What I&#39;d like to talk about specifically though is <div className="digitaltag">digital currencies.</div>
            </p>
          </div>
        </FlexRow>
        <br/>
        <FlexRow>
          <ImageResizeContainer percent={20}>
            <img style={styles.image80} src={require('../../../../public/dogecoinbill.png')} />
          </ImageResizeContainer>
        </FlexRow>
        <FlexRow>
          <div style={styles.subtext}>
            <p>
              Remember when this was a gag meme that losers on <a href="http://www.4chan.org/">4chan</a> were posting about? Well now it&#39;s got a market cap over <a href='https://coinmarketcap.com/currencies/dogecoin/'>$154 million real money</a>. Holy fucking shitballs.
            </p>
          </div>
        </FlexRow>
        <br/>
        <FlexRow>
          <div style={styles.textybox}>
            <p>
              So I don&#39;t know all that much about bitcoin, ethereum, [your favorite made up bullshit goes here]. If you&#39;re here to get rich quick from some fabulous insight I have you&#39;re in the wrong place. But I do know a few things. First, if someone ever uses the term "blockchain" and they haven&#39;t rolled their own encryption scheme they&#39;re full of shit. Every two-bit hackathon has at least one or two groups that throw up the words "block chain" on a static web page (and they win prizes!). I&#39;m sure that the corporate world is no different. Everyone wants to jump aboard the hype train. It blows my mind.
            </p>
          </div>
        </FlexRow>
        <br/>
        <FlexRow>
          <ImageResizeContainer percent={40}>
            <img style={styles.image80} src={require('../../../../public/blockchainbrian.jpg')} />
          </ImageResizeContainer>
        </FlexRow>
        <FlexRow>
          <div style={styles.subtext}>
            <p>
              Confucius says, "If you win by being an asshole, you&#39;re still an asshole"
            </p>
          </div>
        </FlexRow>
        <br/>
        <FlexRow>
          <div style={styles.textybox}>
            <p>
              This had all been in the back of my mind before I talked to this one guy in a cafe the other day. He reminded me of a younger version of myself. In his early 20s, maybe a bit naive and very idealistic. He was a coder too, just starting out, trying to get enough work to get by. Wasn&#39;t sure that he ever wanted a corporate job, so already more courageous than I. But he said that one of his dreams was to start a program that would pull an end run around money, that would get back to basics and let people simply barter with each other. He would trade his chicken for my pair of socks, but on the internet.
            </p>
          </div>
        </FlexRow>
        <br/>
        <FlexRow>
          <div style={styles.textybox}>
            <p>
              It&#39;s all too easy to say "yeah, yeah, but..." and list all the reasons that this won&#39;t work. To take the state of the world as given and play the game as it&#39;s handed to you. But then why did I think about similar things when I as his age? Why are there probably a million more people out there that are thinking the same thing? There has to be a reason that everyone feels this way. There&#39;s a zeitgeist in the air that says "something needs to give". Maybe when Dogecoin was starting out it was a reaction to this collective consciousness before it got swallowed whole by the money machine.
            </p>
          </div>
        </FlexRow>
        <br/>

        <FlexRow>
          <div style={styles.soimadea} className="terminaltag">
            <p>
              So I made a program...
            </p>
            <div className="floppydisk floatspan"/>
          </div>
        </FlexRow>

        <br/>
        <FlexRow>
          <div style={styles.textybox2}>
            <p>
              In the top right corner you&#39;ll see a navigation link for my new program "Picture Swapper". The idea is simple. You get 100 "platybucks" (my super awesome fake money) to trade for pictures. Grabbing a picture from the internet to put in your account costs 20, and you can buy and sell pictures with other users for as many "platybucks" as you want. I coded a CRUD app in python which is cool.
            </p>
          </div>
        </FlexRow>
        <br/>
        <FlexRow>
          <div style={styles.textybox2}>
            <p>
              That&#39;s nice and all you&#39;re thinking. But as they say, "where&#39;s the cheese?" What&#39;s the special sauce that makes this thing better than all the other things? Well I&#39;ll tell you. Over time the number of platybucks in circulation increases. But it increases so the people who have the least (specifically the lowest 20%) get more platybucks!
            </p>
          </div>
        </FlexRow>
        <br/>
        <FlexRow>
          <div style={styles.textybox2}>
            <p>
              You should totally check it out. If nothing else, it might be an entertaining use of five minutes of your time.
            </p>
          </div>
        </FlexRow>
        <br/>


        <FlexRow>
          <div style={styles.whycare}>
            <div className="pooptag">
              <p>
                Why you should give a
              </p>
              <div className="poopemoji"/>
            </div>
          </div>
        </FlexRow>
        <br/>
        <FlexRow>
          <div style={styles.textybox3}>
            <p>
              There&#39;s some old school hippy dippy wisdom that runs along the lines of "garbage in = garbage out". What this originally meant was that if your data was bad or built on a faulty premise then no matter how &#39;lite your program you&#39;d still be doing all your fancy functions on a pile of horse hockey. That&#39;s how I feel about many of these new fangled currencies.
            </p>
          </div>
        </FlexRow>
        <br/>
        <FlexRow>
          <ImageResizeContainer percent={30}>
            <img style={styles.image80} src={require('../../../../public/garbagein.png')} />
          </ImageResizeContainer>
        </FlexRow>
        <br/>
        <FlexRow>
          <div style={styles.textybox3}>
            <p>
              They put all this horse power behind the premise that we need a newer, better, way to make sure that people can trade money securely. That this is, in fact, the hard problem that we need to solve. And they are successful! They make very nice, technically interesting programs that do just that - money is traded very securely. But all the old problems still exist. The markets are cornered by the very wealthy and it turns into a get rich quick scheme for early adopters.
            </p>
          </div>
        </FlexRow>
        <br/>
        <FlexRow>
          <div style={styles.textybox3}>
            <p>
              Instead, we should start by solving a hard problem - giving money to those who don&#39;t have any. By inflating the currency and giving the inflation to the members with the lowest amount of capital it penalizes holding cash. It encourages more low level adopters to continuously enter the market place by giving them a (small) incentive. With a marketplace that attracts many low level adopters those with large holdings in other currencies will eventually be encourage to sell to them. And it gives the buying power to those at the bottom who must be catered to by the wealthy in order to get the inflated money.
            </p>
          </div>
        </FlexRow>
        <br/>
        <FlexRow>
          <div style={styles.textybox3}>
            <p>
              What I&#39;ve built is clearly just a toy. But it demonstrates that we are reaching a technological level where the playing field has been democratized. There&#39;s no reason that the big players must be the only one&#39;s making digital currency and there&#39;s no reason that a currency&#39;s raison d&#39;etre must be security and security alone. One day I hope that a coin that is made by people that care about others will become dominant.
            </p>
          </div>
        </FlexRow>
        <br/>
        <FlexRow>
          <ImageResizeContainer percent={50}>
            <img style={styles.image80} src={require('../../../../public/hewhocontrolsthespice.jpg')} />
          </ImageResizeContainer>
        </FlexRow>
        <FlexRow>
          <div style={styles.subtext}>
            <p>
              The <strike>spice</strike> coin extends life. The <strike>spice</strike> coin expands consciousness. The <strike>spice</strike> coin is vital to space travel.
            </p>
          </div>
        </FlexRow>
        <br/>

        <FlexRow>
          <div style={styles.chooseyourweapon}>
            <div className="weapontag">
              <p>
               	Choose Your Weapon
              </p>
              <div className="crossedswords1"/>
              <div className="crossedswords2"/>
            </div>
          </div>
        </FlexRow>
        <br/>

        <FlexRow>
          <div style={styles.textybox4}>
            <p>
              I would be remiss if I didn&#39;t share some cool code. Below is a component that I made that is a standalone modal for react. There&#39;s a few things going on here. The modal is positioned in the middle of the screen from wherever you happen to be when you click the button that causes the modal to pop up. That&#39;s the top setting in modalStyle. It also lets you scroll within the modal, but locks the background! (Checkout the overflow hiddens and overflowY=auto) Neat, huh?
            </p>
          </div>
        </FlexRow>
        <br/>

          <CodeModal/>
          <br/>
          <FlexRow>
            <div style={styles.textybox4}>
              <p>
                However the best part is how you call the modal. You call it as shown below in whatever component you want a modal in. All those onClick function calls that the button&#39;s are making? Those are defined in the parent! This means you don&#39;t have to play the back and forth data jive every time you want to make a button do a thing. And it also means that the component doesn&#39;t have to be refactored for every use case. Super sweet!  <div className="okhand"/>
              </p>
            </div>

          </FlexRow>
          <br/>

          <CallModal/>

          <div className='trippyheader'>
              <p>
                And Now For Something Entirely Trippy
              </p>
          </div>
          <br/>
          <FlexRow>
            <AlignContainer>
              <img  src={require('../../../../public/trippymoney.gif')} />
            </AlignContainer>
          </FlexRow>
          <br/>

      </FlexContainer>
    )
  }
}

export default Posts4
