import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from '../components/Form/Form';
import FormSearch from 'components/Form/FormSearch';
import ContactsList from './ContactsList/ContactsList';
import css from './Form/Form.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    
  };


  // addItem = e => {
  //   const id = nanoid();
  //   const name = e.name;
  //   const number = e.number;
    

  //   if (ContactsList.find(contact => name === contact.name)) {
  //     alert(`${name} is already in contacts.`);
  //   } 

  //   this.setState({ contacts: ContactsList });
  // };

  addItem = e => {
    const id = nanoid();
    const name = e.name;
    const number = e.number;
  
    if (this.state.contacts.find(contact => name === contact.name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
  
    const newContact = { id, name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  filterList = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteItem = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== e),
    }));
  };
  

  render() {
    return (
      <React.Fragment>
        <div className={css.container}>
          <h1>Phonebook</h1>
          <Form onSubmit={this.addItem} />
          <h2>Contacts</h2>
         
          <FormSearch 
              filter={this.state.filter}
              onChangeFilter={this.handleChange} />
          <ContactsList
            contacts={this.filterList()}
            onDeleteItem={this.deleteItem}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;




