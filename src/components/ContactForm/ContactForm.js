import PropTypes from 'prop-types'; 
export default function ContactForm({ inputId, telId, handleSubmit }) {
    return (
        <form id="phonebooks" onSubmit={handleSubmit}>
            <label htmlFor={inputId}>Name</label>
            <input
                id={inputId}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <label htmlFor={telId}>Number</label>
            <input
                id={telId}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <button type="submit">Add contact</button>
        </form>
    )
}

ContactForm.propTypes = {
    inputId: PropTypes.string.isRequired,
    telId: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}