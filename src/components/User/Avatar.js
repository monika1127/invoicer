import React from 'react';
import { connect } from 'react-redux'
import { userSelector } from '../../redux/user/selectors';

const Avatar = ({ user: { user } }) => {

    const initials = user.firstName.charAt(0) + user.lastName.charAt(0)

    return (
        <div className='avatar'>{initials}</div>
    )
}
const mapStateToProps = state => ({
    user: userSelector(state)
})
export default connect(mapStateToProps)(Avatar)
