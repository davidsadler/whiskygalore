import React from 'react'
import Button from "../components/Button";

export default (props) => (
    <section className="intro">
        <div className="content-centre">
            <div className="copy">
                <h1>{props.heading}</h1>
                <h2>{props.description}</h2>
                <Button text="Button Text"/>
            </div>
        </div>
    </section>
)