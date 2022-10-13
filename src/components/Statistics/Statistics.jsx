import PropTypes from 'prop-types';
import {Name, StatisticsSection, StatItem, StatList} from "./Statistics.styled";


export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      <Name>{title}</Name>
      <StatList>
        {stats.map(stat => {
          return (
            <StatItem key={stat.id}>
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </StatItem>
          );
        })}
      </StatList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
