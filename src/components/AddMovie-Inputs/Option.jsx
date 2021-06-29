import React from 'react';
import PropTypes from 'prop-types';

class Option extends React.Component {
  render() {
    const { optionValue, dataTestidOption, array } = this.props;
    return (
      <>
        {
          array.map((item, index) => (
            <option
              data-testid={ dataTestidOption }
              key={ index }
              value={ optionValue[index] }
            >
              { item }
            </option>))
        }
      </>
    );
  }
}

Option.propTypes = {
  optionValue: PropTypes.string.isRequired,
  dataTestidOption: PropTypes.string.isRequired,
  array: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Option;
