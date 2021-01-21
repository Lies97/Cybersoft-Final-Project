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
            activeRapLink: 0,
            listToRender: [],
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
            })
        })
    }
    handleButton = (id) => {
        this.setState({
            activeLink: id,
            activeRapLink: 0,
        })
    }

    handleHeThongRap = (item, index) => {
        const { danhSachPhim = [] } = item;
        let { maCumRap: rapTen } = item;
        const x = danhSachPhim.map((item) => item.lstLichChieuTheoPhim);
        console.log('item', item);
        this.setState({
            activeRapLink: index
        }, () => {
            x.map((data) => {
                let now = new Date();
                // mock date
                now.setDate(1);
                now.setMonth(1);
                now.setHours(0);
                now.setMinutes(0);
                now.setSeconds(0);
                now = now.valueOf();
                const finalItem = data.filter((nestedItem) => new Date(nestedItem.ngayChieuGioChieu).valueOf() > now);
                String.prototype.capitalize = function() {
                    return this.charAt(0).toUpperCase() + this.slice(1);
                }
                rapTen = rapTen.split('-').join(' ');
                rapTen = this.toUpperCase(rapTen);
                rapTen[0].toLowerCase();
                this.setState({
                    [rapTen]: {...item, finalItem}
                }, () => {
                    console.log(this.state);
                })
            })
        })
    }

    toUpperCase = (str) => {
        const array1 = str.split(' ');
        const newarray1 = [];
            
        array1.forEach((item) => {
            newarray1.push(item.charAt(0).toUpperCase()+item.slice(1));
        })
        return newarray1.join('');
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
        const { activeLink, activeRapLink } = this.state;
        let listRender = {};
        if (activeLink == 0) {
            switch (activeRapLink) {
                case 0 : {
                    listRender = this.state.BhdStarCineplexPhamHung || {} ;
                    break;
                }
                case 1 : {
                    listRender = this.state.BhdStarCineplexVincomQuangTrung || {} ;
                    break;
                }
                case 2 : {
                    listRender = this.state.BhdStarCineplexVincomThaoDien || {} ;
                    break;
                }
                default: 
                    listRender = this.state.BhdStarCineplex32 || {} ;
                    break;
            }

        } else if (activeLink == 1) {
            switch (activeRapLink) {
                case 0 : {
                    listRender = this.state.CnsQuocThanh || {};
                    break;
                }
                default: 
                    listRender = this.state.CnsHaiBaTrung || {};
                    break;
            }
        } else if (activeLink == 2) {

        } else if (activeLink == 3) {
            listRender = this.state.MegagsCaoThang || {};
        } else if (activeLink == 4) {
            switch (activeRapLink) {
                case 0 : {
                    listRender = this.state.GlxHuynhTanPhat || {};
                    break;
                }
                case 1 : {
                    listRender = this.state.GlxNguyenDu || {};
                    break;
                }
                case 2 : {
                    listRender = this.state.GlxNguyenVanQua || {};
                    break;
                }
                case 3 : {
                    listRender = this.state.GlxQuangTrung || {};
                    break;
                }
                default: 
                    listRender = this.state.GlxTanBinh || {};
                    break;
            }
        } else {
            switch (activeRapLink) {
                case 0 : {
                    listRender = this.state.LotteCantavil || {};
                    break;
                }
                case 1 : {
                    listRender = this.state.LotteCongHoa || {};
                    break;
                }
                case 2 : {
                    listRender = this.state.LotteGoVap || {};
                    break;
                }
                case 3 : {
                    listRender = this.state.LotteNamSaiGon || {};
                    break;
                }
                case 4 : {
                    listRender = this.state.LottePhuTho || {};
                    break;
                }
                default: 
                    listRender = this.state.LotteThuDuc || {};
                    break;
            }
        }
        console.log('listRender', listRender);
        if (listRender.finalItem && listRender.finalItem.length > 0) {
            let x = [];
            listRender.danhSachPhim.forEach((data) => {
                console.log(data); 
                x = data.lstLichChieuTheoPhim.filter((nestedData) => JSON.stringify(nestedData) == JSON.stringify(listRender.finalItem[0]))
            })
            console.log('x', x);
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