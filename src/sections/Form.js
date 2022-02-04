import React from 'react'
import Button from '../components/Button'

export default () => (
    <section className="form">
        <form action="contact" method="post">
            <div className="field-control error">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input className="form-control" id="email" name="email" type="email" value="john.doe@mysite.com"/>
                    <p>*Invalid Email Address</p>
            </div>
            <div className="field-control">
                <label className="form-label" htmlFor="name">Your Name</label>
                <input className="form-control" id="name" name="name" value="John Doe"/>
            </div>
            <div className="field-control">
                <label className="form-label" htmlFor="topic">Choose a topic</label>
                <select className="form-select" id="topic" name="topic">
                    <option value="" disabled selected>Please select</option>
                    <option value="topic-1">Topic 1</option>
                    <option value="topic-2">Topic 2</option>
                    <option value="topic-3">Topic 3</option>
                </select>
            </div>
            <div className="field-control">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea className="form-control" id="message" name="message" placeholder="Enter a message..." rows="4"></textarea>
            </div>
            <div className="btn-control">
                <Button text="Button Text"/>
            </div>
        </form>
    </section>
)