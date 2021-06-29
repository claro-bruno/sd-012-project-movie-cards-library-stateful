import React from 'react';
import propTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="Title" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          value={ value }
          data-testid="title-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Title.propTypes = {
  handleChange: propTypes.func,
  value: propTypes.string,
};

Title.defaultProps = {
  handleChange: () => {},
  value: '',
};

export default Title;
