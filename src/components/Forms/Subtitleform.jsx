import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubtitleForm extends Component {
  render() {
    const { subtitleValue, subtitleOnChange } = this.props;

    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="subtitle-input"
          type="text"
          value={ subtitleValue }
          data-testid="subtitle-input"
          onChange={ subtitleOnChange }
          name="subtitle"
        />
      </label>
    );
  }
}

SubtitleForm.propTypes = {
  subtitleOnChange: PropTypes.string.isRequired,
  subtitleValue: PropTypes.string.isRequired,
};

export default SubtitleForm;
