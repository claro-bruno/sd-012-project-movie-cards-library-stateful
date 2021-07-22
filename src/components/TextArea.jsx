import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label htmlFor="textarea" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          type="text"
          id="textarea"
          name="storyline"
          value={ storyline }
          onChange={ handleChange }
        >
          { storyline }
        </textarea>
      </label>
    );
  }
}

TextArea.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TextArea;
