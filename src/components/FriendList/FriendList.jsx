import css from './FriendList.module.css'
import PropTypes from "prop-types";

export const FriendList = ({ friends }) => {
    
    return (
        <ul className={css.friendList}>
            {friends.map(({ avatar, id, isOnline, name }) => (
                <li className={css.item} key={id}>
                    <span className={`${css.status} ${isOnline  ? css.online : css.offline}`}></span>
                   
                    <img className={css.avatar} src={avatar} alt="User avatar" />
                    <p className={css.name}>{name}</p>
                </li>
            ))}
           
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