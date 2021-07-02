import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { changeHandler, title } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          id="title"
          name="title"
          type="text"
          value={ title }
          onChange={ changeHandler }
          data-testid="title-input"
        />
      </label>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string,
  changeHandler: PropTypes.func.isRequired,
};

Title.defaultProps = {
  title: 'undefined',
};

export default Title;
