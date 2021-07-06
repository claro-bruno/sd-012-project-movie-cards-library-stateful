import React from 'react';
import PropTypes from 'prop-types';

class StorylineInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          name="storyline"
          id="storyline-input"
          data-testid="storyline-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

StorylineInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
StorylineInput.defaultProps = {
  value: '',
};

export default StorylineInput;
