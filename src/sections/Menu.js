import React from 'react'

export default (props) => (
    <section className="menu">
        <nav>
            <ul className="nav-items">
                <li><a href={props.items[0].itemUrl}>{props.items[0].itemTitle}</a></li>
                <li><a href={props.items[1].itemUrl}>{props.items[1].itemTitle}</a></li>
                <li><a href={props.items[2].itemUrl}>{props.items[2].itemTitle}</a></li>
                <li className="logo">
                    <div className="logo-placeholder">
                        <img src="/images/logo.png" width="24" height="24"/>
                    </div>
                </li>
                <li><a href={props.items[3].itemUrl}>{props.items[3].itemTitle}</a></li>
                <li><a href={props.items[4].itemUrl}>{props.items[4].itemTitle}</a></li>
                <li className="active"><a href={props.items[5].itemUrl}>{props.items[4].itemTitle}</a></li>
            </ul>
        </nav>
    </section>
)