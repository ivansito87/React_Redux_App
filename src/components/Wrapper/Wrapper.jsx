import React, {Component} from 'react';
import Header from "../Header/Header";
import Profile from "../Profile/Profile";

class Wrapper extends Component {

 componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {
    return (
        <main className="profile-page" ref="main">
          <Header/>
          <Profile/>
        </main>
    );
  }
}


export default Wrapper;
