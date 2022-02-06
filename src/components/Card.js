import React from 'react'
import LinkAndArrow from "../components/LinkAndArrow";

export default props => (
    <div className="card">
        <a href={props.href}><img src={props.image} width="373" height="240"/></a>
        <h3>{props.header}</h3>
        <p>{props.description}</p>
        <LinkAndArrow text={props.text} href={props.href}/>
    </div>
)