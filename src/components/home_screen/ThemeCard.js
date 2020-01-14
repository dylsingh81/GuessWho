import React from 'react';
class ThemeCard extends React.Component {

    render() {
        const { theme } = this.props;
        const path = require('../../images/' + theme.name + "/" + theme.icon);
        //const path = require('../../images/old_cn/bloo.png')
        return (
            <div className="card z-depth-4 custom-card">
                <div class="card-image">
                    <img src={path} height = "200px" width = "150px" />
                </div>
                <div className="card-title grey-text text-darken-3 custom-card-title">
                    {theme.name}
                </div>
            </div>
        );
    }
}
export default ThemeCard;