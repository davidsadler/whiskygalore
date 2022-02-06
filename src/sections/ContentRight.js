import React from 'react'
import LinkAndArrow from "../components/LinkAndArrow";

export default (props) => (
    <section>
        <div className="content-right">
            <img src="/images/structure4.png" width="580" height="418"/>
            <div className="copy">
                <h1>{props.heading}</h1>
                <h2>{props.description}</h2>
                <LinkAndArrow text={props.linkText} href={props.linkUrl}/>
            </div>
        </div>
    </section>
)