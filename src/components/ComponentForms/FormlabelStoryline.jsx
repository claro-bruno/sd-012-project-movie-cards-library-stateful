import React from 'react';
import PropTypes from 'prop-types';

class FormlabelStoryline extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="storyline"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          id="storyline"
          data-testid="storyline-input"
          name="storyline"
          cols="30"
          rows="10"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

FormlabelStoryline.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormlabelStoryline;
