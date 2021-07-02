import React, { Component } from 'react';
// import Proptypes from 'prop-types';
import Form1 from './newComponents/Form1';
import Form2 from './newComponents/Form2';

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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    // const { onClick } = this.props;

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
          <Form2
            rating={ rating }
            genre={ genre }
            handleChange={ this.handleChange }
          />
        </form>
      </div>
    );
  }
}

export default AddMovie;
