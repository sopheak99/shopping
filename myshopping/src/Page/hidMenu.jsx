import React from 'react';

export default class hidMenu extends React.Component {
    constructor() {
        super()
        this.state.hidMenu = [
            {
                hidMenu: []
            }
        ]
    }
    componentWillMount() {
        this.state.hidMenu = [
            
                { name: "Header Option", url: '/' },
                { name: "Sub-Header", url: './About' },
                { name: "Footer-Option", url: '/service' },
                { name: "Color Preset", url: '/Protico' },
                { name: "Boxed Layout", url: '/Pricing' },
               
                
        ]
}
render() {
     var hidMenu = this.state.hidMenu.map(menubar=>{
            return <li key={menubar.name}><Link to={menubar.url}>{menubar.name}</Link></li>
        })
    return (
        <div className="kl-demopanel is-opened" id="kallyas_demopanel">
            <h3 className="dp-title"><i class="kl-icon icon-size-l pull-right mr-30"></i> DEMO OPTIONS:</h3>
            <ul className="dp-acc dp--list" id="demopanel-acc">
                <li className="panel"><button className="dp-tgg-button collapsed" type="button" data-toggle="collapse" data-parent="#demopanel-acc" data-target="#dp-pnl2" aria-expanded="false">Header options:</button>
                    <div className="collapse" id="dp-pnl2" aria-expanded="false">
                        <div className="acc-inner ov-scroll">
                            <div className="option-line">
                                <h6 className="dp-opt-title">HEADER STYLE:</h6>
                                <select name="dp_header_style" id="dp_header_style" className="fancy-select">
                                    <option value="header1" selected="selected">Header Style 1</option>
                                    <option value="header2">Header Style 2</option>
                                    <option value="header3">Header Style 3</option>
                                    <option value="header4">Header Style 4</option>
                                    <option value="header5">Header Style 5</option>
                                    <option value="header6">Header Style 6</option>
                                    <option value="header7">Header Style 7</option>
                                    <option value="header8">Header Style 8</option>
                                    <option value="header9">Header Style 9</option>
                                    <option value="header10">Header Style 10</option>
                                    <option value="header11">Header Style 11</option>
                                    <option value="header12">Header Style 12</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}
}