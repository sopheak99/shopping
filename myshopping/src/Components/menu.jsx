import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
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

            { name: "HOMEPAGES & NICHE", url: './About' },
            { name: "About", url: './About' },
            { name: "SLIDERS", url: './slider' },
            { name: "HERO SCENES", url: '/heroscenes' },
            { name: "FEATURES", url: '/features' },
            { name: "SHOP", url: '/shop' },
            { name: "PAGES", url: '/pages' },
            { name: "ELEMENTS", url: 'element' }

        ]
    }
    render() {
        var menu = this.state.menu.map(menubar => {
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
                    <Navbar.Toggle />
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