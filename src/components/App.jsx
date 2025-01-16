import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";

export default class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.name.value;
    const number = form.number.value;
    const nameId = nanoid();
    const person = { name: name, id: nameId, number }

    const exist = this.state.contacts.find(item => item.name === person.name)
    
    if (exist) {
      alert(`${person.name} already in contacts.`)
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, person]
      }))
    }
    //console.log(this.state);

    form.reset()

  }

  handleFilter = evt => {
    const findValue = evt.currentTarget.value.toLowerCase()

    this.setState({ filter: findValue })

  }

  handleDelete = (id) => {
    //console.log('test:',id);
    this.setState({contacts: this.state.contacts.filter(item => item.id !== id) })
    
  }

  render() {

    const inputId = nanoid()
    const telId = nanoid()
    const filterId = nanoid()
    const result = this.state.contacts.filter(item => item.name.toLowerCase().includes(this.state.filter))
    //console.log('result:',result);

    const contacts = this.state.filter === '' ? this.state.contacts : result

    //console.log('contacts:', contacts);

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm inputId={inputId} telId={telId} handleSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter filterId={filterId} handleFilter={this.handleFilter} />

        <ContactList contacts={contacts} handleDelete={this.handleDelete}/>

      </div>
    );
  }
}
