import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ManageLinks from './pages/Manage/Links'
import CreateLink from './pages/Manage/Create'
import EditLink from './pages/Manage/Edit'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item">
              <Link to='/sign-in'>Sign in</Link>
            </li>
            <li className="list-group-item">
              <Link to='/sign-up'>Sign up</Link>
            </li>
            <li className="list-group-item">
              <Link to='/manage/links/create'>Create Link</Link>
            </li>
            <li className="list-group-item">
              <Link to='/manage/links/edit'>Edit Link</Link>
            </li>
            <li className="list-group-item">
              <Link to='/manage/links'>Links</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/sign-in'>
            <SignIn />
          </Route>
          <Route exact path='/sign-up'>
            <SignUp />
          </Route>
          <Route exact path='/manage/links/create'>
            <CreateLink />
          </Route>
          <Route exact path='/manage/links/edit'>
            <EditLink />
          </Route>
          <Route exact path='/manage/links'>
            <ManageLinks />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
