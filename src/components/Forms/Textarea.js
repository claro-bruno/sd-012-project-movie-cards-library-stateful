import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Textarea extends Component {
  render() {
    const { textValue, onChangeText, inputLabel, inputName } = this.props;
    return (
      <label htmlFor="story" data-testid="storyline-input-label">
        { inputLabel }
        <textarea
          id="story"
          value={ textValue }
          name={ inputName }
          onChange={ onChangeText }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

Textarea.propTypes = PropTypes.exact({
  value: PropTypes.string.isRequired,
}).isRequired;

export default Textarea;
