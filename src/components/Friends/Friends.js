import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';
import css from './Friends.module.css';

export const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(friend => {
      return FriendListItem(friend);
    })}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
