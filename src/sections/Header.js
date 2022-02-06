import React from 'react'
import LinkAndArrow from "../components/LinkAndArrow";

export default class Header extends React.Component {
    state = {
        headlines: null,
        currentHeadline: 0
    }
    constructor(props) {
        super(props);

        this.state.headlines = props.headlines;
        this.state.currentHeadline = props.headlines[0].id;
        this.displayHeadline = this.displayHeadline.bind(this);
    }

    displayHeadline(id) {
        this.setState({currentHeadline: id});
    }

    render() {
        const headlines = this.state.headlines;
        const headline = headlines.find(headline => headline.id == this.state.currentHeadline);
        const tabs = headlines.map((headline, index) =>
            <li className={`${headline.id == this.state.currentHeadline ? "active" : ""}`} key={headline.id}><a href="#" onClick={(e) => this.displayHeadline(headline.id)}>{index + 1}. {headline.tabText}</a></li>
        );

        return (
            <section className="header">
                <div className="content-centre">
                    <div className="copy">
                        <h1>{headline.heading}</h1>
                        <h2>{headline.description}</h2>
                        <LinkAndArrow text={headline.linkText} href={headline.linkUrl}/>
                    </div>
                </div>
                <nav>
                    <ul className="tab-group highlight-first">
                        {tabs}
                    </ul>
                </nav>
            </section>
        )
    }
}