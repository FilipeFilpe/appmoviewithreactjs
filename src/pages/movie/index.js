import React, { Component } from 'react';
import api from '../../service/api';

import './styles.sass';


class Movie extends Component {
    state = {
        movie: {},
        genres: [],
    };

    getMovie = async () => {
        const { id } = this.props.match.params;
        const response = await api.get(`/3/movie/${id}?api_key=51f0912f9f1362a6a6b8921bc96c15b9&language=en-US`);
        this.setState({movie: response.data, genres: response.data.genres});
    };

    img = 'https://image.tmdb.org/t/p/original';

    render() {
        this.getMovie();
        const movie = this.state.movie;
        return (
            <div className="movie" style={{backgroundImage: `url(${this.img + movie.backdrop_path})`, backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover' }}>
                <div className="box">
                    <div className="description">
                        <h1>{movie.title}</h1>
                        <p>{movie.overview}</p>
                        <div className="generos">
                            <small>Gêneros:</small>
                            <ul>
                                {this.state.genres.map(genero => (
                                    <li key={genero.id}>{genero.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <img src={this.img + movie.poster_path} alt={`Poster de ${movie.title}`} height="300" />
                </div>
            </div>
        );
    }
}

export default Movie;