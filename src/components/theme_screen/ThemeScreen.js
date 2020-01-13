import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import CandidateButtons from './CandidateButtons'

class ThemeScreen extends Component {

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
        //console.log(this.props.themes)
        const themes = this.props.themes;
        
        if(!themes)
        {
            return <React.Fragment/>;
        }
        const theme = themes[this.props.themeId];

        return (
            <div className="home_screen_container">
                <div className="home-prompt row">
                    <span>{theme.name}</span>
                    <CandidateButtons theme={theme}/>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {    
    //console.log(state)
    return {
        themeId: ownProps.match.params.themeId,
        themes: state.firestore.ordered.themes,
        auth: state.firebase.auth,
    };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'themes' },
  ]),
)(ThemeScreen);