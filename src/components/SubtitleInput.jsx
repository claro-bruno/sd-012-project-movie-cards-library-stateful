import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubtitleInput extends Component {
  render() {
    const { valueSubtitleInput, handleChangeSubtitle } = this.props;

    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ valueSubtitleInput }
          data-testid="subtitle-input"
          onChange={ handleChangeSubtitle }
        />
      </label>
    );
  }
}

SubtitleInput.propTypes = {
  valueSubtitleInput: PropTypes.func.isRequired,
  handleChangeSubtitle: PropTypes.func.isRequired,
};

export default SubtitleInput;
