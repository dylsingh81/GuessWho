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

    
    handleNewList = () =>
    {
        const fireStore = getFirestore();
        fireStore.collection('todoLists').add({
                    name: "Unknown",
                    owner: "Unknown",
                    items:[],
                    time: new Date(),
            })
            .then((docRef) => {
                    this.setState({redirect: true, redirectID: docRef.id});
                }
            )
    }

    render() {
        if (!this.props.auth.uid) {
            return <Redirect to="/login" />;
        }

        return (
            <div className="home_screen_container">
                <div className="home-prompt row">
                    <span>Click on the theme you want to play!</span>
                </div>
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