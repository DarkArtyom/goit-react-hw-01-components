import PropTypes from 'prop-types';
import { Image, StatusOnline, Item } from './FriendList.styled';

export const FriendListItem = ({ friend }) => {
  const { isOnline, avatar, name, id } = friend;
  return (
    <Item>
      <StatusOnline online={isOnline}></StatusOnline>
      <Image src={avatar} alt={name} width="20" />
      <p className="name">{name}</p>
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
