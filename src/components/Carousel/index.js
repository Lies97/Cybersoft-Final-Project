import React, { Component } from 'react';
import "./../../index.css";
import './index.scss';
import { connect } from "react-redux";
class Carousel extends Component {
    render() {
        const { listMovie  = [] } = this.props;
        return (
            <div className="carousel">
                <div id="carouselExampleCaptions" className="carousel slide" 
                // data-ride="carousel"
                >
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                    <li data-target="#carouselExampleCaptions" data-slide-to={2} />
                </ol>
                <div className="carousel-inner inner-height">
                    <div className="carousel-item active">
                        <img src={listMovie && listMovie[0].hinhAnh} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                        <img src={listMovie && listMovie[1].hinhAnh} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={listMovie && listMovie[2].hinhAnh} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    loading: state.listMovieReducer.loading,
    listMovie: state.listMovieReducer.data,
  };
};
export default connect(mapStateToProps, null)(Carousel);