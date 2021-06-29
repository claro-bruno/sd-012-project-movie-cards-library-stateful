import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Option from './Option';

class Select extends Component {
  render() {
    const { dataId, message, onChange, value, name } = this.props;
    return (
      <label htmlFor={ dataId } data-testid={ `${dataId}-input-label` }>
        { message }
        <select
          name={ name }
          value={ value }
          id={ dataId }
          onChange={ onChange }
          data-testid={ `${dataId}-input` }
        >
          <Option value="" type="Todos" dataId={ dataId } />
          <Option value="action" type="Ação" dataId={ dataId } />
          <Option value="comedy" type="Comédia" dataId={ dataId } />
          <Option value="thriller" type="Suspense" dataId={ dataId } />
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: Proptypes.string.isRequired,
  dataId: Proptypes.string.isRequired,
  message: Proptypes.string.isRequired,
  onChange: Proptypes.func.isRequired,
  value: Proptypes.string.isRequired,
};

export default Select;
