import PropTypes from 'prop-types';
import { Wrapper, ImgWrap, ImgAvatar, Name, Text, StatList, StatItem, ItemStats } from './Profile.styled';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Wrapper>
      <ImgWrap>
        <ImgAvatar src={avatar} alt={username} className="avatar" />
        <Name>{username}</Name>
        <Text>{tag}</Text>
        <Text>{location}</Text>
      </ImgWrap>

      <StatList>
        <StatItem>
          <span className="label">Follovers</span>
          <ItemStats>{followers}</ItemStats>
        </StatItem>
        <StatItem>
          <span className="label">Views</span>
          <ItemStats>{views}</ItemStats>
        </StatItem>
        <StatItem>
          <span className="label">Likes</span>
          <ItemStats>{likes}</ItemStats>
        </StatItem>
      </StatList>
    </Wrapper>
  );
};

Profile.prototype = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
