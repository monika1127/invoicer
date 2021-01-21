import React, { Component } from 'react';
import PropTypes from 'prop-types'
import TopBar from '../topBar/TopBar'
import './card.css'
class Card extends Component {

    static propTypes = {
        size: PropTypes.oneOf(['large', 'small']),
        cardName: PropTypes.string.isRequired,
        variant: PropTypes.oneOf(['secondary', 'neutral'])
    }

    render() {

        const { size, cardName, variant } = this.props

        return (
            <div className={`form__container -${size}`}>
                <TopBar title={cardName} color={variant} />
                <div className='form__container-body'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default Card