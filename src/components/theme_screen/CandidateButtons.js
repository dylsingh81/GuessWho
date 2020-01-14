import React from 'react';
import CandidateButton from './CandidateButton'

class CandidateButtons extends React.Component {
    render() {
        const theme = this.props.theme;
        const items = theme.items;
        return (
            <div>
                {items && items.map( (item, id) => (
                        <div className = "col">
                            <CandidateButton item={item} key={id}></CandidateButton>
                            </div>
                ))}
            </div>
        );
    }
}
export default CandidateButtons;