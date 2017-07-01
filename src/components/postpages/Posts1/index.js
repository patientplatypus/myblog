// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { Badge, IconButton, Heading, Paragraph, ParagraphHolder, PrimaryNavigation, SecondaryNavigation, TertiaryNavigation, Caption, Link, ParagraphSmall, AlignContainer, SubHeader} from 'components'
import renderIf from 'render-if'
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

const styles = {
  images: {
    maxWidth: "80%",
    marginBottom: "5px"
  },
  iframe: {
    border: "0",
    borderWidth: "0",
    width: "225",
    height: "200",
    borderRadius: "5px"
  },
  smoker:{
    maxHeight: "222px",
    marginRight: "10px",
    marginBottom: "5px"
  }
}

// const CaptionHolder = styled.div`
//   width: 100%;
// `
// Caption>shamelessly stolen from <a href="http://www.sickchirpse.com/dope-shots-49/">some clickhole</a></Caption>

const Posts1 = () => {
  return (
    <FlexContainer>
      <FlexRow>
        <Heading>Why Everything You Think Is Wrong and the World Is Bullshit</Heading>
      </FlexRow>
      <FlexRow>
        <PrimaryNavigation/>
      </FlexRow>
      <FlexRow>
        <TertiaryNavigation currentNav={1} latestNav={4}/>
      </FlexRow>
      <FlexRow>
      </FlexRow>
      <FlexRow>
        <SubHeader level={1}>Post Numero #1</SubHeader><br/>
      </FlexRow>
      <FlexRow>
        <SubHeader level={3}>Levity</SubHeader><br/>
      </FlexRow>
      <FlexRow>
        <img  src={require('../../../../public/alien-toilet.jpg')} />
      </FlexRow>
      <FlexRow>
        <ParagraphSmall>shamelessly stolen from <a href="http://www.sickchirpse.com/dope-shots-49/">some clickhole</a></ParagraphSmall><br/>
      </FlexRow>
      <FlexRow>
         <ParagraphHolder>
          <Paragraph>
            You wake up. The first thing you notice is a head full of regret and a lack of memories. As you open your eyes and feel the cold corrogated metal you&#39;re lying on you begin to piece together the shoestring of story you have from the night before. Or was it night? You&#39;re a space janitor left on the rotting hulk of some derelict orbitting some no name star in a backwater quadrant of the galaxy.
          </Paragraph>
        </ParagraphHolder>
      </FlexRow>
      <FlexRow>
        <ParagraphHolder>
          <Paragraph>
            Unfortunately, that derelict is my website and that backwater quadrant is whatever toilet you&#39;ve decided to read my sad blog on. (It&#39;s mobile responsive btw, you&#39;re welcome.) Can&#39;t help you with the hangover; you finding drinking mates is something you&#39;ll have to do on your own.
          </Paragraph>
        </ParagraphHolder>
      </FlexRow>
      <FlexRow>
        <br/><img  src={require('../../../../public/everyonepoops.jpg')} />
      </FlexRow>
      <FlexRow>
        <AlignContainer>
          <ParagraphSmall>Daily reminder that this author has impacted more lives than you ever will.</ParagraphSmall>
          <ParagraphSmall>Also, wait, wtf? Apples don&#39;t poop.</ParagraphSmall>
        </AlignContainer><br/>
      </FlexRow>
      <FlexRow>
        <ParagraphHolder>
          <Paragraph>
            Honestly I was trying to come up with some theme to go with the image of the alien on the toilet. Like I had a whole story planned out. Interactive game, movie tie ins. Merchandising rights. International distribution. I just really like this image of an alien taking a shit. Like, everybody poops, right? So even if it will dismember you, the scary alien still has to read something on the toilet. What do they think about I wonder?
          </Paragraph>
        </ParagraphHolder>
      </FlexRow>
      <FlexRow>
        <SubHeader level={3}>Lonely Warrior</SubHeader><br/>
      </FlexRow>
      <FlexRow>
            {renderIf(window.innerWidth<650)(
             <AlignContainer>
                <img style={styles.smoker} src={require('../../../../public/smokerprogrammer.jpeg')} />
                <img style={styles.smoker} src={require('../../../../public/200kprogrammer.jpeg')} />
             </AlignContainer>
           )}
           {renderIf(window.innerWidth>=650)(
             <div>
               <img style={styles.smoker} src={require('../../../../public/smokerprogrammer.jpeg')} />
               <img style={styles.smoker} src={require('../../../../public/200kprogrammer.jpeg')} />
             </div>
          )}
      </FlexRow>
      <FlexRow>
        <ParagraphHolder>
          <Paragraph>
            It seems to me that we&#39;ve recently gone through this weird culture shift. Remember the image of the kid on the left smoking in his mom&#39;s basement and just dicking around with computers? That guy used to be a loser. He was doing that rather than get a big boy job. Maybe he had friends, maybe he didn&#39;t, but you got the sense that if he had maybe a bit more going for him he would have been out doing something else. I can picture a lot of people in my head saying to me, "No, he has passion! He *loves* computers, he is pursuing his dreams". Perhaps. There is a sad stoicism in that face though. A noble suffering that seems to come from sitting in front of a computer that will tell him all day long "ERROR" until it doesn&#39;t and he can make the computer do something half-way respectable. Maybe "noble suffering" is the sort of sentiment that people would scoff at and think, "this guy, who does he think he is, how self important you got to be to use such embarassing words in public". But I think it applies. This picture always struck a cord with me and I have no idea where it comes from. In terms of art it evokes something incredibly soulful. If anyone has any more information on where this guy is from, please let me know.
          </Paragraph>
        </ParagraphHolder>
      </FlexRow>
      <FlexRow>
        <ParagraphHolder>
          <Paragraph>
            Fast forward to today and we have the picture on the right. Whereas before we had the noble sufferer who may have been made fun of for his looks or his inner problems we now have simple hedonism carried to excess. "Nerd culture" (ie that bloody <a href="https://en.wikipedia.org/wiki/Halo_effect)">halo effect</a>). They idealize the things that used to be liked but that sad guy in his mom&#39;s basement without really groking what he was all about. They realize that they were wrong in their assessment of what was cool and so blindly follow what they thought previously was uncool. Being unsocialiable must be cool! We must like all the media that the nerds used to like. We should do those things because then we too can be like our betters. And they do this not for the love of computers, but the love of money. I don&#39;t know who photoshopped the text blurb on top of the image, but it seems to summarize everything that I dislike. And I don&#39;t HATE it ~ it just doesn&#39;t inspire any emotion in me whatsoever and so can only be termed bad art. Maybe this guy programming in his underpants, in his heart, really is the passionate nobody, the loveable loser. But the text overlay for a cheap laugh just means absolutely nothing. A car add that screams "you too can make tons of money". And it makes me suspect my own motivations. Would I have started this if it weren&#39;t for the dream of one day having a stable living? Would I be able to continue doing this, day in and day out, if I did not truly love it? I want to be that silly fellow in plaid, that guy whose value transcends what other people see in him.
          </Paragraph>
        </ParagraphHolder>
      </FlexRow>
      <FlexRow>
        <ParagraphHolder>
          <Paragraph>
           I want this blog to aspire to that ideal - to be more than just a shitty blog. I want it to be a GREAT shitty blog. It&#39;s nostalgia for a time that I am too young to remember, when the web was called the internet. Sites were about posting goofy shit that maybe wasted some time or were funny. There wasn&#39;t a huge amount of interaction. It wasn&#39;t part of the gig economy. When the only people who said "pwn" were the dweebs that no one gave a shit about. People were doing it for the hell of it, to show something cool, even if they weren&#39;t out to change the world, and, more importantly, had no pretensions that they would. Why do we program it? Because it compiles. And if this makes no sense to you, or it seems that I am all over the place, you&#39;re probably right. I&#39;m still figuring this shit out, and I&#39;ve always had the habit of flying by the seat of my pants.
          </Paragraph>
        </ParagraphHolder>
      </FlexRow>
      <FlexRow>
        <SubHeader level={3}>Choose Your Weapon</SubHeader><br/>
      </FlexRow>
      <FlexRow>
        <AlignContainer>
          <img style={styles.images} src={require('../../../../public/ARcPng.png')}/>
        </AlignContainer>
      </FlexRow>

      <FlexRow>
        <ParagraphHolder>
          <Paragraph>
            I do want to say a little bit about what this site is made in, if anyone cares. I did it using a starter seed called ARc React which is super cool and damn near a library. What it does is that it uses something similar to <a href="https://www.styled-components.com/docs/basics#motivation">styled components</a> in order to build up small components into larger ones, in order to make your site as modular as possible. So you have a folder called "atoms" that has components like "Input" and "Label". Then you have a folder with more complicated components called "molecules", built on "atoms". And then one called "organisms" built on "molecules". In the organisms folder you would have components like "LoginModal" for example. It sounds complicated (and it is, a bit), but it *really* helps you stay more or less consistent with styling and bootstrapping a bigger project together quickly. I think it&#39;s nifty and you should too. <a href="https://arc.js.org/">Check it out.</a>
          </Paragraph>
        </ParagraphHolder>
      </FlexRow>
      <FlexRow>
        <ParagraphHolder>
          <Paragraph>
            FYI. In case you were wondering why there are placeholders for posts 2 through 4 it&#39;s because I had test the post navigation (i.e. next post, last post, etc.). Those posts are forthcoming, but clearly there isn&#39;t anything there yet. Another minor quibble I have is that I have no idea where the hell the favicon (the icon on the tab bar in the browser) is in the stack and I&#39;m having trouble ripping it out. Argh!
          </Paragraph>
        </ParagraphHolder>
        <ParagraphHolder>
          <Paragraph>
            Finally, take <a href="https://github.com/ajwhite/render-if">this</a>. It will save your life.
          </Paragraph>
        </ParagraphHolder>
      </FlexRow>
      <FlexRow>
        <SubHeader level={3}>Player 2 Has Entered The Game</SubHeader><br/>
      </FlexRow>
      <FlexRow>
        <iframe style={styles.iframe} src="http://meetu.ps/3bypQw"></iframe>
      </FlexRow>
      <FlexRow>
        <ParagraphHolder>
          <Paragraph>
            Here&#39;s a link to my meetup group that I am hosting this Monday (that would be July 3rd, 2017 for anyone from the future) in Austin. I know it&#39;s a holiday weekend, but I have nothing better going, and figure I would be programming anyway. If anyone would like to stop by and program together, or would like to learn how I made this blog, that would be really cool. For those who don&#39;t know an <a href="https://en.wikipedia.org/wiki/Anti-pattern">anti-pattern</a> is a term of art that describes common architecture mistakes people make when designing software. I have no idea what I&#39;m doing, so I thought it was a cool name for a group.
          </Paragraph>
        </ParagraphHolder>
      </FlexRow>
      <FlexRow>
        <ParagraphHolder>
          <Paragraph>
            There&#39;s also a cool sounding hackathon going on over at Galvanize over the July 8th weekend, if anyone is interested in going to that. I might check it out. It doesn&#39;t seem to have any kind of a theme, so maybe it will be a total shitshow, but who knows. You can find more information <a href="https://www.eventbrite.com/e/angelhack-global-hackathon-series-austin-tickets-32646343091?aff=es2">here.</a>
          </Paragraph>
        </ParagraphHolder>
      </FlexRow>
      <FlexRow>
        <SubHeader level={3}>And Now for Something Entirely Trippy</SubHeader><br/>
      </FlexRow>
      <FlexRow>
        <AlignContainer><img  src={require('../../../../public/mickeyacid.gif')} />
          <ParagraphSmall>He&#39;s only trying to distract from his lack of eyes   <a href="  http://rebloggy.com/post/love-trippy-disney-hippie-drugs-lsd-pot-mickey-mouse-acid-psychedelic-hookah/89548648337">sleep tight</a></ParagraphSmall></AlignContainer><br/>
      </FlexRow>
    </FlexContainer>
  )
}

export default Posts1
