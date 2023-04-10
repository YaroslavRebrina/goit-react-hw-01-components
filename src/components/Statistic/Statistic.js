import PropTypes from 'prop-types';
import { StatisticChip } from './StatisticChip/StatisticChip';
import css from './Statistic.module.css';

export const Staticstic = ({ title, data }) => (
  <section className={css.statistic}>
    {title && <h2 className={css.title}>{title}</h2>}
    <ul className={css.statlist}>
      {data.map(item => {
        return StatisticChip(item);
      })}
    </ul>
  </section>
);

Staticstic.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
