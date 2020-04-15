import React, { useState, useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Auth.css';
import Home from './Home';

import Addinput from './Addinput';
import Login from './Login'


const Auth = props => {

    const [isSignedIn, setIsSignedIn] = useState(false);

    const uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID
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

                    {/* <div id='hot'><Avg /></div> */}

                    {/* <span className='logout'>
                        <Button variant="danger" onClick={() => firebase.auth().signOut()}>Logout</Button>
                    </span> */}

                    {/* </div> */}

                </div>)

                :

                (<div >
                    <div className="web">
                        <img src="https://cdn1.iconfinder.com/data/icons/travel-line-good-life/512/map-512.png" width='60' height='60' color='#ffffff' />
                        <div style={{ marginLeft: 10 }} className='toptext'>
                            <h4>Travel Diaries Web</h4>
                            <h6>บันทึกการท่องเที่ยวด้วยมือคุณ</h6>
                        </div>
                    </div>

                    <div className='sign'><Login /></div>
                    <div className="OR">OR</div>
                    <StyledFirebaseAuth
                        uiConfig={uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                    <img className='bg' src='https://auth.gboxzi.com/image/login.png' width='300' height='300' />

                </div>)
            }
        </div >
    );

}

export default Auth;