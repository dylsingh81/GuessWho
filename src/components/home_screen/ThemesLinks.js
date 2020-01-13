import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { firestoreConnect } from 'react-redux-firebase';

import { editListHandler } from '../../store/database/asynchHandler'
import ThemeCard from './ThemeCard';

class ThemesLinks extends React.Component {
    render() {
        const themes = this.props.themes;

        return (
            <div className="todo-lists section">
                {themes && themes.map( (theme, id) => (
                    <Link to={'/theme/' + id} key={id}>
                        <ThemeCard theme={theme} />
                    </Link>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        themes: state.firestore.ordered.themes,
        auth: state.firebase.auth,
    };
};

const mapDispatchToProps = dispatch => ({
    updateList: theme => dispatch(editListHandler(theme)),
  });
  

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'themes' },
  ]),
)(ThemesLinks);