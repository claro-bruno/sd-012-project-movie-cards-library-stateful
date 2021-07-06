import React from 'react';
import PropTypes from 'prop-types';

class SubtitleInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          name="subtitle"
          id="subtitle-input"
          data-testid="subtitle-input"
          type="text"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

SubtitleInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
SubtitleInput.defaultProps = {
  value: '',
};

export default SubtitleInput;
