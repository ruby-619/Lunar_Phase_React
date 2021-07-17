// import React, { useState } from 'react'
import { withRouter, Link } from 'react-router-dom'

const EventNAV = (props) => {
  // const url = props.match.url
  // const path = props.match.path
  return (
    <div class="container">
      <div class="row">
      <h2 className="m-auto EventListHead">EVENT</h2>
        <div class="Enav mt-3">
          <ul class="d-flex justify-content-around">
            <li>
              {/* <Link to={`${url}/1`}>戶外</Link> */}
              <Link to="/category/1" className="EventNavLink">戶外</Link>
            </li>
            <li>
              <Link to="/category/2" className="EventNavLink">藝文</Link>
            </li>
            <li>
              <Link to="/category/3" className="EventNavLink">講座</Link>
            </li>
            <li>
              <Link to="/category/4" className="EventNavLink">手作</Link>
            </li>
            <li>
              <Link to="/category/5" className="EventNavLink">品味</Link>
            </li>
          </ul>
        </div>
        {/* <Switch>
          <Route exact path={path}></Route>
          <Route path={`${path}/:type?/:id?`}>
            <EventCategoryCard />
          </Route>
        </Switch> */}
        {/* <Switch>
          <Route exact path={path}></Route>
          <Route path={`${path}/:eCategory?`}>
            <EventCategoryCard />
          </Route>
        </Switch> */}
      </div>
    </div>
  )
}

export default withRouter(EventNAV)
