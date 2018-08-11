import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { width } from 'window-size';

export default class Facebook extends Component {
    state = {
        isLoggedin: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }
    responseFacebook = (res) => {
      // console.log(res)
      this.setState({
        isLoggedin: true,
        userID: res.userID,
        name: res.name,
        email: res.email,
        picture: res.picture.data.url
      });
    }
    componentClicked = () => {
      console.log('Component Clicked')
    }

  render() {
      let fbContent;
      if(this.state.isLoggedin) {
        fbContent = (
          <div style={{
            width: '400px',
            margin: 'auto',
            background: '#f4f4f4',
            padding: '10px',
           }}>
           <img src={this.state.picture} alt={this.state.name}/>
           <h2>Welcome : {this.state.name}</h2>
           Email: {this.state.email}
          </div>
        );
      }
      else {
        fbContent = (
          <FacebookLogin
            appId="840279149692994"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook} />
        );
      }
    return (
      <div>
        {fbContent}
      </div>
    )
  }
}
