import React, { Component } from 'react';
import Facebook from 'react-facebook-login'

export default class Facebook extends Component {

    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: '',

    }

    responseFacebook = response => {
        console.log(response)
    }
    componentClicked = () => console.log('clikced');

    render() {
        let fbContent;

        if (this.state.isLoggedIn) {
            fbContent = null;
        }
        else {
            fbContent = (<FacebookLogin
                appId="1086694998378024"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                cssClass="my-facebook-button-class"
                icon="fa-facebook"
            />)
        }

        return (
            <div>
                {fbContent}
            </div>
        )
    }
}