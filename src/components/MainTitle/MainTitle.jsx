import React from 'react'

const MainTitle = (props) => {
    return (
        <section className="about">
            <div className="about-title">
                <h1>{props.title}</h1>
            </div>
        </section>
    )
}

export default MainTitle