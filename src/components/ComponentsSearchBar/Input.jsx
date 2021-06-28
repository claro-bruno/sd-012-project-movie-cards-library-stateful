import React from 'react';

class Input extends React.Component {
  render() {
    const { type, datatestid, value, onChange, labelText } = this.props;
    return (
      <section>
        <label htmlFor={ datatestid } data-testid="text-input-label">
          { labelText }
          <input
            type={ type }
            id={ datatestid }
            data-testid={ datatestid }
            value={ value }
            onChange={ onChange }
          />
        </label>
      </section>
    );
  }
}

export default Input;
