import PropTypes from 'prop-types';
import ContactItem from "components/ContactItem/ContactItem"
export default function ContactList({ contacts, handleDelete }) {
    //console.log('contacts:', contacts);
    
    return (
        <ul>
            {contacts.map(({ name, id, number }) => (
                <ContactItem key={id} id={id} name={name} number={number} handleDelete={handleDelete} />                
            ))}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleDelete: PropTypes.func.isRequired,
}