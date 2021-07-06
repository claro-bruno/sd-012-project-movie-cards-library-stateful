import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <section>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title-input-label">
            Título
            <input
              data-testid="title-input"
              type="text"
            />
          </label>
        </form>
      </section>
    );
  }
}

export default AddMovie;