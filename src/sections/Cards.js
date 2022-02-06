import React from 'react'
import Card from '../components/Card';

export default (props) => (
    <section className="cards">
        {props.cards.map((card, index) =>
            <Card
                key={index}
                image={card.image[0].url}
                header={card.header}
                description={card.description}
                text={card.linkText}
                href={card.linkUrl}
            />
        )}
    </section>
)