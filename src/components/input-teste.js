<label htmlFor="title-input-label" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            value={ title }
            onChange={ handleChange }
            data-testid="title-input"
            id="title-input-label"
          />
        </label>
        <label htmlFor="subtitle-input-label" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            value={ subtitle }
            onChange={ handleChange }
            data-testid="subtitle-input"
            id="subtitle-input-label"
          />
        </label>
        <label htmlFor="image-input-label" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            value={ imagePath }
            onChange={ handleChange }
            data-testid="image-input"
            id="image-input-label"
          />
        </label>
        <label htmlFor="storyline-input-label" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            onChange={ handleChange }
            data-testid="storyline-input"
            id="storyline-input-label"
          />
        </label>
        <label htmlFor="rating-input-label" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            value={ rating }
            onChange={ handleChange }
            data-testid="rating-input"
            id="rating-input-label"
          />
        </label>
        <label htmlFor="genre-input-label" data-testid="genre-input-label">
          Gênero
          <select
            value={ genre }
            onChange={ handleChange }
            data-testid="genre-input"
            id="genre-input-label"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        {/* <input type="submit" value="Enviar" />
        <button onclick={ fazerFuncao } data-testid="send-button">
          Adicionar filme
        </button> */}