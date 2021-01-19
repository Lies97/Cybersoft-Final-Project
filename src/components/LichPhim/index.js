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
            // Axios({
            //     url:
            //     `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`,
            //     method: "GET",
            // }).then((res) => {
            //     this.setState({
            //         // [id]: res.data,
            //     },() => {
            //         // console.log('id', this.state[id]);
            //     })
            // }).catch((err) => {
            //     console.log(err);
            // })
            
            Axios({
                url:
                `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${id}&maNhom=GP10`,
                method: "GET",
            })
            .then((res) => {
                this.setState({
                    [id]: res.data,
                })
                // console.log('res', this.state[id]);
            })
        })
    }
    handleButton = (id) => {
        this.setState({
            activeLink : id
        })
    }

    handleHeThongRap = (item, index) => {
        const { danhSachPhim = [], maCumRap: rapTen } = item;
        console.log('rapTen', rapTen);
        console.log('index', index);
        const x = danhSachPhim.map((item) => item.lstLichChieuTheoPhim);
        x.map((item) => {
            console.log('item', item);
            const now = new Date().valueOf();
            const finalItem = item.filter((nestedItem) => new Date(nestedItem.ngayChieuGioChieu).valueOf() > now)
            this.setState({
                [rapTen]: finalItem
            }, () => {
                console.log('finalItem', finalItem);
            })
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

    renderHeThongRap = (data) => {
        if (data[0]) {
            const { logo = "", lstCumRap : rap = [] } = data[0];
            return rap.map((item, index) => {
                const tempItem = item.tenCumRap.split('-');
                const coloredLabel = tempItem[0];
                const normalLabel = tempItem[1];
                return (
                    <div className="row container-lich-phim" onClick={() => {this.handleHeThongRap(item, index)}}>
                        <div className="col-3 cursor img">
                            <img src={logo} />
                        </div>
                        <div className="col-9 cursor">
                            <span className="colored-label">{coloredLabel}</span> - <span className="normal-label">{normalLabel}</span>
                            <p className="grey-color">{item.diaChi}</p>
                            <a className="red-color">[chi tiết]</a>
                        </div>
                    </div>
                )
            })
        }
    }

    renderListMovie = () => {
        return (
            <div className="row container-lich-phim" 
            // onClick={() => {this.handleHeThongRap(item, index)}}
            >
                <div className="col-1 cursor img">
                    {/* <img src={logo} /> */}
                    for logo
                </div>
                <div className="col-11 cursor">
                    <span className="colored-label">text</span> - <span className="normal-label">text</span>
                    <p className="grey-color">test</p>
                </div>
                <div className="col-12 text">
                    2D Digital
                </div>
                <div className="col-12">
                    <button className="time">
                        data
                    </button>
                </div>
            </div>
        )
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
                        {this.renderListMovie()}
                    </div>
                </div>
            </div>
        );
    }
}

export default LichPhim;