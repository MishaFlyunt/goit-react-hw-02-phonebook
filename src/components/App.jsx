import { GlobalStyle, Container } from './GlobalStyle';
import React, { Component } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  // handleLeaveFeedback = e => {
  //   this.setState(prevState => {
  //     return {
  //       [e]: prevState[e] + 1,
  //     };
  //   });
  // };

  // totalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  render() {
    // const { good, neutral, bad } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />

        <GlobalStyle />
      </Container>
    );
  }
}
