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

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  handleChange(event, stateName) {
    this.setState({ [stateName]: event.target.value });
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleTitleClick() {
    const { callback } = this.props;
    const { title } = this.state;
    callback(title);
  }

  render() {
    const {
      title,
      subtitle,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label
          htmlFor="title-input"
          data-testid="title-input-label"
        >
          Título
          <input
            type="text"
            name="title-input"
            data-testid="title-input"
            value={ title }
            onChange={ this.handleTitleChange }
          />
        </label>
        <br />
        <label
          htmlFor="subtitle-input"
          data-testid="subtitle-input-label"
        >
          Subtítulo
          <input
            type="text"
            name="subtitle-input"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ (event) => this.handleChange(event, 'subtitle') }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default AddMovie;
