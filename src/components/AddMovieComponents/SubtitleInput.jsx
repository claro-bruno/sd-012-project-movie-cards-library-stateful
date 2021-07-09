import React from 'react';
import PropTypes from 'prop-types';

class SubtitleInput extends React.Component {
  render() {
    const { subtitle, updateState } = this.props;
    return (
      <label htmlFor="subtitleInput" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="subtitleInput"
          name="subtitle"
          type="text"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ updateState }
        />
      </label>
    );
  }
}

SubtitleInput.propTypes = {
  subtitle: PropTypes.string,
  updateState: PropTypes.func,
}.isRequired;

export default SubtitleInput;
