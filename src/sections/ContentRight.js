import React from 'react'
import LinkAndArrow from "../components/LinkAndArrow";

export default () => (
    <section>
        <div className="content-right">
            <img src="/images/structure4.png" width="580" height="418"/>
            <div className="copy">
                <h1>Here we have a two line display.</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.</h2>
                <LinkAndArrow text="Link & Arrow" href="#"/>
            </div>
        </div>
    </section>
)