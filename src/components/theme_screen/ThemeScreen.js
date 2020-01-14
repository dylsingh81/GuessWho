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
        
        var char_index = Math.floor((Math.random() * theme.items.length) + 0);
        var char = theme.items[char_index];





        return (
            <div className="home_screen_container">
                <div className="theme-page">
                    <div className="theme-name">{theme.name}</div>
                    <hr className="line-one"/>   
                    <div className ="your-char-div row">
                        <div className ="col s3 your-text">Your Character:</div>
                        <div className="card-theme col s3">
                            <img src="https://static.miraheze.org/loathsomecharacterswiki/thumb/0/07/Team_blu.png/300px-Team_blu.png" width="100%" height="100%"/>
                            <div class="container-card-theme card-title">
                                <p><b>{char.name}</b></p>
                            </div>
                        </div>
                    </div>


                    <hr className="line-one"/> 
                    <div className ="row">
                        <CandidateButtons theme={theme}/>
                    </div>  
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