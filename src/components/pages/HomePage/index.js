// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { Badge, IconButton, Heading, Paragraph, PrimaryNavigation } from 'components'
import styled from 'styled-components'
import renderIf from 'render-if';

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
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 1px;
  padding-bottom: 15px;
  border-radius: 10px;
`

const HomePage = () => {
  return (
    <FlexContainer>
      <FlexRow>
        <Heading>Why Everything You Think Is Wrong and the World Is Bullshit</Heading>
      </FlexRow>
      <FlexRow>
        <PrimaryNavigation/>
      </FlexRow>
      <FlexRow>
        <ParagraphHolder>
          <Paragraph>
            Here is my blog. I am unemployed, desparately trying to learn to program like all the other suckers out there. Proud colonel in the reserve army of labor reporting in. In a bid to show how cool I am so that I can get a job (maybe hopefully one day soon) I will be writing this super lame blog about all the possible things I can think up. It will hopefully start looking less like refried dogshit after I have worked on it a bit. I will answer any and all user submitted questions as I feel like it (or don&#39;t). Stay tuned boys and girls, friends of all ages.
            </Paragraph>
          </ParagraphHolder>
      </FlexRow>
      <FlexRow>
        <ParagraphHolder>
          <Paragraph>
            If you came here looking for my portfolio, well...I got bored with hosting something that is boring. I&#39;v got the spare time and scratch to host one site and so I&#39;ve got to make something to entertain, however poorly I&#39;m able. So sorry, not sorry.
          </Paragraph>
        </ParagraphHolder>
      </FlexRow>
      <FlexRow>
        <ParagraphHolder>
          <Paragraph>
            When I&#39;m rich and famous I will point to the following sites as early influences of my genius. I hope against hope that linking to these much cooler sites will push my poor page to the top of the google search results index so someone will throw money at me.<br/>
            <a href='maddox.xmission.com'>The Second Best Page in the Universe</a><br/>
            <a href='http://xkcd.com'>Some kid that draws stick figures</a><br/>
            <a href='http://www.zombo.com/'>The only thing on the internet that makes any damn sense</a>
          </Paragraph>
        </ParagraphHolder>
      </FlexRow>
    </FlexContainer>
  )
}

export default HomePage
