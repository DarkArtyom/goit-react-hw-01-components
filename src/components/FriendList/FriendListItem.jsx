import PropTypes from 'prop-types';
import { Image, StatusOnline, Item } from './FriendList.styled';

export const FriendListItem = ({ friend }) => {
  return (
    <Item>
      <StatusOnline online={friend.isOnline}></StatusOnline>
      <Image src={friend.avatar} alt={friend.name} width="20" />
      <p className="name">{friend.name}</p>
    </Item>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
