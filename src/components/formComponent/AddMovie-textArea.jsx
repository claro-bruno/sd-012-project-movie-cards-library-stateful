import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const {
      name,
      value,
      onChange,
    } = this.props;

    return (
      <label htmlFor="add-storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="add-storyline"
          data-testid="storyline-input"
          name={ name }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default TextArea;
