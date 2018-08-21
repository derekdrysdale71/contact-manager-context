import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Karen Williams',
        email: 'karen@gmail.com',
        phone: '555-555-4444'
      },
      {
        id: 3,
        name: 'Henry Johnson',
        email: 'henry@gmail.com',
        phone: '555-555-3333'
      }
    ]
  };

  removeContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: newContacts });
  }

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact =>
          <Contact
            key={contact.id}
            contact={contact}
            removeContact={this.removeContact.bind(this, contact.id)}
          />
        )}
      </React.Fragment>
    )
  }
}

export default Contacts;