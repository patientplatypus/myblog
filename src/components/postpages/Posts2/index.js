// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component } from 'react'
import { Badge, IconButton, Heading, Paragraph, ParagraphHolder, PrimaryNavigation, SecondaryNavigation, TertiaryNavigation, Caption, Link, ParagraphSmall, AlignContainer, SubHeader, ImageResizeContainer} from 'components'
import styled from 'styled-components'
import axios from 'axios'
import renderIf from 'render-if'
import ListEquipment from './ListEquipment';
import ListClass from './ListClass';
import ListRace from './ListRace';


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

const DnDBigBox = styled.div`
    background-color: black;
    border-radius: 10px;
    padding: 10px;
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

const ImageHolder = styled.div`
    maxWidth: 80%;
    height: auto;
`

const SelectorButton = styled.div`
    position: absolute;
    bottom: 0;
    width: 100px;
    height: 50px;
    float: left;
    margin: 10px 100px;
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

const ListBox = styled.div`
  overflow: auto;
  height: 300px;
  width: 100%;
  background-color: RGB(170, 150, 160);
  text-align: center;

`

// const ImageSize80 = styled.div`
//   width: 80vw;
//   padding-bottom: 30%;
//   position: relative;
//   margin: 0 auto;
//   -webkit-align-items: center;
//   align-items: center;
//   -webkit-justify-content: center;
//   justify-content: center;
//   margin: 0 auto;
//   display: flex;
//   flex-direction:column;
// `


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
  },
  imgSize: {
    maxWidth: "100px",
    maxHeight: "80px",
    // float: "left",
    textAlign: "center"
  },
  imgSizeBig: {
    marginTop: "10%",
    width: "90%",
    height: "auto",
    // float: "left",
    textAlign: "center"
  },
  image80: {
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    top: "0",
    margin: "0 auto"
  }
}




class Posts2 extends Component{
  constructor(props){
    super(props)
    this.state={
      equipmentModal: false,
      characterModal: false,
      equipmentResults: [],
      raceResults: [],
      classResults: [],
      TitleArray: ["Character", "Equipment", "Equipment", "Equipment"],
      ImageArray: ["", "", "", ""],
      containternumber: null
    }
  }


  componentWillMount() {
     var self = this;
     console.log('inside getCalendarInfo');
// https://boiling-spire-25262.herokuapp.com
// http://localhost:5000/hello
       axios.post('https://boiling-spire-25262.herokuapp.com/hello')
         .then((response)=>{
          console.log('response from the hello call ', response);
         })
        .catch(()=>{
          console.log('hello axios error');
        });

   }

   changeCharacter(e){
     e.preventDefault();
     var self = this;
     var tempCharacterArray = [];
     this.setState({
       characterModal: true,
       containernumber: 0
     });
     axios.post('http://localhost:5000/post2/changeCharacter')
       .then((response)=>{
        console.log('response from the hello call ', response);

        response.data.results.forEach((character)=>{
          console.log('are we even in the forEach array');
          console.log('inside the forEach array and the value of equipment item is ', character.name);
          console.log('and the value of the tempEquipArray is ', tempCharacterArray);
          tempCharacterArray.push(character.name);
        });

        self.setState({
          classResults: tempCharacterArray
        }, ()=>{
          console.log('the value of the equipmentResults is ', tempCharacterArray);
        })

       })
      .catch(()=>{
        console.log('hello axios error');
      });
   }

   cancelChange(e){
     e.preventDefault();
     if (this.state.containernumber === 0){
       var TitleArray = this.state.TitleArray;
       TitleArray[0] = "Character";
       var ImageArray = this.state.ImageArray;
       ImageArray[0] = "";
       this.setState({
         characterModal: false,
         equipmentModal: false,
         TitleArray: TitleArray,
         ImageArray: ImageArray
       });
     }
     if (this.state.containernumber === 1){
       var TitleArray = this.state.TitleArray;
       TitleArray[1] = "Equipment";
       var ImageArray = this.state.ImageArray;
       ImageArray[1] = "";
       this.setState({
         characterModal: false,
         equipmentModal: false,
         TitleArray: TitleArray,
         ImageArray: ImageArray
       });
     }
     if (this.state.containernumber === 2){
       var TitleArray = this.state.TitleArray;
       TitleArray[2] = "Equipment";
       var ImageArray = this.state.ImageArray;
       ImageArray[2] = "";
       this.setState({
         characterModal: false,
         equipmentModal: false,
         TitleArray: TitleArray,
         ImageArray: ImageArray
       });
     }
     if (this.state.containernumber === 3){
       var TitleArray = this.state.TitleArray;
       TitleArray[3] = "Equipment";
       var ImageArray = this.state.ImageArray;
       ImageArray[3] = "";
       this.setState({
         characterModal: false,
         equipmentModal: false,
         TitleArray: TitleArray,
         ImageArray: ImageArray
       });
     }
   }

   exitChange(e){
     e.preventDefault();
     this.setState({
       characterModal: false,
       equipmentModal: false
     });
     this.forceUpdate();
   }

   changeEquipment(e, containernumber){
     e.preventDefault();
     var self = this;
     var tempEquipArray = [];
     console.log('inside changeHelmet with containternumber ', containernumber);
     this.setState({
       equipmentModal: true,
       containernumber: containernumber
     });
     axios.post('http://localhost:5000/post2/changeEquipment')
       .then((response)=>{
        console.log('response from the hello call ', response);

        response.data.results.forEach((equipment)=>{
          console.log('are we even in the forEach array');
          console.log('inside the forEach array and the value of equipment item is ', equipment.name);
          console.log('and the value of the tempEquipArray is ', tempEquipArray);
          tempEquipArray.push(equipment.name);
        });

        self.setState({
          equipmentResults: tempEquipArray
        }, ()=>{
          console.log('the value of the equipmentResults is ', equipmentResults);
        })

       })
      .catch(()=>{
        console.log('hello axios error');
      });
   }

   setTheImage(name, image){
     console.log("insided setEquipmentImage and image is ", image);
    //  debugger;
     if (this.state.containernumber === 0){
       var TitleArray = this.state.TitleArray;
       TitleArray[0] = name;
       var ImageArray = this.state.ImageArray;
       ImageArray[0] = image;
       this.setState({
         characterModal: false,
         equipmentModal: false,
         TitleArray: TitleArray,
         ImageArray: ImageArray
       });
     }
     if (this.state.containernumber === 1){
       var TitleArray = this.state.TitleArray;
       TitleArray[1] = name;
       var ImageArray = this.state.ImageArray;
       ImageArray[1] = image;
       this.setState({
         characterModal: false,
         equipmentModal: false,
         TitleArray: TitleArray,
         ImageArray: ImageArray
       });
     }
     if (this.state.containernumber === 2){
       var TitleArray = this.state.TitleArray;
       TitleArray[2] = name;
       var ImageArray = this.state.ImageArray;
       ImageArray[2] = image;
       this.setState({
         characterModal: false,
         equipmentModal: false,
         TitleArray: TitleArray,
         ImageArray: ImageArray
       });
     }
     if (this.state.containernumber === 3){
       var TitleArray = this.state.TitleArray;
       TitleArray[3] = name;
       var ImageArray = this.state.ImageArray;
       ImageArray[3] = image;
       this.setState({
         characterModal: false,
         equipmentModal: false,
         TitleArray: TitleArray,
         ImageArray: ImageArray
       });
     }
   }

   getRaceInfo(){

   }

   setClassImage(){

   }

   render(){



     let listEquipments;

           if(this.state.equipmentResults.length!=0){
                 listEquipments = this.state.equipmentResults.map((item,i) => {
                   return (
                     <ListEquipment key={i} equipment={item} setTheImage={this.setTheImage.bind(this)} />
                   );
                 });
           }

    //  let listRaces;
     //
    //        if(this.state.raceResults.length!=0){
    //              listRaces = this.state.equipmentResults.map((item,i) => {
    //                return (
    //                  <ListRace key={i} race={item} getRaceInfo={this.getRaceInfo.bind(this)}/>
    //                );
    //              });
    //        }

     let listClasses;

           if(this.state.classResults.length!=0){
                 listClasses = this.state.classResults.map((item,i) => {
                   return (
                     <ListClass key={i} classes={item} setTheImage={this.setTheImage.bind(this)}/>
                   );
                 });
           }


      return (
        <FlexContainer>
          <FlexRow>
            <Heading>Why Everything You Think Is Wrong and the World Is Bullshit</Heading>
          </FlexRow>
          <FlexRow>
            <PrimaryNavigation/>
          </FlexRow>
          <FlexRow>
            <TertiaryNavigation currentNav={2} latestNav={4}/>
          </FlexRow><br/>
          <FlexRow>
            <SubHeader level={1}>Austin & THE INTERNET</SubHeader>
          </FlexRow>
          <FlexRow>
            <SubHeader level={3}>Before the Fall</SubHeader>
          </FlexRow>
          <br/>
          <FlexRow>
            <ImageResizeContainer percent={20}>
              <img  style={styles.image80} src={require('../../../../public/deepaustin.jpg')} />
            </ImageResizeContainer>
          </FlexRow>
          <FlexRow>
            <ParagraphSmall>It&#39;s like Disney World on acid</ParagraphSmall><br/>
          </FlexRow>
          <br/>
          <FlexRow>
            <ParagraphHolder>
              <Paragraph>
                After a few years traveling I decided to settle down and try and make a living somewhere. I must be a living stereotype because my decision making process wasn&#39;t all that different than many other people I&#39;ve talked to. "What&#39;s a job I can make a good living at?" Well, I guess that would be programming. "Where can I afford the rent?" Pretty much anywhere in the country that isn&#39;t within 200 miles of the east or west coasts. "Where then can I learn programming?" Austin? Sure, sounds good. Perhaps it&#39;s not the most enlightened way of making big decisions but it&#39;s a habit that I&#39;ve fallen into. Sometimes I suspect I agonize more over the most trivial detail, soy or whole milk in my extra whip tall, than on what&#39;s really important. Maybe it&#39;s because you never really know how life is going to turn out. You can spend all your time thinking should I go left or right, but if you can&#39;t see 10 miles down the road, the decision doesn&#39;t really matter does it? It has always has amused me when people ask "Where do you see yourself in 5 years?" If I had the courage at the time I might have shot back, "5 years ago did you see yourself here? Because if not it&#39;s a bit of a moot point in&#39;it?"
              </Paragraph>
            </ParagraphHolder>
          </FlexRow>
          <br/>
          <FlexRow>
            <ImageResizeContainer percent={40}>
              <img style={styles.image80} src={require('../../../../public/groovyautomotive.jpg')} />
            </ImageResizeContainer>
          </FlexRow>
          <FlexRow>
            <ParagraphSmall>We get it. You&#39;re super rad.</ParagraphSmall><br/>
          </FlexRow>
          <br/>
          <FlexRow>
            <ParagraphHolder>
              <Paragraph>
                I&#39;ve been out of a coding bootcamp for a bit (I said I was a stereotype didn&#39;t I) so I&#39;ve been in Austin for a while, and I&#39;m still not sure how I feel about it. Everyone here is in there 20s or early 30s, and at 31 it makes me feel a bit like an old man. Everyone here has to be hip. Like if you&#39;re not hip you just can&#39;t make it. I&#39;ve seen car repair shops with bespoke lighted signs that are reminiscent of the 1950s motel aesthetic. I know why they do it - it gets them more customers and maybe if they don&#39;t look nice it&#39;ll be hard to pay the bills. And there&#39;s nothing wrong with looking nice right? Still, it makes me long for the days when going out to a Chile&#39;s was considered a decent evening and people weren&#39;t so snobbish. Why&#39;s that poor gas station got to hustle their image so hard? Isn&#39;t being really damn good at fixing cars good enough?
              </Paragraph>
            </ParagraphHolder>
          </FlexRow>
          <FlexRow>
            <ParagraphHolder>
              <Paragraph>
                The surreallity of the place is a bit strange too. It&#39;s got a bit of a "Rome before the Fall" feel to it, as well. What I mean by that is that everyone does fun to excess in a way that seems extreme and irresponsible. Here&#39;s a story. I was walking home from downtown after a coding class and a car drives by with a blowup dummy in the passenger seat wearing a horsehead mask. An unrelated couple (one holding a lighting apparatus and another a high-def camera) step around some homeless people and take a picture of the man and car as it rounds the corner. I can&#39;t know for sure, but I think driver and photographers had no idea who each other were. A bit further on I come across a woman with a bike-cum-motorcycle stalled by the side of the road. I ask her if she&#39;s ok, and she says yes, before telling me, unsolicited, what year the bike was made. We were across the road from a gas station that 40 years ago might have been able to repair her bike. Today, it&#39;s been converted into a frou-frou brewery selling expensive beers. I&#39;ve got a couple friends who work there for their second job to make ends meet.
              </Paragraph>
            </ParagraphHolder>
          </FlexRow>
          <FlexRow>
            <ParagraphHolder>
              <Paragraph>
                That story sounds too good to be true. Like complete and utter bullshit. But it&#39;s not even that uncommon. The other day I was at a bar and the waiter offered my friend and I a beer called "clown shoes" and I couldn&#39;t tell if she was serious or not. She was.
              </Paragraph>
            </ParagraphHolder>
          </FlexRow>
          <br/>
          <FlexRow>
            <ImageResizeContainer percent={40}>
              <img style={styles.image80} src={require('../../../../public/clownshoesbeer.jpg')} />
            </ImageResizeContainer>
          </FlexRow>
          <FlexRow>
            <ParagraphSmall>Apparently this is a fucking thing.</ParagraphSmall><br/>
          </FlexRow>
          <br/>
          <FlexRow>
            <ParagraphHolder>
              <Paragraph>
                Austin seems like a place where a lot of good people are all trying their hardest to make it. But sometimes I wonder if it&#39;s working.
              </Paragraph>
            </ParagraphHolder>
          </FlexRow>
          <FlexRow>
            <SubHeader level={2}>WELCOME TO THE INTERWEBS</SubHeader><br/>
          </FlexRow>
          <FlexRow>
            <ImageResizeContainer percent={14}>
              <img style={styles.image80} src={require('../../../../public/jeninternet.gif')} />
            </ImageResizeContainer>
          </FlexRow>
          <FlexRow>
            <ParagraphHolder>
              <Paragraph>
                So, I think that I want to make a revolving section that is just a shout out to cool sites on the internet. I read somewhere, and the exact article escapes me, that most people spend like 90+% of their time on the same 3 or 4 sites. That is bad and you should feel bad. So in the spirit of openness and discovery I&#39;d like to share a couple sites that you should check out. Here&#39;s one that I find useful. It&#39;s this utility that allows you to find similar  <a href='http://www.literature-map.com/'>books</a>,  <a href='http://www.movie-map.com/'>movies</a>, and <a href='http://www.music-map'>music</a> to ones you already like. It puts them in a web with categories that are more similar closer to each other. The figure out what is most similar not by any kind of anaylitics on the art itself, but by correlating how often people click through to different items. So if you click to items that are further apart on the map it will log that they are more similar than they thought, and the next person will see them slightly closer together! I think this is super cool, and it&#39;s very useful if you are tying to find something fun to do.
              </Paragraph>
            </ParagraphHolder>
          </FlexRow>
          <FlexRow>
            <ParagraphHolder>
              <Paragraph>
                Also, check this shit out.
              </Paragraph>
            </ParagraphHolder>
          </FlexRow>
          <br/>
          <FlexRow>
            <video width="1000" height="600" controls>
              <source src={require('../../../../public/giphymagician.mov')}/>
              Your browser does not support the video tag.
            </video>
          </FlexRow>
          <br/>
          <FlexRow>
            <ParagraphHolder>
              <Paragraph>
                Apparently if you search for "trippy" on giphy you get this stoner magician who will wave his magic wand and make all the giphs turn into photographic negatives. Well done Imgur, I did not even know that was a thing.
              </Paragraph>
            </ParagraphHolder>
          </FlexRow>
          <FlexRow>
            <SubHeader level={3}>Choose Your Weapon</SubHeader><br/>
          </FlexRow>
          <br/>
          <FlexRow>
            <ImageResizeContainer percent={40}>
              <img style={styles.image80} src={require('../../../../public/robinhoodarrows.jpg')} />
            </ImageResizeContainer>
          </FlexRow>
          <br/>
          <FlexRow>
            <ParagraphHolder>
              <Paragraph>
                Austin is strange. I&#39;ve noticed that a lot of people are building dungeons and dragons character creators for projects (and by lots I mean I&#39;ve seen two different people/groups with the same idea, which to me, for something seemingly so specific strikes me as high). It seems like a cool beginner/intermediate project as each of the stats are either a base (ie a user input like strength) or a computed value (ie something that would use a multiple of strength and constitution to determine hitpoints; apologies if that is not exact I have low nerd cred). So it&#39;s basically a really big state machine which lends itself to doing very well in stateful programming languages.
              </Paragraph>
            </ParagraphHolder>
          </FlexRow>
          <FlexRow>
            <ParagraphHolder>
              <Paragraph>
                I&#39;m not sure I have the patience (or Dragon knowledge) to accomplish something quite that ambitious, however I did notice that there is a <a href="http://www.dnd5eapi.co/">DnD api</a>. If you couple a simple look up of the api, with a call to imgur for images, you can do something really neat.
              </Paragraph>
            </ParagraphHolder>
          </FlexRow>
          <br/>
          <DnDBigBox>
          {renderIf((this.state.equipmentModal===false)&&(this.state.characterModal===false))(
            <DnDWrap>
              <DnDContainer onClick={(e)=>this.changeCharacter(e)} style={styles.character}>
                {this.state.TitleArray[0]}
                <br/>
                {renderIf(this.state.ImageArray[0] != "")(
                  <img style={styles.imgSizeBig} src={this.state.ImageArray[0]}/>
                )}
              </DnDContainer>
              <EquipmentWrap>
                <DnDContainer onClick={(e)=>this.changeEquipment(e, 1)} style={styles.equipment}>
                      {this.state.TitleArray[1]}
                      <br/>
                      {renderIf(this.state.ImageArray[1] != "")(
                        <img style={styles.imgSize} src={this.state.ImageArray[1]}/>
                      )}
                </DnDContainer>
                <DnDContainer onClick={(e)=>this.changeEquipment(e, 2)} style={styles.equipmentClearLeft}>
                      {this.state.TitleArray[2]}
                      <br/>
                      {renderIf(this.state.ImageArray[2] != "")(
                        <img style={styles.imgSize} src={this.state.ImageArray[2]}/>
                      )}
                </DnDContainer>
                <DnDContainer onClick={(e)=>this.changeEquipment(e, 3)} style={styles.equipmentClearLeft}>
                      {this.state.TitleArray[3]}
                      <br/>
                      {renderIf(this.state.ImageArray[3] != "")(
                        <img style={styles.imgSize} src={this.state.ImageArray[3]}/>
                      )}
                </DnDContainer>
              </EquipmentWrap>
            </DnDWrap>
          )}
          {renderIf((this.state.equipmentModal===true))(
            <SelectorBox>
              <ListBox>
                {listEquipments}
                <br/>
              </ListBox>
              <SelectorButton onClick={(e)=>this.cancelChange(e)}>No Equipment</SelectorButton>
            </SelectorBox>
          )}
          {renderIf((this.state.characterModal===true))(
            <SelectorBox>
              <ListBox>
                {listClasses}
                <br/>
              </ListBox>
              <SelectorButton onClick={(e)=>this.cancelChange(e)}>No Class</SelectorButton>
            </SelectorBox>
          )}
          </DnDBigBox>
          <br/>
          <FlexRow>
            <ParagraphHolder>
              <Paragraph>
                There&#39;s a bunch of caveats I should add as well as a bit of explanation. The API that this uses is under active development, so it&#39;s not complete, but it does use a bunch of things that are pretty cool, like an explanation for a bunch of the items. It has much more than I&#39;ve demonstrated here, like a complete monster compendium, which is very sweet. For the images, I just use a simple pixabay image lookup, so sometimes the images are not perfect. For example, if you select the class "Fighter" you get a fighter jet! This is of course the problem with automation - you can either hard code all the images yourself and probably have to host them (sucky!), or you run the risk of getting not the best thing. This also turns out to be a problem with the image resolution which I found out after I had integrated pixabay - only searching for images that were the thin width of the character box narrowed the search results too much, so some images didn&#39;t show up. Pixabay is not the larges image catalog, but it&#39;s free. Google had one but they deprecated it in 2015. For shame Google! Anyway, "Computers! Doing stupid things very fast since 1970". For images that don&#39;t show up because the image search couldn&#39;t find them I substituted an image of a platypus (patientplatypus is my nom'de hack). This is a bit janky, but it should give some people a good idea of the cool things you can do with searching for images.
              </Paragraph>
            </ParagraphHolder>
          </FlexRow>

          <FlexRow>
            <SubHeader level={3}>And Now for Something Entirely Trippy</SubHeader>
          </FlexRow><br/>
          <FlexRow>
            <AlignContainer><img  src={require('../../../../public/spacemantrippy.gif')} />
              <ParagraphSmall>More cool pics from the same cat <a href="http://vufus.tumblr.com/archive">here</a></ParagraphSmall></AlignContainer><br/>
          </FlexRow><br/>

        </FlexContainer>
    )
  }
}

export default Posts2
