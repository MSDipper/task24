import styles from './Select.module.scss'
import classNames from 'classnames'
import { Button } from '../Button'


type SelectStyles = 'small' | 'medium'

interface SelectProps {
    value?: string
    placeholder?: string
    size: SelectStyles | any
    className?: string
    onChange?: (value: string) => void
}

export const Select = ({
    placeholder,
    className,
    size,
}: SelectProps) => {

    const componentSize = styles[`component-${size}`]
    const componentClasses = classNames(
        styles.component,
        componentSize,
        className
    )

    return (
        <div className={componentClasses} >
            <div className={styles.inputWrapper}>
                <input
                    readOnly
                    className={styles.input}
                    placeholder={placeholder}
                />
                <Button
                    className={styles['button']}
                >
                    <img src="/assets/icons/select-arrow.svg" alt="Стрелка" />
                </Button>
            </div>

      
        </div>
    )
}