import React from 'react';

class CandidateButton extends React.Component {
    render() {
        const item = this.props.item;
        return (
            <div className="card-theme">
                <img src="https://static.miraheze.org/loathsomecharacterswiki/thumb/0/07/Team_blu.png/300px-Team_blu.png" width="100%" height="100%" />
                <div class="container-card-theme">
                    <p><b>{item.name}</b></p>
                </div>
            </div>
        );
    }
}

export default CandidateButton;