import React, { useContext, useReducer} from 'react'
import AppContext, { defaultContext } from './constants/context.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import Header from './components/header/header.component.js'
import Home from './pages/home/home.component.js'
import About from './pages/about/about.component.js'
import Blog from './pages/blog/blog.component.js'
import Contact from './pages/contact/contact.component.js'
import LatestReleases from './pages/latest-releases/latest-releases.component.js'
import Podcast from './pages/podcast/podcast.component.js'
import './index.css'

const App = () => {
  const appContext = useContext(AppContext)
  const initialState = appContext.initialState
  const reducer = appContext.reducer
  const [state, dispatch] = useReducer(reducer, initialState)
  appContext.dispatch = dispatch

  return(
    <AppContext.Provider >
      <Router>
        {/*Header here*/}
        <Header />
        <Switch>

          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/home">
            <Redirect to="/" />
          </Route>

          <Route path="/about">
            <About/>
          </Route>

          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/latest-releases" >
            <LatestReleases />
          </Route>

          <Route path="/podcasts">
            <Podcast />
          </Route>

          <Route path='/'>
            <div>Page not found</div>
          </Route>

        </Switch>
        {/*Footer here*/}
      </Router>
    </AppContext.Provider>
  )
}

export default App