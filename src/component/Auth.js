import React, { useState, useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './Auth.css';
import Home from './Home';
// import Home from './Home';

// Top
import Topbar from './Topbar';

// Page Route
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './HomePage';
import addinput from './Addinput';
import toptrip from './Avg';


import Addinput from './Addinput';
import Avg from './Avg';



firebase.initializeApp({
    apiKey: "AIzaSyABkAvfQINIRpudOhg3Znj2UA76Ff_RIv0",
    authDomain: "mini-project-2755f.firebaseapp.com",
    projectId: "mini-project-2755f"
})


// class Auth extends Component {
const Auth = props => {

    const [isSignedIn, setIsSignedIn] = useState(false);

    const uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callback: {
            signInSuccessUrl: () => false
        }
    };

    useEffect(() => {

        firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user)
        })
    })

    return (
        <div >
            {isSignedIn ?
                (<div>

                    {/* <div> */}
                    {/* <img alt='profile picture' className='img' width='50px' src={firebase.auth().currentUser.photoURL} />
                    <span className='email'>Welcome: {firebase.auth().currentUser.displayName}</span>
                    <span className='email'>{firebase.auth().currentUser.email}</span> */}

                    {/* <Router>
                        <Switch>
                            <Route path="/HomePage" component={HomePage} />
                            <Route path="/App_Your_Trip" component={addinput} />
                            <Route path="/Hot" component={toptrip} />
                            <Topbar />
                        </Switch>
                    </Router> */}


                    <div id='home'><Home /></div>
                    <div id='moretrip'> <Addinput /></div>
                    <div id='hot'><Avg /></div>

                    <span className='logout'>
                        <Button variant="danger" onClick={() => firebase.auth().signOut()}>Logout</Button>
                    </span>

                    {/* </div> */}
                </div>)

                :

                (<div>
                    <div className='text'>Plase login</div>
                    <StyledFirebaseAuth
                        uiConfig={uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                </div>)
            }
        </div >
    );

}

export default Auth;