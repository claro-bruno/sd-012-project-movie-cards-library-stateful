import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends Component {
  render() {
    const {
      subtitle,
      updateState,
    } = this.props;

    return (
      <div>
        <label
          htmlFor="subtitulo"
          data-testid="subtitle-input-label"
        >
          Subtítulo
          <input
            type="text"
            name="subtitle"
            id="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ updateState }
          />
        </label>
    </div>
    );
  }
}

InputSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
}

export default InputSubtitle;