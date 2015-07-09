import React from 'react';

class Phone extends React.Component {
    render() {
        let style = {
            background: 'url(src/assets/' + this.props.phone.imageUrl + ') bottom right 15% no-repeat #46B6AC'
        };

        return (
            <div className="mdl-card mdl-shadow--2dp demo-card-square">
                <div className="mdl-card__title mdl-card--expand" style={style}>
                    <h3 className="mdl-card__title-text">${this.props.phone.price}</h3>
                </div>
                <div className="mdl-card__supporting-text">
                    {this.props.phone.snippet}
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                        {this.props.phone.name}
                    </a>
                </div>
            </div>
        );
    }
}

export default Phone;