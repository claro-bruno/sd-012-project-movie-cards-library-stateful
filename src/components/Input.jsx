import React from 'react';

class Input extends React.Component {
  
  render() {
    const { label ,type, name, value, onChange, dataLabel, dataInput  } = this.props;  
    return (
             
        <label htmlFor={ name } data-testid={ dataLabel }>
          { label }
          <input
            data-testid={ dataInput }
            name={ name }
            type={ type }
            value={ value }
            onChange={ onChange }
          />
        </label>
      
    );
  }
}

export default Input;