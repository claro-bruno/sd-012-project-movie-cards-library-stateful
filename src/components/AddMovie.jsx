// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import InputsText from './InputsText';
import InputNumb from './InputNumb';
// import SelectInput from './SelectInput';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputsText
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          storyline={ storyline }
          handleChange={ this.handleChange }
        />
        <InputNumb
          testIdLabel="rating-input-label"
          labelText="Avaliação"
          name="rating"
          value={ rating }
          testid="rating-input"
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
