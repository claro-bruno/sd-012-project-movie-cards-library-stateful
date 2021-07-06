import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubtitleInputGeneric extends Component {
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

SubtitleInputGeneric.propTypes = {
  valueSubtitleInput: PropTypes.string.isRequired,
  handleChangeSubtitle: PropTypes.func.isRequired,
};

export default SubtitleInputGeneric;
