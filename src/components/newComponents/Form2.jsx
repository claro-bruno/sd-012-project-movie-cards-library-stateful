import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Input from './Input';

class Form2 extends Component {
  render() {
    return(
      <div>
        <Input
          name=""
          dataId="title"
          message="Título"
          value={ title }
          type="text"
          onChange={ handleChange }
        />
      </div>
    );
  }
}

export default Form2;
