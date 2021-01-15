import React, { Component } from 'react';
import './index.scss';
import data from './data.js';
import Axios from 'axios';
class LichPhim extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: 0,
            BHDStar: [],
            CineStar: [],
            MegaGS: [],
            Galaxy: [],
            LotteCinima: [],
        }
    }
    
    componentDidMount() {
        const cumRap = ["BHDStar", "CineStar", "MegaGS", "Galaxy", "LotteCinima"];
        cumRap.forEach((id) => {
            Axios({
                url:
                `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`,
                method: "GET",
            }).then((res) => {
                this.setState({
                    [id]: res.data,
                },() => {
                    console.log('id', this.state.LotteCinima);
                })
            }).catch((err) => {
                console.log(err);
            })
        })
    }
    handleButton = (id) => {
        this.setState({
            activeLink : id
        })
    }

    renderRapLogo = () => {
        const { rap } = data;
        const { activeLink } = this.state;
        return rap.map((item, index) => {
            return (
                <li key={index}>
                    <div className={ (index === activeLink ? "logo active" : "logo") } onClick={() => this.handleButton(index)}>
                        <img src={item.logo} className="logo-img" alt="logo"></img>
                    </div>
                </li>
            )
        })
    }

    renderHeThongRap = (rap) => {
        return rap.map((item) => {
            const tempItem = item.tenCumRap.split('-');
            const coloredLabel = tempItem[0];
            const normalLabel = tempItem[1];
            return (
                <div className="row container-lich-phim">
                    <div className="col-3 cursor">
                        test
                    </div>
                    <div className="col-9 cursor">
                        <span>{coloredLabel}</span> - <span>{normalLabel}</span>
                        <p>{item.diaChi}</p>
                        <p>[chi tiết]</p>
                    </div>
                </div>
            )
        })
    }
    render() {
        const { 
            BHDStar,
            CineStar,
            MegaGS,
            Galaxy,
            LotteCinima,
            activeLink
        } = this.state;
        return (
            <div className="row LichPhim container-lich-phim">
                <div className="row container container-lich-phim">
                    <ul className="nav nav-tabs listPCinemas accordion col-2">
                        {this.renderRapLogo()}
                    </ul>
                    <div className="tab-content float-left col-4">
                        {(BHDStar && activeLink === 0) && (this.renderHeThongRap(BHDStar))}
                        {(CineStar && activeLink === 1) && (this.renderHeThongRap(CineStar))}
                        {(MegaGS && activeLink === 3) && (this.renderHeThongRap(MegaGS))}
                        {(Galaxy && activeLink === 4) && (this.renderHeThongRap(Galaxy))}
                        {(LotteCinima && activeLink === 5) && (this.renderHeThongRap(LotteCinima))}
                    </div>
                    <div className="listMovies col-6">

                    </div>
                </div>
            </div>
        );
    }
}

export default LichPhim;