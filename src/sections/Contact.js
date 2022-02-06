import React from 'react'

export default (props) => (
    <section className="contact">
        <div className="content-centre">
            <div className="copy">
                <h1>{props.message}</h1>
                <h2>{props.phone}</h2>
            </div>
        </div>
    </section>
)