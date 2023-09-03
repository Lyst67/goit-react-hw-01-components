import { FriendListItem } from './FriendListItem';
import css from './FriendListItem.module.css'
import PropTypes from "prop-types";

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({ avatar, id, isOnline, name }) => {
                return (
                   <FriendListItem
                    key={id}
                    isOnline={isOnline}
                    avatar={avatar}
                    name={name} />   
                )})}
        </ul>
    )
}

FriendList.propTypes = {
friends: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
  })).isRequired,
}