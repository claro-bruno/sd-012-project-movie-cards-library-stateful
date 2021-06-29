/* import React, { Component } from 'react';

class Select extends Component {
  render() {
    const { label, labelTestId, selectedGenre, onSelectedGenreChange, options, labelId } = this.props;
    return (
      <section>
        <label htmlFor={ labelId } data-testid={ labelTestId }>
          { label }
          <select
            name=""
            id=""
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option key="todos" value="todos" id={ labelId } ></option>
            { options.map((item) => <option key={item} value={ item }> { item }</option>)}
          </select>
        </label>
      </section>
    );
  }
}

export default Select; */
