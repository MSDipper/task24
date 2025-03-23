import { useState } from 'react'
import styles from './Search.module.scss'
import classNames from 'classnames';
import { Button } from '../Button';


type SearchStyles = 'small';

interface SearchProps {
    onSearch: (query: string) => void
    text?: string
    size: SearchStyles;
    className?: string;

}

export const Search = ({ onSearch, text, className, size }: SearchProps) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };
    const searchSize = styles[`component-${size}`]
    const searchAllStyles = classNames(
      styles.component,
      searchSize,
      className,
    )

    return (
        <div className={searchAllStyles}>
            <Button onClick={handleSearch} className={styles.button}>
                <img src="/assets/icons/search.png" alt="Поиск" />
            </Button>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={text}
                className={styles.input}
            />
        </div>
    );
};
