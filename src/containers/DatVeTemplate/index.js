import React, { Component } from 'react';
import axios from 'axios';
class DatVe extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        console.log('x');
        const { maLichChieu } = this.props;
        if (maLichChieu) {
            axios({
                method:'GET',
                url:`https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu${maLichChieu}`
            })
            .then((res) => {
                const { data } = res;
                this.setState({
                    data
                })
            })
            .catch((err) => {
                console.log('err', err);
            })
        }
    }

    renderHTML = () => {
        
    }
    render() {
        return (
            <div className="dat-ve">
                
            </div>
        );
    }
}

export default DatVe;