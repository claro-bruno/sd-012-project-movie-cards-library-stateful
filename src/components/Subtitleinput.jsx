import React from 'react';
import PropTypes from 'prop-types';

class SubtitleInput extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label htmlFor="subtitleInput" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="subtitleInput"
          name="subtitle"
          type="text"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

SubtitleInput.propTypes = {
  subtitle: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default SubtitleInput;
