import React, {Component} from 'react';
import api from '../../service/api';
import './styles.sass';

class Home extends Component {
    state = {
        results: [],
        infos: [],
        page: 1
    };

    api_key = '51f0912f9f1362a6a6b8921bc96c15b9';
    img_w600_h900 = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/';

    componentDidMount() {
        this.loadMovies();
    }

    loadMovies = async (page = 1) => {
        const response = await api.get(`/3/discover/movie?api_key=51f0912f9f1362a6a6b8921bc96c15b9&page=${page}`);
        const { results, ...infos } = response.data;

        this.setState({ results, infos, page });
    }

    
    prevPage = () => {
        const { page } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadMovies(pageNumber);
    }
    

    nextPage = () => {
        const { page, infos } = this.state;

        if (page === infos.total_pages) return;

        const pageNumber = page + 1;

        this.loadMovies(pageNumber);
    }
    last = () => {
        const { page, infos } = this.state;

        if (page === infos.total_pages) return;

        const pageNumber = infos.total_pages;

        this.loadMovies(pageNumber);
    }
    
    render() {
        const { results, infos, page } = this.state; 
        return (
            <div className="content">
                <div>
                    <h1>Home</h1>

                    <div className="movie-list">
                        {results.map(movie => (
                            <article key={movie.id}>
                                <a href={`/movie/${movie.id}`}>
                                    <img src={this.img_w600_h900 + movie.poster_path} alt={`Poster de ${movie.title}`} height="300" />
                                    <strong> {movie.title} </strong>
                                </a>
                            </article>
                        ))}
                        <div className="controls">
                            <button className="first" onClick={this.first}>Primeiro</button>
                            <button className="prev" onClick={this.prevPage}>Anterior</button>
                            <span>{page} - {infos.total_pages}</span>
                            <button className="next" onClick={this.nextPage}>Próximo</button>
                            <button className="last" onClick={this.last}>Último</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;