import React from 'react';
import PropTypes from 'prop-types';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};
class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = initialState;

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((estadoAnterior) => ({
      title: estadoAnterior.title,
    }));
  }

  render() {
    const { onclick } = this.props;
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="input-titulo" data-testid="title-input-label">
          Título:
          <input
            placeholder={ title }
            onChange={ this.handleClick }
            data-testid="title-input"
          />
        </label>
        <ul>
          { onclick }
        </ul>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onclick: PropTypes.func.isRequired,
  initialState: PropTypes.shape({
    subtitle: PropTypes.string,
    title: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    genre: PropTypes.string,
  }).isRequired,
};
export default AddMovie;
