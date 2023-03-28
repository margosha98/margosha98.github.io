import React from 'react'
import classes from './ErrorComponent.module.scss'
import cat from '../../assets/image/pers.png'

function ErrorComponent() {
    return (
        <div className={classes.root}>
            <img className='image' src={cat} />

            <h2> Страница не найдена...</h2>
        </div>

    )
}

export default ErrorComponent;