import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(props) {
    // const { name, value } = target;
    console.log(props);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.props;

    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ this.handleChange }
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
};

export default Button;
