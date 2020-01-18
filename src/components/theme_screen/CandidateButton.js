import React from 'react';

class CandidateButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
        };
    }

    render() {
        const theme = this.props.theme;
        const item = this.props.item;
        var path;
        var charStyle;
        if(this.state.clicked){
            path = require('../../images/' + "x.png");
            charStyle = "card z-depth-4 item-card x-btn";
                }
        else{
            path = require('../../images/' + theme.name + "/" + item.image);
            charStyle = "card z-depth-4 item-card rainbow rainbow-1 custom-candidate-btn";
        }
        return (
            <div className={charStyle} onClick={this.changePic}>
                <img src={path} className ="img" />
                <div className="container-card-theme">
                    <p><b>{item.name}</b></p>
                </div>
            </div>
        );
    }

    changePic = () => {
        this.setState({
                clicked: !this.state.clicked,
            });
    }

}

export default CandidateButton;