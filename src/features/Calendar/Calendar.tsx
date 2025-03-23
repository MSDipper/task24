import styles from './Calendar.module.scss'

export const Calendar = () => {
    return (
        <div className={styles['component']}>
            <p className={styles['component-period']}>
                Период
            </p>
            <p className={styles['component-date']}>Дата с</p>
            <div>
                <span>&#x21c0;</span>
                <p className={styles['component-date']}>Дата по</p>
            </div>
            <img src="/assets/icons/calendar.png" alt="Календарь" />
        </div>
    )
}
export default Calendar