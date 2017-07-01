// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { Badge, IconButton, Heading, Paragraph, PrimaryNavigation, SecondaryNavigation, TertiaryNavigation, Posts4 } from 'components'
import styled from 'styled-components'
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

const PostsPage = () => {
  return (
    <FlexContainer>
      <FlexRow>
        <Posts4/>
      </FlexRow>
    </FlexContainer>
  )
}

export default PostsPage
