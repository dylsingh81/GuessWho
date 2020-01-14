import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavLink, Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import ThemesLinks from './ThemesLinks'
import { getFirestore } from 'redux-firestore';

class HomeScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            redirectID: "",
        };
    }

    render() {
        if (!this.props.auth.uid) {
            return <Redirect to="/login" />;
        }

        return (
            <div className="home_screen_container">
                <div className="home-prompt row">
                    <div className="home-text">Click on the theme you want to play!</div>
                    <ThemesLinks/>
                </div>
                Under Construction... more to come!
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        firebase: state.firebase
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'todoLists' },
    ]),
)(HomeScreen);