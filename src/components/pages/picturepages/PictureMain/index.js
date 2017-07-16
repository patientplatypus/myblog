// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component } from 'react'
import { Badge, IconButton, Heading, Paragraph, ParagraphHolder, PrimaryNavigation, SecondaryNavigation, TertiaryNavigation, Caption, Link, ParagraphSmall, AlignContainer, SubHeader} from 'components'
import renderIf from 'render-if'
import styled from 'styled-components'
import axios from 'axios'
import PictureContainer from './PictureContainer';
import SellModal from './SellModal';
import Modal from './Modal';
import OtherUser from './OtherUser';
import OtherUserPictureContainer from './OtherUserPictureContainer';
import AllPicturesForSale from './AllPicturesForSale';
import { font, palette } from 'styled-theme'
import { ThemeProvider } from 'styled-components'
import './main.css'



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
  display:flex;
`
const FlexRight = styled.div`
  flex-grow: 1;
  min-width: 66%;
  max-width: 66%;
  text-align: right;
`

const FlexLeft = styled.div`
  flex-grow: 1;
  min-width: 66%;
  max-width: 66%;
  text-align: left;
`

const FlexSpace = styled.div`
  flex-grow: 1;
  min-width: 33%;
  max-width: 33%;
`

const Flex2 = styled.div`
  flex-grow: 1;
  flex-direction: column;
  min-width: 200px;
  max-width: 50%;
  text-align: right;
  background-color: skyblue;
`


const Flex1 = styled.div`
  flex-grow: 1;
  flex-direction: column;
  min-width: 280px;
  max-width: 70%;
  text-align: right;
  background-color: tomato;
`

const FlexMargin = styled.div`
  flex: 1;
  background-color: purple;
  flex-direction: column;
  display: flex;
`
const FlexSize1 = styled.div`
  flex: 1;
  background-color: skyblue;
  flex-direction: column;
  display: flex;
`


const FlexSize2 = styled.div`
  flex: 2;
  background-color: tomato;
  flex-direction: column;
  display: flex;
`

const FlexSize1Modal = styled.div`
  flex: 1;
  height: 100%;
  min-height: 100%;
  background-color: skyblue;
  flex-direction: column;
  display: flex;
`


const FlexSize2Modal = styled.div`
  flex: 2;
  height: 100%;
  min-height: 100%;
  background-color: tomato;
  flex-direction: column;
  display: flex;
`

const FlexMarginModal = styled.div`
  flex: 1;
  height: 100%;
  min-height: 100%;
  background-color: purple;
  flex-direction: column;
  display: flex;
`

const FlexRowModal = styled.div`
  flex-direction: row;
  display:flex;
  min-height: 100%;
  height: 100%;
`

const PictureHeader = styled.div`
  color: white;
  background-color: #414073;
  padding: 3px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  border-color: #4C3957
  border-width: 2px;
`

const YourPicturesContainer = styled.div`
  width: 100%;
  marign: 0;
`

const Flex1Transparent = styled.div`
  flex: 1;
  background-color: transparent;
`

const FlexColumn = styled.div`
  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
`

const PictureScrollUsers = styled.div`
  max-height: 60vh;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
`

const OtherUsersScroll = styled.div`
  max-height: 20vh;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
`

const NoPictureContainer = styled.div`
  display: block;
  margin-top: 10vh;
  padding-top: 10vh;
  padding-right: 1vw;
  padding-left: 1vw;
  width: 80%;
  height: 20vh;
  text-align: center;
  background-color: #232C33;
  color: white;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
  border-radius: 10px;
`

const NoPictureContainerOtherUsers = styled.div`
  display: block;
  padding-top: 10vh;
  padding-right: 1vw;
  padding-left: 1vw;
  width: 80%;
  height: 20vh;
  text-align: center;
  background-color: #232C33;
  color: white;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
  border-radius: 10px;
`

const styles = {
  images: {
    width: "200px",
    height: "auto",
    paddingLeft: "40px",
    paddingRight: "40px"
  },
  nopictures: {
    marginTop: '100px',
    marginBottom: '10px'
  },
  bankBackground: {
    backgroundColor: "#A9B5C6"
  }
}

class PictureMain extends Component{
  constructor(props){
    super(props);
    this.state = {
      pictureurl: '',
      username: null,
      retrievpictures: null,
      picturearray: [],
      picturearrayforsale: [],
      sellmodal:false,
      sellpicturedata: null,
      usermoney: 0,
      isModalOpenAddPicture: false,
      testvalue: 0,
      previewpicture: false,
      picturecost: -1,
      notenoughmoney: false,
      userarray: [],
      otherusername: '',
      otheruserpicturearray: [],
      otheruserpicturearrayforsale: [],
      isModalOpenOtherUser: false,
      allpicturesforsalearray: [],
      isModalOpenAllPictures: false,
      allpicturespictureurl: '',
      allpicturescurrentprice: '',
      allpicturespictureid: '',
      allpicturesuserref: ''
    }
  }


  componentWillMount(){
    var self = this;
    console.log("inside the componentwillmount of picturemain")
    if (this.props.location.state === undefined){
      console.log("name is undefined");
    }else{
      console.log(this.props.location.state.name);

      this.setState({
        username: this.props.location.state.name
      }, ()=>{
        axios.post('http://localhost:5000/retrievepictures', {
          name: this.state.username,
        })
          .then((response)=>{
             console.log('response from the python call ', response.data);
             var pictureurl, boughtfor, soldfor, currentprice, pictureid, userref;
             var tempArray = [];
             var tempObj = {};
             var tempArrayforsale = [];
             response.data.pictures.forEach(picture=>{
               pictureurl = picture[0];
               boughtfor = picture[1];
               soldfor = picture[2];
               currentprice = picture[3];
               pictureid = picture[4];
               userref = picture[5];
               if (currentprice == -1){
                 console.log('inside == -1');
                 tempObj = {pictureurl, boughtfor, soldfor, currentprice, pictureid, userref};
                 tempArray.push(tempObj);
               }
               if (currentprice != -1){
                 console.log('inside != -1');
                 tempObj = {pictureurl, boughtfor, soldfor, currentprice, pictureid, userref};
                 tempArrayforsale.push(tempObj);
                 console.log('value of the tempObjforsale is ', tempObj);
                 console.log('value of tempArrayforsale is ', tempArrayforsale);
               }
             })
             this.setState({
               picturearray: tempArray,
               picturearrayforsale: tempArrayforsale
             }, ()=>{
               console.log('after setting picturearray and the value is ', this.state.picturearray);
               console.log('after setting picturearrayforsale and the value is ', this.state.picturearrayforsale);
             })
           })
           .catch((err)=>{
             console.log('python axios error');
             console.log('and the error is ', err);
           });

        axios.post('http://localhost:5000/retrieveuserinfo', {
          name: this.state.username
        })
          .then((response)=>{
             console.log('response from the python call ', response.data);
             console.log(response.data.userinfo[2]);
             self.setState({
               usermoney: response.data.userinfo[2]
             })
          })
          .catch((err)=>{
             console.log('python axios error');
             console.log('and the error is ', err);
          });

        axios.post('http://localhost:5000/allusers')
          .then((response)=>{
             console.log('response from ALL USERS ', response.data);
             self.setState({
               userarray: response.data.allusers
             });
          })
          .catch((err)=>{
             console.log('python axios error');
             console.log('and the error is ', err);
          });


        axios.post('http://localhost:5000/allpicturesforsale', {
          name: this.state.username
        })
          .then((response)=>{
             console.log('response from allpicturesforsale ', response.data.allpicturesforsale);
             var tempObj = {};
             var tempArray = [];
             response.data.allpicturesforsale.forEach(picture=>{
                var pictureurl = picture[0];
                var currentprice = picture[3];
                var pictureid = picture[4];
                var userref = picture[5];
                tempObj = {pictureurl, currentprice, pictureid, userref};
                tempArray.push(tempObj);
             })
             this.setState({
               allpicturesforsalearray: tempArray
             }, ()=>{
               console.log('this is the allpicturesforsalearray after setState', this.state.allpicturesforsalearray);
             })
          })
          .catch((err)=>{
             console.log('python axios error');
             console.log('and the error is ', err);
          });

       });
    }
  }

  pulldatafunc(username){
    var self = this
    axios.post('http://localhost:5000/retrievepictures', {
      name: username,
    })
      .then((response)=>{
         console.log('response from the python call ', response.data);
         var pictureurl, boughtfor, soldfor, currentprice, pictureid, userref;
         var tempArray = [];
         var tempObj = {};
         var tempArrayforsale = [];
         response.data.pictures.forEach(picture=>{
           pictureurl = picture[0];
           boughtfor = picture[1];
           soldfor = picture[2];
           currentprice = picture[3];
           pictureid = picture[4];
           userref = picture[5];
           if (currentprice == -1){
             tempObj = {pictureurl, boughtfor, soldfor, currentprice, pictureid, userref}
             tempArray.push(tempObj);
           }else{
             tempObj = {pictureurl, boughtfor, soldfor, currentprice, pictureid, userref}
             tempArrayforsale.push(tempObj);
           }
         })
         self.setState({
           picturearray: tempArray,
           picturearrayforsale: tempArrayforsale
         }, ()=>{console.log('after setting picturearray and the value is ', this.state.picturearray);})
       })
       .catch((err)=>{
         console.log('python axios error');
         console.log('and the error is ', err);
       });

     axios.post('http://localhost:5000/retrieveuserinfo', {
       name: username
     })
       .then((response)=>{
          console.log('response from the python call ', response.data);
          console.log(response.data.userinfo[2]);
          self.setState({
            usermoney: response.data.userinfo[2]
          })
       })
       .catch((err)=>{
          console.log('python axios error');
          console.log('and the error is ', err);
       });

     axios.post('http://localhost:5000/allpicturesforsale', {
       name: this.state.username
     })
       .then((response)=>{
          console.log('response from allpicturesforsale ', response.data.allpicturesforsale);
          var tempObj = {};
          var tempArray = [];
          response.data.allpicturesforsale.forEach(picture=>{
             var pictureurl = picture[0];
             var currentprice = picture[3];
             var pictureid = picture[4];
             var userref = picture[5];
             tempObj = {pictureurl, currentprice, pictureid, userref};
             tempArray.push(tempObj);
          })
          this.setState({
            allpicturesforsalearray: tempArray
          }, ()=>{
            console.log('this is the allpicturesforsalearray after setState', this.state.allpicturesforsalearray);
          })
       })
       .catch((err)=>{
          console.log('python axios error');
          console.log('and the error is ', err);
       });

   }


  sellPicture(picturedata){
    console.log("inside sellpicture function");
    console.log("and this is the picturedata", picturedata);
    var self = this;
    self.setState({
      sellpicturedata: picturedata,
      sellmodal: true
    })
  }

  buyPicture(pictureurl, price, username, otherusername){
    var self = this;
    console.log('inside buyPicture and pictureurl, username, otherusername is ', pictureurl, " ", price, " ", username, " ", otherusername);

    axios.post('http://localhost:5000/buyfromothers', {
      name: username,
      othername: otherusername,
      pictureurl: pictureurl,
      price: price
    })
    .then((response)=>{
       console.log('response from the python call ', response.data);
       if (response.data == 'youdonthaveenoughmoney'){
         self.setState({
           notenoughmoney: true
         })
       }else{
         self.pulldatafunc(username);
         self.setState({
           isModalOpenOtherUser: false,
           isModalOpenAllPictures: false,
           notenoughmoney: false
         })
       }
    })
    .catch((err)=>{
       console.log('python axios error');
       console.log('and the error is ', err);
    });

  }

  sellModalClose(username){
    console.log('inside sellModalClose');
    var self = this;
    self.setState({
      sellmodal: false
    })
    self.pulldatafunc(username);
  }

    openModalAddPicture(){
      this.setState({
        isModalOpenAddPicture: true
      })
    }

    closeModalAddPicture(){
      this.setState({
        isModalOpenAddPicture: false,
        previewpicture: false,
        notenoughmoney: false
      })
    }

    closeModalOtherUser(){
      this.setState({
        isModalOpenOtherUser: false,
        notenoughmoney: false
      })
    }


    //pictureurl, currentprice, pictureid, userref
    //allpicturespictureurl, allpicturescurrentprice, allpicturespictureid, allpicturesuserref
    openModalAllPictures(pictureurl, currentprice, pictureid, userref){
      this.setState({
        isModalOpenAllPictures: true,
        allpicturespictureurl: pictureurl,
        allpicturescurrentprice: currentprice,
        allpicturespicturespictureid: pictureid,
        allpicturesuserref: userref
      })
    }

    closeModalAllPictures(){
      this.setState({
        isModalOpenAllPictures: false
      })
    }



    checkUser(otherusername){
      console.log('inside checkUser and otherusername is ', otherusername);
      var self = this;
      axios.post('http://localhost:5000/retrievepictures', {
        name: otherusername,
      })
        .then((response)=>{
           console.log('response from the python call ', response.data);
           var pictureurl, boughtfor, soldfor, currentprice, pictureid, userref;
           var tempArray = [];
           var tempObj = {};
           var tempArrayforsale = [];
           response.data.pictures.forEach(picture=>{
             pictureurl = picture[0];
             boughtfor = picture[1];
             soldfor = picture[2];
             currentprice = picture[3];
             pictureid = picture[4];
             userref = picture[5];
             if (currentprice == -1){
               tempObj = {pictureurl, boughtfor, soldfor, currentprice, pictureid, userref}
               tempArray.push(tempObj);
             }else{
               tempObj = {pictureurl, boughtfor, soldfor, currentprice, pictureid, userref}
               tempArrayforsale.push(tempObj);
             }
           })
           self.setState({
             otheruserpicturearray: tempArray,
             otheruserpicturearrayforsale: tempArrayforsale,
             isModalOpenOtherUser: true,
             otherusername: otherusername
           }, ()=>{console.log('after setting picturearray and the value is ', this.state.picturearray);})
         })
         .catch((err)=>{
           console.log('python axios error');
           console.log('and the error is ', err);
         });
    }

    closeModalAddPictureandbuy(){
      var self = this;

      axios.post('http://localhost:5000/buypictures', {
        name: this.state.username,
        cost: 20,
        pictureurl: this.state.pictureurl
      })
        .then((response)=>{
           console.log('response from the python call ', response.data);
           if(response.data==='youdonthaveenoughmoney'){
             console.log('not enough boyo')
             this.setState({
               notenoughmoney: true
             })
           }else{
             var picturearray = self.state.picturearray;
             var tempObj = {};
             var pictureurl, boughtfor, soldfor, currentprice, pictureid, userref;
             pictureurl = response.data.picture[0];
             boughtfor = response.data.picture[1];
             soldfor = response.data.picture[2];
             currentprice = response.data.picture[3];
             pictureid = response.data.picture[4];
             userref = response.data.picture[5];
             tempObj = {pictureurl, boughtfor, soldfor, currentprice, pictureid, userref}
             picturearray.push(tempObj)
             this.setState({
               picturearray: picturearray,
               usermoney: response.data.totalmoney,
               isModalOpenAddPicture: false,
               previewpicture: false
             })
           }
        })
        .catch((err)=>{
           console.log('python axios error');
           console.log('and the error is ', err);
        });
    }

    testChange(){
      this.setState({
        testvalue: 1
      })
    }



  render(){

    let pictureContainers;

          if(this.state.picturearray.length!=0){
                pictureContainers = this.state.picturearray.map((picture,i) => {
                  return (
                    <PictureContainer key={i} picture={picture} username={this.state.username} sellPicture={this.sellPicture.bind(this)} pulldatafunc={this.pulldatafunc.bind(this)} />
                  );
                });
          }

    let pictureContainersforsale;

          if(this.state.picturearrayforsale.length!=0){
                pictureContainersforsale = this.state.picturearrayforsale.map((picture,i) => {
                  return (
                    <PictureContainer key={i} picture={picture} username={this.state.username} sellPicture={this.sellPicture.bind(this)}
                    pulldatafunc={this.pulldatafunc.bind(this)} />
                  );
                });
          }

    let AllUser;

        if(this.state.userarray.length!=0){
              AllUser = this.state.userarray.map((user,i) => {
                if (user != this.state.username){
                  return (
                    <FlexRow>
                      <OtherUser key={i} user={user} checkUser={this.checkUser.bind(this)}/>
                    </FlexRow>
                  );
                }
              });
        }


    let otheruserpictureContainers;

          if(this.state.otheruserpicturearray.length!=0){
                otheruserpictureContainers = this.state.otheruserpicturearray.map((picture,i) => {
                  return (
                    <OtherUserPictureContainer key={i} picture={picture} otherusername={this.state.otherusername} username={this.state.username} buyPicture={this.buyPicture.bind(this)} pulldatafunc={this.pulldatafunc.bind(this)} />
                  );
                });
          }

    let otheruserpictureContainersforsale;

          if(this.state.otheruserpicturearrayforsale.length!=0){
                otheruserpictureContainersforsale = this.state.otheruserpicturearrayforsale.map((picture,i) => {
                  return (
                    <OtherUserPictureContainer key={i} picture={picture} otherusername={this.state.otherusername} username={this.state.username} buyPicture={this.buyPicture.bind(this)}
                    pulldatafunc={this.pulldatafunc.bind(this)} />
                  );
                });
          }

    let allpicturesforsalemap;

          if(this.state.allpicturesforsalearray.length!=0){
                allpicturesforsalemap = this.state.allpicturesforsalearray.map((picture,i) => {
                  return (
                    <AllPicturesForSale key={i} picture={picture} openModalAllPictures={this.openModalAllPictures.bind(this)}/>
                  );
                });
          }




    return(
      <div>

      {renderIf(this.state.username === null)(
        <FlexContainer>
          <br/><br/><br/>
          <FlexRow>
            <ParagraphHolder>
              <Paragraph>
                You did not properly log in. You naughty dog you. Hit the back button, and click your heels three times, to navigate to a safe place.
              </Paragraph>
            </ParagraphHolder>
          </FlexRow>
        </FlexContainer>
      )}

      {renderIf(this.state.username != null)(
        <FlexContainer>
          <FlexRow>
            <Heading>Why Everything You Think Is Wrong and the World Is Bullshit</Heading>
          </FlexRow>
          <FlexRow>
            <PrimaryNavigation/>
          </FlexRow>
          {renderIf(this.state.sellmodal===false)(
          <div>
          <AlignContainer>
            <FlexRow>
              <SubHeader level={2}>WELCOME {this.state.username}</SubHeader>
            </FlexRow>
            <FlexRow>
              <SubHeader level={3}>THIS IS HOW MUCH MONEY YOU GOT</SubHeader>
            </FlexRow><br/>

            <FlexRow>
              <div className='bankroofcontainer'>
                <FlexRow>
                  <div className='bankroofinner'>
                    BANK
                  </div>
                  <div className='bankroof'></div>
                </FlexRow>
              </div>
            </FlexRow>
            <FlexRow>
              <Flex1Transparent>
                <FlexColumn>
                  <div className='ahead4'>
                    <div className="pillarmainaheadahead"></div>
                    <div className="pillarbaseaheadahead"></div>
                  </div>
                </FlexColumn>
                <FlexColumn>
                </FlexColumn>
              </Flex1Transparent>
              <Flex1Transparent>
                <FlexColumn>
                  <div className='ahead2'>
                    <div className="pillarmainahead"></div>
                    <div className="pillarbaseahead"></div>
                  </div>
                </FlexColumn>
                <FlexColumn>
                </FlexColumn>
              </Flex1Transparent>
                <Flex1Transparent style={styles.bankBackground}>
                  <FlexColumn>
                    <div className="pillarmain"></div>
                    <div className="pillarbase"></div>
                  </FlexColumn>
                  <FlexColumn>
                  </FlexColumn>
                </Flex1Transparent>
                <Flex1Transparent style={styles.bankBackground}>
                  <FlexColumn>
                    <Flex1Transparent>
                    </Flex1Transparent>
                    <Flex1Transparent>
                      <FlexRow>
                        <div className='moneycontainer'>
                          <FlexRow>
                            <div className="platypuswetrust">
                              IN PLATYPUS WE TRUST
                            </div>
                            <div className='platypusbackground'>
                                <img className='platypusbackgroundimg' src={require('../../../../../public/platypushorizontaldarkgreen.png')} />
                            </div>
                            <div className='platypusicon'>
                                <img className='platypusiconimg' src={require('../../../../../public/platypusverticaldarkgreen.png')} />
                            </div>
                            <div className='smallmoneynumber'>
                              {this.state.usermoney}
                            </div>
                            <div className='smallmoney'>
                              <div className='burst-12'>
                              </div>
                            </div>
                            <div className="money">
                              <div className="moneynumber">
                                {this.state.usermoney}
                              </div>
                            </div>
                          </FlexRow>
                        </div>
                      </FlexRow>
                    </Flex1Transparent>
                    <Flex1Transparent>
                    </Flex1Transparent>
                  </FlexColumn>
                </Flex1Transparent>
                <Flex1Transparent style={styles.bankBackground}>
                  <FlexColumn className='fixzindex'>
                      <div className="pillarmain"></div>
                      <div className="pillarbase"></div>
                  </FlexColumn>
                  <FlexColumn>
                  </FlexColumn>
                </Flex1Transparent>
                <Flex1Transparent>
                  <FlexColumn>
                    <div className='ahead'>
                      <div className="pillarmainahead"></div>
                      <div className="pillarbaseahead"></div>
                    </div>
                  </FlexColumn>
                  <FlexColumn>
                  </FlexColumn>
                </Flex1Transparent>
                <Flex1Transparent>
                  <FlexColumn>
                    <div className='ahead3'>
                      <div className="pillarmainaheadahead"></div>
                      <div className="pillarbaseaheadahead"></div>
                    </div>
                  </FlexColumn>
                  <FlexColumn>
                  </FlexColumn>
                </Flex1Transparent>
              </FlexRow>

            <FlexRow>
              <SubHeader level={3}>UPLOAD A PICTURE</SubHeader>
            </FlexRow><br/>
            <FlexRow>
              <div className="button" onClick={() => {this.openModalAddPicture()}}>buy a web pic</div>
            </FlexRow>
            <FlexRow>
              <SubHeader level={3}>YOUR PICTURES</SubHeader>
            </FlexRow>
            <br/>
          </AlignContainer>

          <FlexRow>
            <Modal isOpen={this.state.isModalOpenAddPicture}>
              <AlignContainer>
                <PictureHeader>
                  <h3>Upload a Picture & Buy</h3>
                </PictureHeader>
              </AlignContainer>
              <AlignContainer>
                <input  value={this.state.pictureurl} onChange={(e)=>{this.setState({pictureurl: e.target.value})}} type="pictureurl" name="pictureurl" placeholder="Picture URL"/><br/>
                <p><button onClick={()=>{this.setState({previewpicture: true})}}>Preview Picture</button></p>
              </AlignContainer>
              {renderIf(this.state.previewpicture===true)(
                <AlignContainer>
                  <img style={styles.images} src={this.state.pictureurl}/>
                  <p><button onClick={()=>this.closeModalAddPictureandbuy()}> Buy for 20 points </button></p>
                  <p><button onClick={()=>this.closeModalAddPicture()}> Cancel </button></p>
                  {renderIf(this.state.notenoughmoney===true)(
                    <p>No picture for you! You do not have the 20 points necessary to buy!</p>
                  )}
                </AlignContainer>
              )}
              {renderIf(this.state.previewpicture===false)(
                <AlignContainer>
                  <button onClick={()=>this.closeModalAddPicture()}> Cancel </button>
                </AlignContainer>
              )}
            </Modal>
          </FlexRow>




            <YourPicturesContainer>

                <FlexRow>
                  <FlexMargin/>
                  <FlexSize1>
                    <AlignContainer>
                      <PictureHeader>
                        <h3>Your Pictures</h3>
                      </PictureHeader>
                    </AlignContainer>
                    <PictureScrollUsers>
                      {pictureContainers}
                      {renderIf(this.state.picturearray.length===0)(
                        <NoPictureContainer>
                          <p> You do not have any pictures that are not for sale. </p>
                        </NoPictureContainer>
                      )}
                    </PictureScrollUsers>
                  </FlexSize1>
                  <FlexSize2>
                    <AlignContainer>
                      <PictureHeader>
                        <h3>Your Pictures for Sale</h3>
                      </PictureHeader>
                    </AlignContainer>
                    <PictureScrollUsers>
                      {pictureContainersforsale}
                      {renderIf(this.state.picturearrayforsale.length===0)(
                        <NoPictureContainer>
                          <p>You do not have any pictures for sale.</p>
                        </NoPictureContainer>
                      )}
                    </PictureScrollUsers>
                  </FlexSize2>
                  <FlexMargin/>
                </FlexRow>



                <FlexRow>
                  <SubHeader level={3}>PICTURES FOR SALE</SubHeader>
                </FlexRow>
                <FlexRow>
                  <FlexMargin/>
                  <FlexSize2>
                    <PictureScrollUsers>
                      {allpicturesforsalemap}
                      {renderIf(this.state.allpicturesforsalearray.length===0)(
                        <NoPictureContainerOtherUsers>
                          <p>No other users currently have any pictures for sale</p>
                        </NoPictureContainerOtherUsers>
                      )}
                    </PictureScrollUsers>
                  </FlexSize2>
                  <FlexMargin/>
                </FlexRow>
                <FlexRow>
                  <SubHeader level={3}>OTHER USERS</SubHeader>
                </FlexRow>
                <FlexRow>
                  <FlexMargin/>
                  <FlexSize1>
                  <OtherUsersScroll>
                    {AllUser}
                  </OtherUsersScroll>
                  </FlexSize1>
                  <FlexMargin/>
                </FlexRow>
                <br/>

            </YourPicturesContainer>
            </div>
          )}

          {renderIf(this.state.sellmodal===true)(
            <SellModal sellpicturedata={this.state.sellpicturedata} username={this.state.username} sellModalClose={this.sellModalClose.bind(this)}/>
          )}


          <Modal isOpen={this.state.isModalOpenAllPictures}>
            <AlignContainer>
              <PictureHeader>
                <h3>Here is the Picture You Can Buy!</h3>
              </PictureHeader>
              <FlexRow>
                <img src={this.state.allpicturespictureurl}/>
              </FlexRow>
              <FlexRow>
                <h4>The cost is <strong>{this.state.allpicturescurrentprice}</strong></h4>
              </FlexRow>
              {renderIf(this.state.notenoughmoney===true)(
                <p>No picture for you! You do not have the money necessary to buy!</p>
              )}
              <FlexRow>
                <button onClick={()=>this.buyPicture(this.state.allpicturespictureurl,this.state.allpicturescurrentprice,this.state.username, this.state.allpicturesuserref)}>Buy!</button><br/>
                <button onClick={()=>{this.setState({isModalOpenAllPictures: false, notenoughmoney: false})}}>Cancel</button>
              </FlexRow>
              <br/>
            </AlignContainer>
          </Modal>



          <Modal isOpen={this.state.isModalOpenOtherUser} >
            <AlignContainer>
              <h3>
                These are all the pictures from {this.state.otherusername}
              </h3>
            </AlignContainer>
            {renderIf(this.state.otheruserpicturearrayforsale.length===0 && this.state.otheruserpicturearray.length===0)(
                <AlignContainer>
                  <PictureHeader style={styles.nopictures}>
                    <h3>This user has no pictures, nor any pictures for sale...so sad too bad.</h3>
                  </PictureHeader>
                </AlignContainer>
            )}
            {renderIf(this.state.otheruserpicturearrayforsale.length!=0 || this.state.otheruserpicturearray.length!=0)(
              <FlexRowModal>
                <FlexMargin/>
                <FlexSize1>
                  <AlignContainer>
                    <PictureHeader>
                      <h3>Pictures</h3>
                    </PictureHeader>
                  </AlignContainer>
                  <PictureScrollUsers>
                    {otheruserpictureContainers}
                    {renderIf(this.state.otheruserpicturearray.length===0)(
                      <NoPictureContainer>
                        <p>{this.state.otherusername} does not have any pictures not for sale</p>
                      </NoPictureContainer>
                    )}
                  </PictureScrollUsers>
                </FlexSize1>
                <FlexSize2>
                  <AlignContainer>
                    <PictureHeader>
                      <h3>Pictures for Sale</h3>
                    </PictureHeader>
                  </AlignContainer>
                  <PictureScrollUsers>
                  {otheruserpictureContainersforsale}
                  {renderIf(this.state.otheruserpicturearrayforsale.length===0)(
                    <NoPictureContainer>
                      <p>{this.state.otherusername} does not have any pictures sale</p>
                    </NoPictureContainer>
                  )}
                  </PictureScrollUsers>
                </FlexSize2>
                <FlexMargin/>
              </FlexRowModal>
            )}
            {renderIf(this.state.notenoughmoney===true)(
              <p>No picture for you! You do not have the points necessary to buy!</p>
            )}
              <AlignContainer>
                <button onClick={()=>this.closeModalOtherUser()}> Cancel </button>
              </AlignContainer>
          </Modal>

        </FlexContainer>
      )}
      </div>
    )
  }
}



export default PictureMain
