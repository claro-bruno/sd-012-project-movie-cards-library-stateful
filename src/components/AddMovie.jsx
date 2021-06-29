import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Input from './newComponents/Input';

class AddMovie extends Component {
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
    const { name, type } = target;
    const value = (type === 'checkbox' ? target.checked : target.value);
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle } = this.state;
    const { onClick } = this.props;

    return (
      <div>
        <form data-testid="add-movie-form">
          <Input
            name="title"
            dataId="title"
            message="Título"
            value={ title }
            type="text"
            onChange={ this.handleChange }
          />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  title: Proptypes.string.isRequired,
  subtitle: Proptypes.string.isRequired,
  handleChange: Proptypes.func.isRequired,
  onClick: Proptypes.func.isRequired,
};

export default AddMovie;
