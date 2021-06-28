import React from 'react';
import PropTypes from 'prop-types';
import AddInputs from './AddInputs';
import AddSelect from './AddSelect';

class AddForm extends React.Component {
  render() {
    const {
      handleChange,
      state,
      onClick,
      handleSubmit,
    } = this.props;

    return (
      <form data-testid="add-movie-form">
        <AddInputs
          handleChange={ handleChange }
          state={ state }
        />
        <AddSelect
          handleChange={ handleChange }
          state={ state }
        />
        <button
          type="submit"
          onClick={ (e) => {
            e.preventDefault();
            onClick(state);
            handleSubmit();
          } }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  state: PropTypes.shape({
    subtitle: PropTypes.string,
    title: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    genre: PropTypes.string,
  }).isRequired,
};

export default AddForm;
