import React, { useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";

export default function App() {

  const [contacts, setContacts] = useState([
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ])

  const [filter, setFilter] = useState('')
  
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.name.value;
    const number = form.number.value;
    const nameId = nanoid();
    const person = { name: name, id: nameId, number }

    const exist = contacts.find(item => item.name === person.name)
    
    if (exist) {

      alert(`${person.name} already in contacts.`)

    } else {

      setContacts([...contacts, person])

    }

    form.reset()

  }

  const handleFilter = evt => {
    const findValue = evt.currentTarget.value.toLowerCase()

    setFilter(findValue)

  }

  const handleDelete = (id) => {
    
    setContacts(contacts.filter(item => item.id !== id))
    
  }


     const inputId = nanoid()
     const telId = nanoid()
     const filterId = nanoid()
     const result = contacts.filter(item => item.name.toLowerCase().includes(filter))

    const contactsList = filter === '' ? contacts : result


  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm inputId={inputId} telId={telId} handleSubmit={handleSubmit} />

      <h2>Contacts</h2>
      <Filter filterId={filterId} handleFilter={handleFilter} />

      <ContactList contacts={contactsList} handleDelete={handleDelete}/>

    </div>
  );
}
