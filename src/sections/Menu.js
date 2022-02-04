import React from 'react'

export default () => (
    <section className="menu">
        <nav>
            <ul className="nav-items">
                <li><a href="#">Navigation 1</a></li>
                <li><a href="#">Navigation 2</a></li>
                <li><a href="#">Navigation 3</a></li>
                <li className="logo">
                    <div className="logo-placeholder">
                        <img src="/images/logo.png" width="24" height="24"/>
                    </div>
                </li>
                <li><a href="#">Navigation 4</a></li>
                <li><a href="#">Navigation 5</a></li>
                <li className="active"><a href="#">Navigation 6</a></li>
            </ul>
        </nav>
    </section>
)