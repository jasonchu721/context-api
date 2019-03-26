import React from 'react';
import { Form } from 'semantic-ui-react';
import { AccountConsumer, } from "../providers/AccountProvider";

class AccountForm extends React.Component {
  state = { username: "", firstName: "", lastName: "", email: "" };

  handleChange = (e, {name, value }) => this.setState ({ [name]: value, })

  handleSubmit = (e) => {
    e.preventDefault();
    const account = { ...this.state, };
    this.props.updateAccount(account);
  }

  render () {
    
    const { username, firstName, lastName, email } = this.state;

    return (
      <Form onSubmit = {this.handleSubmit}>
        <Form.Input 
          label = "New Username"
          type = "text"
          name = "username"
          value = {username}
          onChange = {this.handleChange}
        />
        <Form.Input 
          label = "First Name"
          type = "text"
          name = "firstName"
          value = {firstName}
          onChange = {this.handleChange}
        />
        <Form.Input 
          label = "Last Name"
          type = "text"
          name = "lastName"
          value = {lastName}
          onChange = {this.handleChange}
        />
        <Form.Input 
          label = "Email"
          type = "text"
          name = "email"
          value = {email}
          onChange = {this.handleChange}
        />
       <Form.Button color="black">Update</Form.Button>
      </Form>
    )
  }
}

const ConnectedAccountForm = (props) => {
  return (
    <AccountConsumer>
      { value => (
        <AccountForm 
          { ...props }
          username={value.username}
          firstName={value.firstName}
          lastName={value.LastName}
          email={value.email}
          updateAccount={value.updateAccount}
        />
      )}
    </AccountConsumer>
  )
}

export default ConnectedAccountForm;
