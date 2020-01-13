import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { firestoreConnect } from 'react-redux-firebase';

import { editListHandler } from '../../store/database/asynchHandler'

class CandidateButton extends React.Component {
    render() {
        const item = this.props.item;
        return (
            <div>
                <span>{item.name}</span>
                <button className="rainbow rainbow-1 custom-candidate-btn" >
                    <img src="https://static.miraheze.org/loathsomecharacterswiki/thumb/0/07/Team_blu.png/300px-Team_blu.png" width="50px" height="60px"/>
                </button>
            </div>
        );
    }
}

export default CandidateButton;