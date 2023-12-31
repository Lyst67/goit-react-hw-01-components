import css from './Statistics.module.css'
import { getRandomHexColor } from 'getRandomHexColor';
import PropTypes from "prop-types";


export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}> 

             {title.length > 0 && (
               <h2 className={css.title}>Upload stats</h2>
             )}

             <ul className={css.statList}>
                {stats.map(({ id, label, percentage }) =>
                (<li key={id} className={css.item} style={{ backgroundColor: getRandomHexColor() }} >
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage} %</span>
                 </li>))}
             </ul>
     </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })).isRequired,
};
