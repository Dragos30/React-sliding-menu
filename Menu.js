import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
    render() {
        var visibility = "hide";

        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return (
            <div id="flyoutMenu"
                onMouseDown={this.props.handleMouseDown}
                className={visibility}>
                <h2><a href="#part1">Home</a></h2>
                <h2><a href="#part2">About</a></h2>
                <h2><a href="#part3">Contact</a></h2>
                <h2><a href="#part4">Search</a></h2>
            </div>
        );
    }
}

export default Menu;