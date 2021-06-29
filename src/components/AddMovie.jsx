import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Form1 from './newComponents/Form1';

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
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    const { onClick } = this.props;

    return (
      <div>
        <form data-testid="add-movie-form">
          <Form1
            title={ title }
            subtitle={ subtitle }
            imagePath={ imagePath }
            storyline={ storyline }
            handleChange={ this.handleChange }
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
  rating: Proptypes.number.isRequired,

};

export default AddMovie;
