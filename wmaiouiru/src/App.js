import './App.css'

import React from 'react'

let App = React.createClass({
  render() {
    return <div>
        <div className="App">
          <div className="App-heading App-flex">
            <div><h2>Welcome to <span className="App-react">WMAIOUIRU</span> (currently under construction)</h2></div>
          </div>
        </div>
        <div className="">
          <h1>TODO</h1>
          <ul>
            <li>Skill Sets</li>
            <li>Interative Resume</li>
            <li>Projects</li>
            <li>TODO Projects</li>
            <li>Personal History</li>
            <li>Ideas</li>
            <li>Tools</li>
            <li>Resources</li>
            <li>Leisure and Hobby</li>
          </ul>
          <h1>Contact</h1>
          <a href='https://github.com/wmaiouiru' target='_blank'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2000px-Octicons-mark-github.svg.png' height="42" width="42" alt='github_logo' />
          </a>
          <a href='https://www.linkedin.com/in/wmaiouiru' target='_blank'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' height="42" width="42" alt='linkedin_logo' />
          </a>
          <a href='https://twitter.com/wmaiouiru' target='_blank'>
            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Twitter_bird_logo_2012.svg/1259px-Twitter_bird_logo_2012.svg.png' height="42" width="42" alt='twitter_logo' />
          </a>

        </div>
      </div>
  }
})

export default App
