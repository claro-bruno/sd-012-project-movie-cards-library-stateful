import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  renderOptions(options, dataTestidOption) {
    const dataTest = dataTestidOption || '';
    const optionsArr = Object.entries(options);
    return optionsArr
      .map((option) => (
        <option
          value={ option[1] }
          data-testid={ dataTest }
          key={ option[0] }
        >

          { option[0] }

        </option>
      ));
  }

  render() {
    const {
      id,
      name,
      classNameLabel,
      classNameSelect,
      onChange,
      value,
      dataTestidLabel,
      dataTestidSelect,
      dataTestidOption,
      textLabel,
      options,
    } = this.props;

    return (
      <label
        htmlFor={ id }
        data-testid={ dataTestidLabel }
        className={ classNameLabel }
      >

        { textLabel }

        <select
          id={ id }
          name={ name }
          data-testid={ dataTestidSelect }
          value={ value }
          onChange={ onChange }
          className={ classNameSelect }
        >

          { this.renderOptions(options, dataTestidOption) }

        </select>

      </label>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  classNameLabel: PropTypes.string,
  classNameSelect: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  dataTestidLabel: PropTypes.string,
  dataTestidSelect: PropTypes.string,
  dataTestidOption: PropTypes.string,
  textLabel: PropTypes.string,
  options: PropTypes.objectOf(PropTypes.string).isRequired,
};

Select.defaultProps = {
  name: '',
  classNameLabel: '',
  classNameSelect: '',
  onChange: () => {},
  value: '',
  dataTestidLabel: '',
  dataTestidSelect: '',
  dataTestidOption: '',
  textLabel: '',
};

export default Select;
