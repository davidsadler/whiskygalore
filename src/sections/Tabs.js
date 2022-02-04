import React from 'react'

export default () => (
    <section className="tabs">
        <nav>
            <ul className="tab-group">
                <li><a href="#">Active Tab</a></li>
                <li><a href="#">Hovered Tab</a></li>
                <li className="inactive"><a href="#">Inactive Tab</a></li>
            </ul>
        </nav>
    </section>
)