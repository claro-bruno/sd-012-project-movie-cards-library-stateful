import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          type="text"
          name="title"
          value={ title }
          onChange={ handleChange }
          data-testid="title-input"
        />
      </label>
    );
  }
}

Title.propTypes = ({
  title: PropTypes.string,
}).isRequired;

export default Title;
