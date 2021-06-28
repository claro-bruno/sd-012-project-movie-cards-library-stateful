import React from 'react';
import PropTypes from 'prop-types';

class TitleInput extends React.Component {
  render() {
    const { handleTitle, valueTitle } = this.props;
    return (
      <p>
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            data-testid="title-input"
            value={ valueTitle }
            name="title"
            onChange={ handleTitle }
          />
        </label>
      </p>
    );
  }
}

TitleInput.propTypes = {
  valueTitle: PropTypes.string.isRequired,
  handleTitle: PropTypes.func.isRequired,
};

export default TitleInput;
