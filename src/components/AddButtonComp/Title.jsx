import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { title, handleChange2 } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          name="title"
          id={ title }
          type="text"
          value={ title }
          data-testid="title-input"
          onChange={ handleChange2 }
        />
      </label>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange2: PropTypes.func.isRequired,
};

export default Title;
