import React from 'react';
import Form from './FormAddMovie';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleHating = this.handleHating.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleHating({ target }) {
    this.setState({
      rating: target.value,
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleButton() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    // const { handleChange } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <Form
        subtitle={ subtitle }
        title={ title }
        imagePath={ imagePath }
        storyline={ storyline }
        rating={ rating }
        genre={ genre }
        handler={ this.handleChange }
        handleButton={ this.handleButton }
      />
    );
  }
}

export default AddMovie;
