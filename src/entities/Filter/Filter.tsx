import { Button } from "../../components/Button";
import { Images } from "../../components/Images/Image";
import { Search } from "../../components/Search"
import { Select } from "../../components/Select"
import { Calendar } from "../../features/Calendar";
import styles from './Filter.module.scss'
import { useState, useEffect } from 'react';


export const Filter = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleSearch = (query: string) => {
        console.log('Search query:', query);
    };

    const selectConfigs = [
        { placeholder: "Все нейросети", size: "medium" },
        { placeholder: "Все теги", size: "medium" },
        { placeholder: "Тип файлов", size: "small" } 
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1100) {
                setCollapsed(false);
            } else {
                setCollapsed(true);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`${styles['component']} ${collapsed ? styles['collapsed'] : ''}`}>
            <Search size='small' text="Поиск медиа файлов по названию или ID" onSearch={handleSearch} />
            <Button className={styles['toggle-button']} size="small" onClick={() => setCollapsed(!collapsed)}>
                <Images className={styles['image-mini']} images={['/assets/icons/menu-btn.png']}/>
            </Button>
            {!collapsed && (
                <>
                    {selectConfigs.map((config, index) => (
                        <Select
                            key={index}
                            size={config.size}
                            placeholder={config.placeholder}
                        />
                    ))}
                    <Calendar />
                    <Images className={styles['image']} images={['/assets/icons/menu-btn.png']}/>
                    <Button className={styles['component-button__add']} size="big" style="accent">Добавить</Button>
                </>
            )}
        </div>
    )
}
export default Filter