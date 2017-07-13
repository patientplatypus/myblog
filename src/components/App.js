import React from 'react'
import { Switch, Route,  BrowserRouter as Router } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'

import { HomePage, AboutPage, PictureSwapper, PostsPage, Posts1, Posts2, Posts3, Posts4, PostsArchive, MessagePage } from 'components'
import PictureMain from './pages/picturepages/PictureMain'

import createHistory from 'history/createBrowserHistory'

const history = createHistory()

import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
        <Route path="/" component={Posts3} exact />
        <Route path="/picturemain" component={PictureMain} exact />
        <Route path="/home" component={HomePage} exact />
        <Route path="/about" component={AboutPage} exact />
        <Route path="/posts" component={PostsPage} exact />
        <Route path="/pictureswapper" component={PictureSwapper} exact />
        <Route path="/message" component={MessagePage} exact />
        <Route path="/postpages/1" component={Posts1} exact />
        <Route path="/postpages/2" component={Posts2} exact />
        <Route path="/postpages/3" component={Posts3} exact />
        <Route path="/postpages/4" component={Posts4} exact />
        <Route path="/postsarchive" component={PostsArchive} exact />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
