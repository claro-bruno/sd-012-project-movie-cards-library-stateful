import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleForm extends Component {
  render () {

    const { titleValue, titleOnChange } = this.props;

    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          id="title-input"
          type="text"
          value={ titleValue }
          data-testid="title-input"
          onChange={ titleOnChange }
          name="title"
        />
      </label>
    );
  }
}

TitleForm.propTypes = {
  titleOnChange: PropTypes.string.isRequired,
  titleValue: PropTypes.string.isRequired,
}

export default TitleForm;