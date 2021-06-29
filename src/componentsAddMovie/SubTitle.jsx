import PropTypes from 'prop-types';

import React from 'react';

class SubTitle extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="Subtítulo" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          name="subtitle"
          id="Subtítulo"
          onChange={ handleChange }
          value={ value }
        />
      </label>
    );
  }
}

SubTitle.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SubTitle;
