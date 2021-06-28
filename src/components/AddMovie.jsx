// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((estadoAnterior) => ({
      title: estadoAnterior.title,
      subtitle: estadoAnterior.subtitle,
    }));
    console.log(this.state);
  }

  render() {
    const { onclick } = this.props;
    const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="input-title" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="input-title"
            id="input-title"
            placeholder={ title }
            onChange={ this.handleClick }
            data-testid="title-input"
          />
        </label>
        <label htmlFor="input-subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="input-subtitle"
            id="input-subtitle"
            placeholder={ subtitle }
            onChange={ this.handleClick }
            data-testid="subtitle-input"
          />
        </label>
        { onclick }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onclick: PropTypes.func.isRequired,
};

export default AddMovie;
