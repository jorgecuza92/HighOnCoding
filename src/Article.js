import { Component } from 'react';

export class WatchKit extends Component {
  render() {
    return (
      <div>
        <h3 className = 'articleTitle'>Hello WatchKit</h3>
        <p>
          Last month apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release.
          The WatchKit framework enables the developers to create Apple Watch apps.
        </p>
        <p className = 'comments'>
          12 Comments; 124 Likes
        </p>
      </div>
    )
  }
}


export class Swift extends Component {
  render() {
    return (
      <div>
        <h3 className = 'articleTitle'>Intro to Swift</h3>
        <p>
          Swift is a modern programming language developed by Apple to create the next gen of iOs and OSX apps. Swift
          is a fairly new language and still in development but it clearly reflects the intentions and the future direction.
        </p>
        <p className = 'comments'>
          15 Comments; 45 Likes
        </p>

      </div>
    )
  }
}

