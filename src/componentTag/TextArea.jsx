import PropTypes from 'prop-types';

import React from 'react';

class TextArea extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="Sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          id="Sinopse"
          onChange={ handleChange }
          value={ value }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TextArea;
