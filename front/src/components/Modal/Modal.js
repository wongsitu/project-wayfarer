import React, { Component } from 'react';

import SignIn from './SignIn'
import SignUp from './SignUp'
import CreatePost from './CreatePost'
import axios from 'axios'

class Modal extends Component {

    render() {
    let ModalContent
    if(this.props.component === "SignIn"){
        ModalContent = <SignIn isLoggedIn={this.props.isLoggedIn} handleInput={this.props.handleInput} handleLogIn={this.props.handleLogIn} />
    } else if (this.props.component === "SignUp"){
        ModalContent = <SignUp isLoggedIn={this.props.isLoggedIn} handleInput={this.props.handleInput} handleSignUp={this.props.handleSignUp}/>
    } else if (this.props.component === "Post"){
        ModalContent = <CreatePost isLoggedIn={this.props.isLoggedIn} handleInput={this.props.handleInput} choice={this.props.choice} handleInput={this.props.handleInput}/>
    }
    return (
        <div>
            {ModalContent}
        </div>
        );
    }
}

export default Modal;