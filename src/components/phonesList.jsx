import React from 'react';
import Phone from './phone';

class PhonesList extends React.Component {
    render() {
        let phonesList = [];

        this.props.phones.forEach((phone, i) => {
            phonesList.push(<Phone key={i} phone={phone} />);
        });

        return (
        <div>
            {phonesList}
        </div>
        );
    }
}

export default PhonesList;