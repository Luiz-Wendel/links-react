import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/sign-in'>Sign in</Link>
              <Link to='/sign-up'>Sign up</Link>
              <Link to='/manage/links/create'>Create Link</Link>
              <Link to='/manage/links/edit'>Edit Link</Link>
              <Link to='/manage/links'>Links</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/'>
            <h1>Home</h1>
          </Route>
          <Route exact path='/home'>
            <h1>Home</h1>
          </Route>
          <Route exact path='/sign-in'>
            <h1>Sign In</h1>
          </Route>
          <Route exact path='/sign-up'>
            <h1>Sign Up</h1>
          </Route>
          <Route exact path='/manage/links/create'>
            <h1>Create Link</h1>
          </Route>
          <Route exact path='/manage/links/edit'>
            <h1>Edit Link</h1>
          </Route>
          <Route exact path='/manage/links'>
            <h1>Links</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
