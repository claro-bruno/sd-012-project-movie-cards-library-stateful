import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { handleChange, title } = this.props;
    return (
      <label htmlFor="importTitle" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          name="title"
          value={ title }
          id="title"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Title.propTypes = {
  handleChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Title;
