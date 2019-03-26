import React from 'react';

// Set up teh intial context
const AccountContext = React.createContext();

// Create an exportable consumer that can be injected into components
export const AccountConsumer = AccountContext.Consumer;

// Create the provider using a traditional React.Component class
class AccountProvider extends React.Component {
  state = {
    username: "jchu721",
    firstName: "Jason",
    lastName: "Chu",
    email: "test@test.com",
    updateAccount: (account) => this.updateAccount(account),
  };

  updateAccount = (account) => {
    this.setState({ ...account,});
  }

  render() {
    return (
      <AccountContext.Provider value = {this.state} >
        { this.props.children }
      </AccountContext.Provider>
    )
  }
}

export default AccountProvider;
