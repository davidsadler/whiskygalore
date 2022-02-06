import React from 'react'

export default (props) => (
    <section className="tabs">
        <nav>
            <ul className="tab-group">
                {props.tabs.map((tab, index) =>
                    <li className={`${tab.tabInactive ? "active" : "inactive"}`} key={index}><a href={tab.tabUrl}>{tab.tabTitle}</a></li>
                )}
            </ul>
        </nav>
    </section>
)