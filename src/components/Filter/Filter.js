import PropTypes from 'prop-types';
export default function Filter({ filterId, handleFilter }) {
    return (
        <div>
            <label htmlFor={filterId}>Find contacts by name</label>
            <input
                id={filterId}
                type="text"
                onChange={handleFilter} />
        </div>
    )
}

Filter.propTypes = {
    filterId: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired,
}