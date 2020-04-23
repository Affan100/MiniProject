import React, { Component, useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';
import fb from "../config/firebase";


const Login = () => {
    const [imgUrl, setImgUrl] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSignedIn, setIsSignedIn] = useState(false);

    const login = e => {
        e.preventDefault();
        fb.auth().signInWithEmailAndPassword(email, password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err)
            alert("Something went wrong")
            alert("Hint: Please register or Invalid email")
        })
    }


    const signup = e => {

        e.preventDefault()
        fb.auth().createUserWithEmailAndPassword(email, password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err)
            alert('No email has been added yet.')
        })
    }


    return (
        <div>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="15">
                        <form >
                            <img src='https://www.phuket.psu.ac.th/wp-content/uploads/2019/03/cropped-PSU_PHUKET-EN.png' width='200' height='70' />
                            <div className="grey-text">

                                <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                                    success="right" name="email" onChange={(e) => setEmail(e.target.value)} />
                                <MDBInput label="Your password" icon="lock" group type="password" name="password"
                                    validate onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="text-center">
                                <Button variant="outline-primary" onClick={login}>LOGIN</Button >
                                <span style={{ marginLeft: 10 }} className="btnRe"><Button variant="outline-primary" onClick={signup}>Register</Button ></span>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default Login;