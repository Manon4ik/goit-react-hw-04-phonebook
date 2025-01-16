import PropTypes from 'prop-types';
export default function ContactItem({id, name, number, handleDelete}){
    //console.log('name:',name);
    return(
        <li key={id}>{name}: {number} <button type="button" onClick={()=>handleDelete(id)}>Delete</button></li>
    )
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired,
}