import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    showContactDetails: false
  };

  onShowDetails = () => {
    this.setState({ showContactDetails: !this.state.showContactDetails })
  }

  onRemoveContact = () => {
    this.props.removeContact();
  }

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactDetails } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>{name}{' '}
          <i
            className="fas fa-sort-down"
            style={{ cursor: 'pointer' }}
            onClick={this.onShowDetails}
          />
          <i
            className="fas fa-times"
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
            onClick={this.onRemoveContact}
          />
        </h4>
        {showContactDetails ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  removeContact: PropTypes.func.isRequired
}

export default Contact;