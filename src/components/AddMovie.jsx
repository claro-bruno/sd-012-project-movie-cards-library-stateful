// implement AddMovie component here
import React from 'react';
// import PropType from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubtitleChange = this.handleSubtitleChange.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubtitleChange(event) {
    this.setState({ subtitle: event.target.value });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form" />
        <label
          htmlFor="tituloID"
          data-testid="title-input-label"
        >
          Título
          <input
            id="tituloID"
            type="text"
            data-testid="title-input"
            value={ title }
            onChange={ this.handleTitleChange }
          />
        </label>
        <label
          htmlFor="subtituloID"
          data-testid="subtitle-input-label"
        >
          Subtítulo
          <input
            id="subtituloID"
            type="text"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.handleSubtitleChange }
          />
        </label>
      </div>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropType.func.isRequired,
// };

export default AddMovie;
