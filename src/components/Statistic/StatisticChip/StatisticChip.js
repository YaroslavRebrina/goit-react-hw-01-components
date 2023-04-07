import PropTypes from 'prop-types';
import css from './StatisticChip.module.css';
import { getColor } from 'utils/randomNumber';

export const StatisticChip = ({ id, label, percentage }) => (
  <li key={id} className={css.item} style={{ background: getColor(1, 5) }}>
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage + '%'}</span>
  </li>
);

StatisticChip.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
