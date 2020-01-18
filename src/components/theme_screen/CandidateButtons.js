import React from 'react';
import CandidateButton from './CandidateButton'

class CandidateButtons extends React.Component {
    render() {
        const theme = this.props.theme;
        const items = theme.items;
        return (
            <div>
                {items && items.map((item, id) => (
                    <div className="col s2 margin-button">
                        <CandidateButton item={item} key={id} theme={theme}></CandidateButton>
                    </div>
                ))}
            </div>
        );
    }
}
export default CandidateButtons;