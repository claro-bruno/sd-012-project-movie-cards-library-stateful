import React, { Component } from 'react';
import Proptypes from 'prop-types';

class AddSubtitle extends Component {
  render() {
    const { subtitle, handleChange } = this.props;

    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          value={ subtitle }
          onChange={ handleChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

AddSubtitle.propTypes = {
  subtitle: Proptypes.string.isRequired,
  handleChange: Proptypes.func.isRequired,
};

export default AddSubtitle;
