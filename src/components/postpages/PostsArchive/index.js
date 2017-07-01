// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { Badge, IconButton, Heading, Paragraph, PrimaryNavigation, SecondaryNavigation, TertiaryNavigation } from 'components'
import styled from 'styled-components'
import { Link } from 'components'

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

const PostsArchive = () => {
  return (
    <FlexContainer>
      <FlexRow>
        <Heading>Why Everything You Think Is Wrong and the World Is Bullshit</Heading>
      </FlexRow>
      <FlexRow>
        <PrimaryNavigation/>
      </FlexRow>
      <FlexRow>
        <li><Link to="/postpages/1" exact activeClassName="active">Post 1</Link></li>
      </FlexRow>
      <FlexRow>
        <li><Link to="/postpages/2" exact activeClassName="active">Post 2</Link></li>
      </FlexRow>
      <FlexRow>
        <li><Link to="/postpages/3" exact activeClassName="active">Post 3</Link></li>
      </FlexRow>
      <FlexRow>
        <li><Link to="/postpages/4" exact activeClassName="active">Post 4</Link></li>
      </FlexRow>
    </FlexContainer>
  )
}

export default PostsArchive
