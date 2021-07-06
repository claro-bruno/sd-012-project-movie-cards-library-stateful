import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleInputGeneric extends Component {
  render() {
    const { valueTitleInput, handleChangeTitle } = this.props;

    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título:
        <input
          type="text"
          name="title"
          value={ valueTitleInput }
          data-testid="title-input"
          onChange={ handleChangeTitle }
        />
      </label>
    );
  }
}

TitleInputGeneric.propTypes = {
  valueTitleInput: PropTypes.string.isRequired,
  handleChangeTitle: PropTypes.func.isRequired,
};

export default TitleInputGeneric;
