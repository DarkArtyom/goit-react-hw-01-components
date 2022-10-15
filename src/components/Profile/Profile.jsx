import PropTypes from 'prop-types';
import {
  Wrapper,
  ImgWrap,
  ImgAvatar,
  Name,
  Text,
  StatList,
  StatItem,
  ItemStats,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
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
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ),
};
