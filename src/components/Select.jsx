import React from 'react';
import PropType from 'prop-types';

class Select extends React.Component {
  render() {
    const {
      label,
      inputName,
      inputValue,
      onChangeInput,
      inputID,
    } = this.props;

    const option = [
      { description: 'Todos', genre: '' },
      { description: 'Ação', genre: 'action' },
      { description: 'Comédia', genre: 'comedy' },
      { description: 'Suspense', genre: 'thriller' },
    ];

    return (
      <label htmlFor={ `${inputID}` } data-testid={ `${inputID}-label` }>
        { label }
        <select
          name={ inputName }
          value={ inputValue }
          onChange={ onChangeInput }
          data-testid={ inputID }
          id={ inputID }
        >
          {
            option.map(({ description, genre }) => (
              <option key={ genre } data-testid="select-option" value={ genre }>
                { description }
              </option>
            ))
          }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  label: PropType.string.isRequired,
  inputName: PropType.string.isRequired,
  inputValue: PropType.func.isRequired,
  onChangeInput: PropType.func.isRequired,
  inputID: PropType.string.isRequired,
};

export default Select;
