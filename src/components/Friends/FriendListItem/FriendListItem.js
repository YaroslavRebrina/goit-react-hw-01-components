import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';


export const FriendListItem = props => (
  <li key={props.id} className={css.item}>
    <span
      className={
        props.isOnline ? `${css.statusOnline}` : `${css.statusOffline}`
      }
    ></span>
    <img className="avatar" src={props.avatar} alt="User avatar" width="48" />
    <p className="name">{props.name}</p>
  </li>
);

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};
