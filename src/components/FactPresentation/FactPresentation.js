import React from 'react';
import './FactPresentation.css';

class FactPresentation extends React.Component {
    render() {
        return (
            <div className="div-layer-1">
                <div className={(this.props.catFact) ? 'div-layer-2' : ''}>
                    {
                        (this.props.catFact)
                         ? <p className="content">{this.props.catFact}</p>
                         : ''
                    }
                </div>
            </div>
        );
    }
}

export default FactPresentation;