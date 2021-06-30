import React from 'react';
import PropTypes from 'prop-types';

class StoryLineInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label htmlFor="textaArea" data-testid="storyline-input-label">
          Sinopse
          <input
            data-testid="storyline-input"
            value={ value }
            onChange={ onChange }
            name="storyline"
          />
        </label>
      </div>
    );
  }
}

StoryLineInput.propTypes = {
  value: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StoryLineInput;
