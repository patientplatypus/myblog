// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component } from 'react'
import { Badge, Blockquote, IconButton, Heading, Paragraph, ParagraphHolder, PrimaryNavigation, SecondaryNavigation, TertiaryNavigation, Caption, Link, ParagraphSmall, AlignContainer, SubHeader, ImageResizeContainer} from 'components'
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
  flex-direction: row;
`

const FlexRowConvo = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const UlContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Hello = styled.div`
  color: tomato;
  max-width: 80px;
  background-color: blue;
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
  },
  ul: {
    listStyle: "none",
    padding: "0",
    display: "block",
    textAlign: "center"
  },
  li:{
    backgroundColor: "#4C3957",
    display: "inline-block",
    padding: "10px",
    margin: "3px",
  },
  litransparent:{
    backgroundColor: "transparent",
    textAlign: "center",
    padding: "10px",
    margin: "3px",
  }
}


class Posts3 extends Component{
  constructor(props){
    super(props);
    this.state = {}
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
              <TertiaryNavigation  currentNav={3} latestNav={4}/>
            </FlexRow>

            <FlexRow>
              <SubHeader level={1}>A PARTY & A PARTING</SubHeader>
            </FlexRow>
            <FlexRow>
              <SubHeader level={2}>PARTY EXHIBIT A)</SubHeader>
            </FlexRow>
            <br/>

            <FlexRow>
              <ImageResizeContainer percent={20}>
                <img style={styles.image80} src={require('../../../../public/historicalcannon.jpg')} />
              </ImageResizeContainer>
            </FlexRow>
            <br/>

            <FlexRow>
              <ParagraphHolder>
                <Paragraph>
                  Were I to live a thousand lifetimes I don&#39;t think that I&#39;ll ever understand people. I was at a party the other night for fourth of July. A new friend that I had met after moving here invited me and he had a large barbecue over at his place with a bunch of his college friends, myself and a few others. The neighbors from next door were there, generally a good crowd. The food was in no short supply and the beers were cheap and of seemingly infinite stock. Hard to go wrong with that and I had a generally good time.
                </Paragraph>
              </ParagraphHolder>
            </FlexRow>

            <FlexRow>
              <ParagraphHolder>
                <Paragraph>
                  Unfortunately I&#39;m not the best at parties. I&#39;m entirely capable of dealing with perhaps four or five people all standing around in a circle, with maybe two or three having a loose connection and the rest rather quickly bored with standing around in a circle. This is what people generally do at these things, often with a beer in hand to loosen ones wits enough to not care what&#39;s said. This is ideal as the talker is less self conscious and the listener, at worst, still has his beer.
                </Paragraph>
              </ParagraphHolder>
            </FlexRow>

            <FlexRow>
              <ParagraphHolder>
                <Paragraph>
                 In the early stages the trick is simply one of simple mathematics. If it is quiet enough one person will tell a story, people will be entertained for a bit and then around the circle another person will attempt to say something and so on and so forth. If it becomes louder you simply have to find the one person in the group who is bored as they are not talking with anyone (in my case it is usually the person in my immediate vicinity that I&#39;m boring). Bearing in mind that only two people can speak to each other at the same time its rather simple. If the group is even then everyone will have a partner, if it is odd then you or another will perpetually be the odd man out.
                </Paragraph>
              </ParagraphHolder>
            </FlexRow>

            <FlexRow>
              <ParagraphHolder>
                <Paragraph>
                 More people then arrive and the situation starts to shift. Groups will naturally break into smaller clusters as not everyone can stand in one large n man circle and shout stories at one another. Were this possible it would be ideal, but unfortunately your voice begins to get hoarse and it just doesn&#39;t seem to be the done thing. I really can see the benefits of this sort of arrangement personally, but social rules of this magnitude seem like forces of nature and not to be trifled with. I have a feeling that if it were ever tried it would quickly catch on, but it would seem difficult to be the one to broach the subject at such a socially challenging situation as a party.
                </Paragraph>
              </ParagraphHolder>
            </FlexRow>

            <FlexRow>
              <ParagraphHolder>
                <Paragraph>
                  Of course there is the added informational nature of such gatherings as each of our particles of course comes in with its own set of information. No sorting algorithm would be possible if all people were always the same everywhere, wore the same clothes, had the same set of things to say (at least none of the parties I&#39;ve been to have been that boring, but DC came close). So people naturally gravitate to those who are the most interesting by virtue of past affiliation.
                </Paragraph>
              </ParagraphHolder>
            </FlexRow>

            <FlexRow>
              <ParagraphHolder>
                <Paragraph>
                 There are those that hold that being the loudest talker or being the coolest, or have the most interesting things to say will make you popular at parties, but in all my experience I&#39;ve never seen this to be the case. Being the loudest talker means you will gravitate to larger circles in order to talk to the most people at once, but of course what most people in those situations are really doing is waiting around so they can say something. The price of attention is often having to listen to the loudest talker, and often these groups evaporate.
                </Paragraph>
              </ParagraphHolder>
            </FlexRow>

            <FlexRow>
              <ParagraphHolder>
                <Paragraph>
                 On the other hand being particularly attractive (in the broadest sense of attracting other people) doesn&#39;t seem advantageous either for any number of reasons. But primarily because your attractiveness attracts those attracted to you but who are not (as) attractive themselves. When people are all the same enough in those differences that are on the surface what most people are either attracted or repelled by (money, sex, similar interests) they can get down to discussing the important things and stop reiterating gross differences in themselves. So, just like the “music kids” are over there and then “wealthy people” are over here and so fourth, simply to get past simpletons continually asking the equivalent of “you&#39;re so different than me, what&#39;s that even like?”
                </Paragraph>
              </ParagraphHolder>
            </FlexRow>

            <FlexRow>
              <ParagraphHolder>
                <Paragraph>
                  A good party most broadly speaking then has attractive people (but not too attractive), a good mix interests and shared experience that will group people together (although no division of groups so strongly done as to provide no mixing between groups), and a rather endless supply of food (specifically barbecue and whatever local custom dictates are the inebriates of choice).
                </Paragraph>
              </ParagraphHolder>
            </FlexRow>

            <FlexRow>
              <ParagraphHolder>
                <Paragraph>
                  All this of course is the party in its most basic form with none of the extra caveats and situations (the “classical party” if you will). Once the alcohol has kicked in the excited state of the social fluid becomes more viscous. The rate of group switching becomes more frequent and the conversations more serious. Music is sometimes employed with can lead to louder conversations with fewer people, everyone shouting banalities to on another, or it can, in the most extreme and unfortunate of cases, lead to dancing. At this stage of the evening usually everyone is quite drunk and will not remember the night afterwards, so dancing may be attempted, doubly so if others have also danced first, but have done so in no way which would imply that social standing is at stake. Modern cell phones, have, of course, complicated this analysis.
                </Paragraph>
              </ParagraphHolder>
            </FlexRow>

            <FlexRow>
              <ParagraphHolder>
                <Paragraph>
                  None of this is to say of things like n-man switching when 2 or more people will break off to form there own group. Or gossip and all the sorts of ramifications that that can have. It would be quite fascinating to see a real time break down of how a rumor crossed a room during a party as it traveled from group to group.
                </Paragraph>
              </ParagraphHolder>
            </FlexRow>

            <FlexRow>
              <ParagraphHolder>
                <Paragraph>
                 This is good as far as it goes, but its quite like analyzing the flight of birds. We can map out all of the physics of the operation on a white board and have many pretty pictures to show for it, but no matter how hard we flap our arms we will never fly. There is some fundamentalness to this problem of action vs. knowledge that probably goes all the way back to the Buddha. For myself, I usually follow the following trajectory:
                </Paragraph>
              </ParagraphHolder>
            </FlexRow>

            <UlContainer>
                  <ul style={styles.ul}>
                    <li style={styles.li}>
                      <ParagraphHolder>
                        <Paragraph>
                          Find a group
                        </Paragraph>
                      </ParagraphHolder>
                    </li>
                    <li style={styles.li}>
                      <ParagraphHolder>
                        <Paragraph>
                          Realize I have little in common
                        </Paragraph>
                      </ParagraphHolder>
                    </li>
                    <li style={styles.li}>
                      <ParagraphHolder>
                        <Paragraph>
                         Drink
                        </Paragraph>
                      </ParagraphHolder>
                    </li>
                    <li style={styles.li}>
                      <ParagraphHolder>
                        <Paragraph>
                         Increase Speed & Loop
                        </Paragraph>
                      </ParagraphHolder>
                    </li>
                  </ul>
            </UlContainer>

            <FlexRow>
              <ParagraphHolder>
                <Paragraph>
                The stopping condition of course is either I quickly approach the speed of light, or I&#39;ve drunk all the beer in the entire universe. This usually happens right around the time the first guest is looking at their watch and saying “perhaps I&#39;d head out”, which is hastened by the creation of a small singularity between groups “Friends of the host from out of Town” and “Friends of the host from that one night at Grad School”.
                </Paragraph>
              </ParagraphHolder>
            </FlexRow>

            <FlexRow>
              <ParagraphHolder>
                <Paragraph>
                Conversation at one of these so-called “mixers” is always a mine field. It is easy to find yourself in a situation where you don&#39;t know what to say, usually because people generally aren&#39;t all that interesting and all want more or less the same thing (money, admiration of their peers, not to be bored, etc.) or conversely, again, are so totally different as not to be able to relate at all. Thankfully almost all conversations follow along rather conventional guidelines where the broad points are always the same.
                </Paragraph>
              </ParagraphHolder>
            </FlexRow>

            <FlexRow>
              <SubHeader level={2}>ANATOMY OF A CONVERSATION</SubHeader>
            </FlexRow>
            <br/>

              <UlContainer>
                  <ul style={styles.ul}>
                    <li style={styles.li}>
                      <ParagraphHolder>
                        <Paragraph>
                          Finding an appropriate group of an odd number of people. 3 is typically best I&#39;ve found.
                        </Paragraph>
                      </ParagraphHolder>
                    </li>
                    <li style={styles.li}>
                      <ParagraphHolder>
                        <Paragraph>
                          Open with a statement of greeting. I&#39;m fond of “Hey how&#39;s it going.” Or “I thought I would see what&#39;s going on over here”. Immediate reactions are important. If conversation stops or lags inappropriately, it&#39;s clear that you&#39;ve stumbled into enemy territory and your first instinct will be to beat a hasty retreat! Don&#39;t! If you act awkward among this group, some of those people may transfer to another group you will meet later in the evening. Rather you must stick it out for at least half a dozen moments (a moment generally being 3 and 1/2 seconds) and see if the tide turns. After that you may safely make your exit.
                        </Paragraph>
                      </ParagraphHolder>
                    </li>
                    <li style={styles.li}>
                      <ParagraphHolder>
                        <Paragraph>
                         The conversation proper begins when you must talk one on one with a member of the group for the first time. Hopefully you have said something appropriately sympathetic, witty, or otherwise engaging to “break the ice” so to speak, but you&#39;re only truly in trouble if you have said something that leaves an uncomfortable silence. Your best bet then would be to pray for a sweet merciful death preferably by lightening or other natural force for which you, and your guests, can be held blameless. If the host of the party is forced to kill you that would look particularly bad for everyone involved and you may not be invited back a second time.
                        </Paragraph>
                      </ParagraphHolder>
                    </li>
                    <li style={styles.li}>
                      <ul style={styles.ul}>

                        <li style={styles.li}>
                          <ParagraphHolder>
                            <Paragraph>
                            If you were foolish enough to not greet them on entry into the party (or worse the party had grown too large) you 	must ask their name and shake their hand. Do this as quickly as physically possible and avoid direct eye contact as 	in large untamed animals this may be mistaken for a sign of aggression. Likewise avoid barring your teeth and really 	doing much opening of your mouth at all.
                            </Paragraph>
                          </ParagraphHolder>
                        </li>

                        <li style={styles.li}>
                          <ParagraphHolder>
                            <Paragraph>
                              So how do you know people?  Here you try and ask about group affiliation and see if you have any matching groups. From there the conversation will organically evolve in that direction. I have personally never gotten to this stage, but I hear that it&#39;s ideal.
                            </Paragraph>
                          </ParagraphHolder>
                        </li>

                        <li style={styles.li}>
                          <ParagraphHolder>
                            <Paragraph>
                            What do you do or what are you into? Now we are treading on dangerous waters. What do you do is often the white 	man&#39;s stand in for “how much money do you make”. Remember that if this is important to you in any real sense you are	a boring person and would be better off not at parties.
                            </Paragraph>
                          </ParagraphHolder>
                        </li>

                        <li style={styles.li}>
                          <ParagraphHolder>
                            <Paragraph>
                            At this point you have established a report and can relax and enjoy a pleasant conversation with your fellow 	human person. Or if you are me, you are completely out of your element.  You can attempt to be witty, but just 		remember that you are now no longer making any real connection with this person, but simply acting the fool.
                            </Paragraph>
                          </ParagraphHolder>
                        </li>

                        <li style={styles.li}>
                          <ParagraphHolder>
                            <Paragraph>
                            Thankfully in a brief twilight of the evening, when the sun is slightly passed its zenith and the inebriates have 	increased their hold on the party goers, who have subsequently relaxed their hold on their inhibitions, we reach 	what is commonly known as the “philosopher stage”. Our opinions are no longer held in check by social inhibition and 	argument is finally possible. In polite society argument is relegated to the politicians who unfortunately have 	enough experience at the art not to kill each other (usually, although one can see how we might all be better off). 	As I&#39;ve always held ideas in higher regard than human beings (they can be entertained without having to entertain, 	which is always much less exhausting) here for a brief moment I can shine.
                            </Paragraph>
                          </ParagraphHolder>
                        </li>

                      </ul>
                    </li>
                  </ul>

            </UlContainer>


            <FlexRow>
              <ParagraphHolder>
                <Paragraph>
                  One such conversation I had with a good friend was on the nature of parties, people, life the universe, and how the hell to get a little moolah, as the cool cats say these days. Such conversations are of course completely enlightening if you&#39;re both equally looking to make it for whatever it is. My friend is much wiser than me, and maybe one of my only readers, so with his permission, I have reproduced the gist to the best my poor memory allows.
                </Paragraph>
              </ParagraphHolder>
            </FlexRow>


            <br/><br/>
            <FlexRow>
              <ImageResizeContainer percent={20}>
                <img style={styles.image80} src={require('../../../../public/victoriangentlemen.jpg')} />
              </ImageResizeContainer>
            </FlexRow>

                  <ul style={styles.ul}>
                    <li style={styles.litransparent}>
                      <FlexRowConvo>
                        <FlexLeft>
                          <ParagraphHolder>
                            <Paragraph>
                               You&#39;ve got to get better at talking with people at parties.
                            </Paragraph>
                          </ParagraphHolder>
                        </FlexLeft>
                        <FlexSpace></FlexSpace>
                      </FlexRowConvo>
                    </li>
                    <li style={styles.litransparent}>
                      <FlexRowConvo>
                          <FlexSpace></FlexSpace>
                          <FlexRight>
                            <ParagraphHolder>
                              <Paragraph>
                                Yeah, I know, I just suck at it. How was that project you were working on with Our Host? [This being a project 	that my friend, in the most expansive of entrepreneurial spirit thinks will Generate Interest with People On-High]
                              </Paragraph>
                            </ParagraphHolder>
                          </FlexRight>
                      </FlexRowConvo>
                    </li>
                    <li style={styles.litransparent}>
                      <FlexRowConvo>
                        <FlexLeft>
                          <ParagraphHolder>
                            <Paragraph>
                               Oh, I think it&#39;s going well. I haven&#39;t worked on it for a week or so as I&#39;ve been Upstate pitching the idea to 	some potential investors. Of course my main project is super secret, but to everyone I&#39;ve spoken to about that in 	particular there has been a GREAT deal of interest. The project that I have been working on publicly I do not care 	so much of. These old fellows with money though, you would think that they would be a bit stodgy and “old school” but if they hear a pitch that would make them money they are all over it.
                            </Paragraph>
                          </ParagraphHolder>
                        </FlexLeft>
                        <FlexSpace></FlexSpace>
                      </FlexRowConvo>
                    </li>
                    <li style={styles.litransparent}>
                      <FlexRowConvo>
                          <FlexSpace></FlexSpace>
                          <FlexRight>
                            <ParagraphHolder>
                              <Paragraph>
                         	      That&#39;s pretty exciting. Myself I am only trying to get a job that will give a paycheck, not sure if I have as much of your spirit old boy.
                                </Paragraph>
                              </ParagraphHolder>
                            </FlexRight>
                        </FlexRowConvo>
                    </li>
                    <li style={styles.litransparent}>
                      <FlexRowConvo>
                        <FlexLeft>
                          <ParagraphHolder>
                            <Paragraph>
                               Well how goes it.
                            </Paragraph>
                          </ParagraphHolder>
                        </FlexLeft>
                        <FlexSpace></FlexSpace>
                      </FlexRowConvo>
                    </li>
                    <li style={styles.litransparent}>
                      <FlexRowConvo>
                          <FlexSpace></FlexSpace>
                          <FlexRight>
                            <ParagraphHolder>
                              <Paragraph>
                                Not so well. I have yet to hear back from anyone.
                              </Paragraph>
                            </ParagraphHolder>
                          </FlexRight>
                      </FlexRowConvo>
                    </li>
                    <li style={styles.litransparent}>
                      <FlexRowConvo>
                        <FlexLeft>
                          <ParagraphHolder>
                            <Paragraph>
                               (Sigh) It&#39;s about who you know rather than raw talent. Others with clearly less ability than yourself have gotten work, as they got along better with other people. Raw coding talent is not the prerequisite for the job. For myself, I have to be personable. Ideas are a dime a dozen, it&#39;s about who you know.
                            </Paragraph>
                          </ParagraphHolder>
                        </FlexLeft>
                        <FlexSpace></FlexSpace>
                      </FlexRowConvo>
                    </li>
                    <li style={styles.litransparent}>
                      <FlexRowConvo>
                          <FlexSpace></FlexSpace>
                          <FlexRight>
                            <ParagraphHolder>
                              <Paragraph>
                              I don&#39;t know if I like playing that game. Shouldn&#39;t you be friends with someone because you…like them? To be friends with someone because they could help you in the future (or in the present for that matter) sounds a bit shady.
                            </Paragraph>
                            </ParagraphHolder>
                          </FlexRight>
                      </FlexRowConvo>
                    </li>
                    <li style={styles.litransparent}>
                    <FlexRowConvo>
                      <FlexLeft>
                        <ParagraphHolder>
                          <Paragraph>
                             You always say this, and you can&#39;t think of life this way! Of course you are friends with other people because you like them, and is it not natural that friends would help each other out?
                        </Paragraph>
                      </ParagraphHolder>
                    </FlexLeft>
                    <FlexSpace></FlexSpace>
                  </FlexRowConvo>
                    </li>
                    <li style={styles.litransparent}>
                      <FlexRowConvo>
                          <FlexSpace></FlexSpace>
                          <FlexRight>
                            <ParagraphHolder>
                              <Paragraph>
                                Yes, but should the job not go to those best able to do it? Shouldn&#39;t merit for the work itself be the only prerequisite for the job. I agree that if an employer or company can not stand the candidate personally that should be a disqualifying attribute, but it hardly seems like a qualifying one.
                                </Paragraph>
                                </ParagraphHolder>
                              </FlexRight>
                          </FlexRowConvo>
                    </li>

                    <li style={styles.litransparent}>
                    <FlexRowConvo>
                      <FlexLeft>
                        <ParagraphHolder>
                          <Paragraph>
                             Always the idealist, and how far has that gotten you? You must act as the world is, and not as you wish the world would be, from your naive philosophy. And who are you to say that you know better than the world? Is that not grossly egotistical? Listen to this music [there was a speaker playing near us]. Personally I do not care for it, but many people like it a great deal. Do you think that this is the best music that could be played from out of all the people who make music? No! I bet there were a 100 different artists that are much better who could be playing right now. But that is largely based on my perspective. This artist merely happened to be good enough and knew the producer?
                          </Paragraph>
                        </ParagraphHolder>
                      </FlexLeft>
                    <FlexSpace></FlexSpace>
                      </FlexRowConvo>
                    </li>


                    <li style={styles.litransparent}>
                    <FlexRowConvo>
                        <FlexSpace></FlexSpace>
                        <FlexRight>
                          <ParagraphHolder>
                            <Paragraph>
                              But surely if there were a 100 candidates for a programming position you would choose the   best one, right?
                              </Paragraph>
                              </ParagraphHolder>
                            </FlexRight>
                        </FlexRowConvo>
                    </li>

                    <li style={styles.litransparent}>
                    <FlexRowConvo>
                      <FlexLeft>
                        <ParagraphHolder>
                          <Paragraph>
                         Best on what criteria? You&#39;ll choose the guy you like the best, with coding being only a small part of it. Life is like a ladder, it&#39;s only natural that you will want to pull those up that are beneath you, and people like helping others out, it&#39;s part of the human condition. When you&#39;re on rung 0 and the guy above you is on rung 2 you&#39;ll need a helping hand to have someone pull you up. But it will be like that your entire life. The guy on rung 8 doesn&#39;t get to rung 9 or 10 without the help of someone who came before him. It simply doesn&#39;t work that way.
                        </Paragraph>
                      </ParagraphHolder>
                    </FlexLeft>
                    <FlexSpace></FlexSpace>
                      </FlexRowConvo>
                    </li>

                    <li style={styles.litransparent}>
                    <FlexRowConvo>
                        <FlexSpace></FlexSpace>
                        <FlexRight>
                          <ParagraphHolder>
                            <Paragraph>
                          What about for building bridges? Surely, if the guy is chosen that is the best friend of the previous bridge builder, surely the bridge will eventually fall into disrepair.
                          </Paragraph>
                          </ParagraphHolder>
                        </FlexRight>
                    </FlexRowConvo>
                    </li>

                    <li style={styles.litransparent}>
                    <FlexRowConvo>
                      <FlexLeft>
                        <ParagraphHolder>
                          <Paragraph>
                           [Shaking his head sadly] You believe that the world is a meritocracy, but it is not. The sooner you realize that, the better off you will be.
                          </Paragraph>
                        </ParagraphHolder>
                      </FlexLeft>
                      <FlexSpace></FlexSpace>
                        </FlexRowConvo>
                    </li>
                  </ul>



            <FlexRow>
              <ParagraphHolder>
                <Paragraph>
                I&#39;m not sure that my friend had a good answer to the bridge question, but I can see his point. If there are a thousand candidates for building a bridge and 100 are all equally good, then it may be a perfectly legitimate strategy to hire the cousin of your third wife&#39;s college roommate&#39;s cousin, or just that guy who can make interesting conversation around the bar. We are probably at the point in society where there are simply more people than jobs, so only the sexiest, most connected, most funny, or otherwise “cool” people will be able to afford to eat. As automation gets worse and more people keep getting born every day, the world can only rot on the vine. Talent of course is necessary, but by not means sufficient.
                </Paragraph>
              </ParagraphHolder>
            </FlexRow>

            <FlexRow>
              <ParagraphHolder>
                <Paragraph>
                As for my naivete, I was too good a student maybe. I always believed those sayings that were printed along the walls of our high school. “Be the Change You Want to See In the World”. Other variations of “work hard, and you will succeed”. Rarely if ever did I see an inspiring quote that went along the lines of “Drink with People Who are More Important and Powerful than You”. Not to say that these are bad principles per se, but I feel a bit cheated and lied to, to earnest in thinking that what I was told was something that I should hold as a guiding star. Were someone to sit me down and say “Kid, you need to get good at people and get them to give you money” I would have taken it as good advice and followed it early on. Virtues, as the man said, are the more virtuous for being held in high regard in other people. Luckily, on reports of a previous classmate who went back to visit, most of those old sayings are covered by very expensive LCD screens and the building looks much richer and more prosperous, so at the very least they are teaching today&#39;s children better than they taught me.
                </Paragraph>
              </ParagraphHolder>
            </FlexRow>


            <FlexRow>
              <ParagraphHolder>
                <Paragraph>
                  But ah well, such ruminations are ultimately futile. In order to generate a general principle from the highly specific circumstances of our own lives would require the assumption that the entirety of the knowledge of the universe could be somehow compressed in a space shy of 100 years. Who can say for sure what is or what should be, and on what basis should our should&#39;s should? On some random definition of our own beauty?
                </Paragraph>
              </ParagraphHolder>
            </FlexRow>


            <FlexRow>
              <ParagraphHolder>
                <Paragraph>
                  I have always thought that books are poison for those who have not lived long enough, and often those that only read have never lived at all. But I think that most things in life that are worth writing down have already been written by someone much smarter than I. Sometimes I read a book and I will realize that the author is quite psychic, even (especially!) if they are distinguished enough to be old and dead, and have managed to express in words what I did not realize that I already knew. Here is an excerpt from one such <a href='http://www.gutenberg.org/files/308/308-h/308-h.htm'>book</a>.
                </Paragraph>
              </ParagraphHolder>
            </FlexRow>

            <FlexRow>
              <ImageResizeContainer percent={15}>
                <img style={styles.image80} src={require('../../../../public/dividerlilly.png')} />
              </ImageResizeContainer>
            </FlexRow>

            <FlexRow>
              <ParagraphHolder>
                <Paragraph>
                  <Blockquote>
                    George comes out really quite sensible at times.  You&#39;d be surprised.  I call that downright wisdom, not merely as regards the present case, but with reference to our trip up the river of life, generally.  How many people, on that voyage, load up the boat till it is ever in danger of swamping with a store of foolish things which they think essential to the pleasure and comfort of the trip, but which are really only useless lumber.
                    </Blockquote>
                </Paragraph>
              </ParagraphHolder>
            </FlexRow>

            <FlexRow>
              <ParagraphHolder>
                <Paragraph>
                  <Blockquote>
                  How they pile the poor little craft mast-high with fine clothes and big houses; with useless servants, and a host of swell friends that do not care twopence for them, and that they do not care three ha&#39;pence for; with expensive entertainments that nobody enjoys, with formalities and fashions, with pretence and ostentation, and with-oh, heaviest, maddest lumber of all!-the dread of what will my neighbour think, with luxuries that only cloy, with pleasures that bore, with empty show that, like the criminal&#39;s iron crown of yore, makes to bleed and swoon the aching head that wears it!
                  </Blockquote>
                </Paragraph>
              </ParagraphHolder>
            </FlexRow>

            <FlexRow>
              <ParagraphHolder>
                <Paragraph>
                  <Blockquote>
                  It is lumber, man-all lumber!  Throw it overboard.  It makes the boat so heavy to pull, you nearly faint at the oars.  It makes it so cumbersome and dangerous to manage, you never know a moment&#39;s freedom from anxiety and care, never gain a moment&#39;s rest for dreamy laziness-no time to watch the windy shadows skimming lightly o&#39;er the shallows, or the glittering sunbeams flitting in and out among the ripples, or the great trees by the margin looking down at their own image, or the woods all green and golden, or the lilies white and yellow, or the sombre-waving rushes, or the sedges, or the orchis, or the blue forget-me-nots.
                    </Blockquote>
                </Paragraph>
              </ParagraphHolder>
            </FlexRow>

            <FlexRow>
              <ParagraphHolder>
                <Paragraph>
                  <Blockquote>
                Throw the lumber over, man!  Let your boat of life be light, packed with only what you need-a homely home and simple pleasures, one or two friends, worth the name, someone to love and someone to love you, a cat, a dog, and a pipe or two, enough to eat and enough to wear, and a little more than enough to drink; for thirst is a dangerous thing.
                    </Blockquote>
                </Paragraph>
              </ParagraphHolder>
            </FlexRow>

            <FlexRow>
              <ImageResizeContainer percent={15}>
                <img style={styles.image80} src={require('../../../../public/dividerlilly.png')} />
              </ImageResizeContainer>
            </FlexRow>

            <FlexRow>
              <ParagraphHolder>
                <Paragraph>
                  In the end, none of this was of any particular importance. What was most important were the things that could not be said in words. About sharing time with other people on a rooftop watching illegal fireworks. On good food shared among friends in a new city that I am slowly growing accustomed.
                </Paragraph>
              </ParagraphHolder>
            </FlexRow>

            <FlexRow>
              <SubHeader level={3}>And Now for Something Entirely Trippy</SubHeader>
            </FlexRow><br/>
            <FlexRow>
              <AlignContainer><img  src={require('../../../../public/carhead.gif')} />
                <ParagraphSmall>The source of the trip is <a href="https://media.giphy.com/media/xUPGcM5OdHORP1JOzS/giphy.gif">here</a></ParagraphSmall></AlignContainer><br/>
            </FlexRow><br/>
          </FlexContainer>
    )
  }
}

// const Posts3 = () => {
//   return (
//     <FlexContainer>
//       <FlexRow>
//         <Heading>Why Everything You Think Is Wrong and the World Is Bullshit</Heading>
//       </FlexRow>
//       <FlexRow>
//         <PrimaryNavigation/>
//       </FlexRow>
//       <FlexRow>
//         <TertiaryNavigation  currentNav={3} latestNav={4}/>
//       </FlexRow>
//       <FlexRow>
//         <ParagraphHolder><Paragraph> Placeholder for posts3 </Paragraph></ParagraphHolder>
//       </FlexRow>
//     </FlexContainer>
//   )
// }

export default Posts3
