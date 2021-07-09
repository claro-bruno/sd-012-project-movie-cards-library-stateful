import React from 'react';
import PropTypes from 'prop-types';

class TitleInput extends React.Component {
  render() {
    const { title, updateState } = this.props;
    return (
      <label htmlFor="titleInput" data-testid="title-input-label">
        Título
        <input
          id="titleInput"
          name="title"
          type="text"
          value={ title }
          data-testid="title-input"
          onChange={ updateState }
        />
      </label>
    );
  }
}

TitleInput.propTypes = {
  title: PropTypes.string,
  updateState: PropTypes.func,
}.isRequired;

export default TitleInput;
