import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Textarea extends Component {
  render() {
    const { textValue, onChangeText, inputLabel } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        { inputLabel }
        <textarea
          // id="story"
          value={ textValue }
          name="storyline"
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
