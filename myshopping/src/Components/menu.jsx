import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
export default class Menu extends React.Component {
    constructor() {
        super()
        this.state = 
            {
                menu: []
            }
        
    }
    componentWillMount() {
        this.state.menu = [
            
			    { name: "HOMEPAGES", url: '/' },
                { name: "SLIDERS", url: './About' },
                { name: "HERO SCENES", url: '/service' },
                { name: "FEATURES", url: '/Protico' },
                { name: "SHOP", url: '/Pricing' },
				{ name: "PAGES" ,url:''},
				{ name: "ELEMENTS" ,url:''}
            
        ]
    }
    render() {
          var menu = this.state.menu.map(menubar=>{
            return <li key={menubar.name}><Link to={menubar.url}>{menubar.name}</Link></li>
        })
        return (
             <Navbar>
                    <Navbar.Header> 
                        <Navbar.Brand>
                            <div className="home">
                            <a href="/">Logo</a>
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    
                    <Navbar.Collapse>
                    <Nav pullRight>

                        {menu}
                       
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
        );
    }
}