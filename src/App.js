import React, { useContext, useReducer } from 'react'
import AppContext, { defaultContext } from './constants/context.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import Header from './components/header/header.component.js'
import Footer from './components/footer/footer.component.js'
import Home from './pages/home/home.component.js'
import About from './pages/about/about.component.js'
import Blog from './pages/blog/blog.component.js'
import BlogDetail from './pages/blog-detail/blog-detail.component.js'
import TagResult from './pages/tags/tags.component.js'
import Contact from './pages/contact/contact.component.js'
import Library from './pages/Library/Library.component.js'
import Podcast from './pages/podcast/podcast.component.js'
import PodcastDetail from './pages/podcast-detail/podcast-detail.component.js'
import Legal from './pages/legal/legal.component.js'
import './index.css'

const App = () => {
  const appContext = useContext(AppContext)
  const initialState = appContext.initialState
  const reducer = appContext.reducer
  const [state, dispatch] = useReducer(reducer, initialState)
  appContext.dispatch = dispatch

  return (
    <AppContext.Provider >
      <Router>
        <Header />
        <Switch>

          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/home">
            <Redirect to="/" />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/blog-posts/:postID/" exact>
            <BlogDetail />
          </Route>

          <Route path="/tags/:tagName/:tagID/" exact>
            <TagResult />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/library" >
            <Library />
          </Route>

          <Route path="/podcasts">
            <Podcast />
          </Route>

          <Route path="/podcast-post/:postID/" exact>
            <PodcastDetail />
          </Route>

          <Route path="/legal">
            <Legal />
          </Route>

          <Route path='/'>
            <div>Page not found</div>
          </Route>

        </Switch>
        <Footer />
      </Router>
    </AppContext.Provider>
  )
}

export default App