import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './Auth.css';


firebase.initializeApp({
    apiKey: "AIzaSyABkAvfQINIRpudOhg3Znj2UA76Ff_RIv0",
    authDomain: "mini-project-2755f.firebaseapp.com",
    projectId: "mini-project-2755f"
})


class Auth extends Component {
    state = { isSignedIn: false }

    uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callback: {
            signInSuccessUrl: () => false
        }
    }

    componentDidMount = () => {

        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
        })
    }

    render() {
        return (
            <div className='login'>
                {this.state.isSignedIn ?
                    (<span>

                        <div style={{
                            width: '400px',
                            margin: 'auto',
                            background: '#fafafa',
                            padding: '20px'
                        }}>
                            <h3>Welcome: {firebase.auth().currentUser.displayName}</h3>
                            <img alt='profile picture' src={firebase.auth().currentUser.photoURL} />
                            <div>Email: {firebase.auth().currentUser.email}</div>

                            <div className='logout'>
                                <Button variant="danger" onClick={() => firebase.auth().signOut()}>Logout</Button>
                            </div>
                        </div>


                    </span>)

                    :

                    (<StyledFirebaseAuth
                        uiConfig={this.uiConfig}
                        firebaseAuth={firebase.auth()}
                    />)
                }
            </div>
        );
    }

} export default Auth;