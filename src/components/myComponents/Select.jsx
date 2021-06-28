import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const {
      labelID,
      selectID,
      text,
      handleChange,
      value,
      name,
      children,
    } = this.props;

    return (
      <label
        data-testid={ labelID }
        htmlFor={ selectID }
      >
        { text }
        <select
          data-testid={ selectID }
          onChange={ handleChange }
          value={ value }
          name={ name }
        >
          { children }
        </select>
      </label>
    );
  }
}

Select.defaultProps = {
  name: '',
};

Select.propTypes = {
  labelID: PropTypes.string.isRequired,
  selectID: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Select;
