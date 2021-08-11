import React from 'react'

const FooterLinks = (props) => {
    return (
        <a href={props.link}>
            <img src={props.img} alt={props.alt} width={props.width} />
        </a>
    )
}

export default FooterLinks