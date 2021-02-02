import React from 'react';
import { connect } from 'react-redux'

const Avatar = ({ user: { user } }) => {

    const initials = user.firstName.charAt(0) + user.lastName.charAt(0)

    return (
        <div className='avatar'>{initials}</div>
    )
}
const mapStateToProps = state => ({
    user: state.user
})
export default connect(mapStateToProps,{})(Avatar)
