import React from 'react';
import PropTypes from 'prop-types';

class SubtitleInput extends React.Component {
  render() {
    const { handleSub, valueSub } = this.props;
    return (
      <p>
        <label
          htmlFor="subtitle-input"
          data-testid="subtitle-input-label"
        >
          Subtítulo
          <input
            type="text"
            data-testid="subtitle-input"
            value={ valueSub }
            name="subtitle"
            onChange={ handleSub }
          />
        </label>
      </p>
    );
  }
}

SubtitleInput.propTypes = {
  valueSub: PropTypes.string.isRequired,
  handleSub: PropTypes.func.isRequired,
};

export default SubtitleInput;
