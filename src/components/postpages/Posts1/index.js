// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { Badge, IconButton, Heading, Paragraph, PrimaryNavigation, SecondaryNavigation, TertiaryNavigation, Caption, Link, ParagraphSmall } from 'components'
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
        <img  src={require('../../../../public/alien-toilet.jpg')} />
      </FlexRow>
      <FlexRow>
        <ParagraphSmall>shamelessly stolen from <a href="http://www.sickchirpse.com/dope-shots-49/">some clickhole</a></ParagraphSmall>
      </FlexRow>
    </FlexContainer>
  )
}

export default Posts1
