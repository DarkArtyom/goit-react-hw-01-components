import PropTypes from 'prop-types';

import { List, Item,  Image, StatusOnline } from "./FriendList.styled"

export const FriendList = ({ friends }) => {
  return (
    <List className="friend-list">
      {friends.map(friend => {
        return (
          <Item key={friend.id} className="item">
            <StatusOnline online={friend.isOnline}></StatusOnline>
            <Image
              src={friend.avatar}
              alt={friend.name}
              width="20"
            />
            <p className="name">{friend.name}</p>
          </Item>
        );
      })}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      name: PropTypes.string,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};
