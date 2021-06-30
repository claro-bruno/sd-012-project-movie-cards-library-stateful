// implement AddMovie component here
import React from 'react';
// import PropType from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    // const { onClick } = this.props;
    const { title } = this.state;
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
      </div>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropType.func.isRequired,
// };

export default AddMovie;
