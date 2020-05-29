import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './style.css';

export default class Product extends Component {

    state = {
        product: []
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/products/${id}`)

        this.setState({product: response.data});
    }

    render() {

        const { title, description, url } = this.state.product;

        return (
            <div className="product-info">
                <article>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <p>
                        URL: <a target="_blanck" href={url}>{url}</a>
                    </p>
                </article>
                <div className="back">
                    <Link to="/">Voltar</Link>
                </div>   
            </div>
        );
    }
}