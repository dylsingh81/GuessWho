import React from 'react';

class ThemeCard extends React.Component {

    render() {
        const { theme } = this.props;
        return (
            <div className="card z-depth-0 todo-list-link">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{theme.name}</span>
                </div>
            </div>
        );
    }
}
export default ThemeCard;