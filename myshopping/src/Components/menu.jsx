import React from 'react';

export default class menu extends React.Component {
    constructor() {
        super()
        this.state.menu = [
            {
                menu: []
            }
        ]
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
          var menus = this.state.menus.map(menubar=>{
            return <li key={menubar.name}><Link to={menubar.url}>{menubar.name}</Link></li>
        })
        return (
            <div id="main-menu" className="main-nav zn_mega_wrapper ">
			<ul id="menu-main-menu" className="main-menu zn_mega_menu">
				<li className="menu-item-has-children menu-item-mega-parent"><a href="index.php">HOMEPAGES &amp; NICHE</a>
					<ul className="hg_mega_container container clearfix">
						<li class="menu-item-has-childern col-sm-4"><a href="#" class="zn_mega_title">HOMEPAGES</a>
							<ul class="clearfix">
								<li><a href="index.php">ARIES Homepage</a></li>
								<li><a href="orion-homepage.php">ORION Homepage</a></li>
								<li><a href="vega-homepage.php">VEGA Homepage</a></li>
								<li><a href="aura-homepage.php">AURA Homepage</a></li>
								<li><a href="homepages-agency.php">Agency Homepage</a></li>
								<li><a href="one-page.php">One Page</a></li>
								<li><a href="kuma-homepage.php">KUMA Homepage</a></li>
								<li><a href="ara-homepage.php">ARA Homepage</a></li>
								<li><a href="kronos-homepage.php">KRONOS Homepage</a></li>
								<li><a href="apollo-homepage.php">APOLLO Homepage</a></li>
								<li><a href="artemis-homepage.php">Artemis Homepage</a></li>
								<li><a href="eos-homepage.php">EOS Homepage</a></li>
								<li><a href="atlas-homepage.php">ATLAS Homepage</a></li>
								<li><a href="atlas-homepage-alt.php">ATLAS Homepage - Alt</a></li>
							</ul>
						</li>
					</ul>	
				</li>
			</ul>
		</div>
        );
    }
}