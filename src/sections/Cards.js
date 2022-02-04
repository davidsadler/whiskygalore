import React from 'react'
import Card from '../components/Card';

export default () => (
    <section className="cards">
        <Card
            image="/images/structure1.png"
            header="This is a wide container title stretching two lines."
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing."
            text="Link & Arrow"
            href="#"
        />
        <Card
            image="/images/structure2.png"
            header="This is a wide container title stretching two lines."
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing."
            text="Link & Arrow"
            href="#"
        />
        <Card
            image="/images/structure3.png"
            header="This is a wide container title stretching two lines."
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing."
            text="Link & Arrow"
            href="#"
        />
    </section>
)