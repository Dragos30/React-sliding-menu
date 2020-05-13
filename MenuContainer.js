import React, { Component } from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu";

class MenuContainer extends Component {
    
    render() {
        return (
            <div id="part1"><h1>FInIT</h1>
                <img src="logo192.png" alt=""></img>
            <div>
            <MenuButton handleMouseDown={this.handleMouseDown} />
                <Menu handleMouseDown={this.handleMouseDown}
                    menuVisibility={this.state.visible} />
            <div>
            <p id="part2">Can you spot the item that doesn't belong?</p>
            <ul>
                <li>Lorem</li>
                <li>Ipsum</li>
                <li>Dolor</li>
                <li>Sit</li>
                <li>Bumblebees</li>
                <li>Aenean</li>
                <li>Consectetur</li>
                        </ul>
                        <div>
                            <ol id="part3">
                                <div>
                    <h1>IT - Web development</h1>
                            <li>Professional websites</li>
                            <li>Search Engine Optimisation</li>
                            <li>Website Design & Re-design</li>
                            <li>Contact forms</li>
                            <li>Social media links</li>
                            <li>eCommerce & Online Shops</li>
                            <li>Professional photos</li>
                            <li>Mobile devices friendly</li>
                            <li>Cloud Hosting & Domain Services</li>
                                    <li>Support & Help</li>
                                    </div>
                                    </ol>
                </div>
                </div>
                    </div>
                </div>
            
        );
    }
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };
        
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }
 
    handleMouseDown(e) {
        this.toggleMenu();

        console.log("clicked");
        e.stopPropagation();
    }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
    }
   
}

export default MenuContainer;