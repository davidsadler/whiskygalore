import React from 'react'
import LinkAndArrow from "../components/LinkAndArrow";

export default () => (
    <section className="header">
        <div className="content-centre">
            <div className="copy">
                <h1>Here we have a two line display intro.</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.</h2>
                <LinkAndArrow text="Link & Arrow" href="#"/>
            </div>
        </div>
        <nav>
            <ul className="tab-group highlight-first">
                <li className="active"><a href="#">1. Innovation Partner</a></li>
                <li><a href="#">2. Top Class Team</a></li>
                <li><a href="#">3. Corporate Solutions</a></li>
            </ul>
        </nav>
    </section>
)