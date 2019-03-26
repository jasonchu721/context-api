import React from 'react';
import { Card } from 'semantic-ui-react';
import { AccountConsumer, } from "../providers/AccountProvider";

const Account = () => (
  <AccountConsumer>
    { value => (
    <Card>
      <Card.Content>
        <Card.Header> { value.username} </Card.Header>
      </Card.Content>
      <Card.Content>
        <p>First Name: {value.firstName}</p>
        <p>Last Name: {value.lastName}</p>
        <p>email: {value.email}</p>
      </Card.Content>
    </Card>
    )}
  </AccountConsumer>
)

export default Account;
