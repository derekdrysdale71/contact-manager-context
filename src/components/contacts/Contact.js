import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';

class Contact extends Component {
  state = {
    showContactDetails: false
  };

  onShowDetails = () => {
    this.setState({ showContactDetails: !this.state.showContactDetails })
  }

  onRemoveContact = (id, dispatch) => {
    dispatch({ type: 'REMOVE_CONTACT', payload: id })
  }

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactDetails } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
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
                  onClick={this.onRemoveContact.bind(this, id, dispatch)}
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
        }}
      </Consumer>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
}

export default Contact;