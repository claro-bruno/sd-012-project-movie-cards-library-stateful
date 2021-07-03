import React, { Component } from 'react';
import Proptypes from 'prop-types';

class AddTitle extends Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          value={ title }
          onChange={ handleChange }
          data-testid="title-input"
        />
      </label>
    );
  }
}

AddTitle.propTypes = {
  title: Proptypes.string.isRequired,
  handleChange: Proptypes.func.isRequired,
};

export default AddTitle;
