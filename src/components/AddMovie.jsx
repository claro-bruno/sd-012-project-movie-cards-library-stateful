import React from 'react';
import FormAddMovie from './FormAddMovie';
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
      // genre: "action",
    };
    this.textInputHandler = this.textInputHandler.bind(this);
  }

  textInputHandler(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating } = this.state;
    return (
      <FormAddMovie
        subtitle={ subtitle }
        title={ title }
        imagePath={ imagePath }
        storyline={ storyline }
        rating={ rating }
        textInputHandler={ this.textInputHandler }
      />
    );
  }
}

AddMovie.propTypes = {
  // onClick: PropTypes.func.isRequired,
};

export default AddMovie;
