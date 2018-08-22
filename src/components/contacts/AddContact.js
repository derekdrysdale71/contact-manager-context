import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import uuid from 'uuid';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    //Validate Fields
    if (name === '') {
      this.setState({ errors: { name: 'Name is a required field' } });
      return;
    }
    if (email === '') {
      this.setState({ errors: { email: 'Email is a required field' } });
      return;
    }
    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is a required field' } });
      return;
    }
    const newContact = {
      id: uuid(),
      name,
      email,
      phone,
      errors: {}
    }
    dispatch({ type: 'ADD_CONTACT', payload: newContact });

    //Clear State
    this.setState({
      name: '',
      email: '',
      phone: ''
    });

    this.props.history.push('/');
  }

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    className="btn btn-light btn-block"
                    type="submit"
                    value="Add Contact"
                  />
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default AddContact;