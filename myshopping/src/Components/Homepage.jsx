import React from 'react';

import {Switch,Route} from 'react-router-dom';
export default class Homepage extends React.Component {
   
    render() {
        
        return (
         <div id="main-menu" class="main-nav zn_mega_wrapper ">
                <ul id="menu-main-menu" class="main-menu zn_mega_menu">
                    <li class="menu-item-has-children menu-item-mega-parent"><a href="index.php">HOMEPAGES &amp; NICHE</a>
                        <ul class="hg_mega_container container clearfix">
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
        )
    }
}