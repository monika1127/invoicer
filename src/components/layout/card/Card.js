import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { render } from '@testing-library/react';
import TopBar from '../topBar/TopBar'
import './card.css'

class Card extends Component {

static propTypes ={
    size: PropTypes.oneOf(['large', 'small']),
    cardName: PropTypes.string.isRequired,
    cardType: PropTypes.oneOf(['green', 'grey'])
}

render() {

   const {size, cardName, cardType }=this.props

   return (
        <div className={`form__container ${size}`}>
            <TopBar title={cardName} color={cardType} />
            <div className='form__container-body'>
               {this.props.children}
            </div>
        </div>
   )
}
}

export default Card