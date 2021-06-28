import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 5,
      genre: 'action',
    }
  }

  onChangeHandler({ target }) {
    console.log(target.name);
  }

  render() {
    const { props } = this;
    const { onClick } = props;
    return (
      <form data-testid="add-movie-form">
        <Input
          labelDataTestId="text-input-label"
          inputLabel="Título"
          inputDataTestId="title-input"
          inputType="text"
          inputValue={ this.state.title }
          inputOnChange={ this.onChangeHandler }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default AddMovie;
