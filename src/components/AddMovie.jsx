// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.newCard = this.newCard.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  newCard({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { props, state, newCard } = this;
    const { onClick } = props;
    const { title,
      subtitle } = state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label
            htmlFor="title"
            data-testid="title-input-label"
          >
            Título
            <input
              type="text"
              name="title"
              value={ title }
              onChange={ newCard }
              data-testid="title-input"
              id="title"
            />
          </label>
          <label
            htmlFor="subtitle"
            data-testid="subtitle-input-label"
          >
            Subtítulo
            <input
              type="text"
              name="subtitle"
              value={ subtitle }
              onChange={ newCard }
              data-testid="subtitle-input"
              id="subtitle"
            />
          </label>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
