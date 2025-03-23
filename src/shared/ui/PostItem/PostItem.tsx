import styles from './PostItem.module.scss'
import { Title } from '../../../components/Title'
import { Images } from '../../../components/Images/Image';
import { Tag } from '../../../components/Tag';
import { Button } from '../../../components/Button';

export interface PostItemProps {
    title?: string
    image?: string
    id?: string
    typeFile?: string
    date?: string
    tags?: { tag: string, color: string }[]
    countFiles?: number
    format?: string
    aiImages?: string[]
    color?: string
    count?: number
    onClick?: (item: string) => void
}

export const PostItem = ({ title, image, id, typeFile, date, tags, countFiles, aiImages, count }: PostItemProps) => {


    return (
        <div className={styles['component']}>
            <div className={styles['component-top']}>
                <img className={styles['component-top__image']} src="/assets/icons/film.svg" alt="Film" />
                <Title className={styles['component-top__title']} tag='h3'>
                    {title}
                </Title>
            </div>
            <img className={styles['component-image']} src={image} alt="Фоновое изображение" />
            <div className={styles['content']}>
                <div className={styles['content-id']}>
                    <p>ID</p>
                    <div className={styles['content-id__copy']}>
                        <span>{id ? `${id.slice(0, 4)}…${id.slice(-4)}` : 'N/A'}</span>
                        <img src="/assets/icons/clone.png" alt="Скопировать" />
                    </div>
                </div>
                <div className={styles['content-files']}>
                    <div className={styles['content-files__type']}>
                        <p>Тип файлов</p>
                        <div className={styles['content-type__format']}>
                            <img src="/assets/icons/format.png" alt="Формат" />
                            <span>{typeFile}</span>
                        </div>
                    </div>
                    <div className={styles['content-files__count']}>
                        <p>Количество файлов</p>
                        <span>{countFiles}</span>
                    </div>
                </div>
                <div className={styles['content-date']}>
                    <p>Дата создания</p>
                    <span>{date}</span>
                </div>
                <div className={styles['content-tag']}>
                    <p>Теги</p>
                    <div className={styles['content-tag__list']}>
                        {tags?.map((tagItem, index) => (
                            <Tag key={index} color={tagItem.color}>{tagItem.tag}</Tag>
                        ))}
                        <Button className={styles['content-tag__button']} style='primary' size='small'>
                            <img src="/assets/icons/arrow.png" alt="Кнопка" />
                        </Button>
                    </div>
                </div>
                <div className={styles['content-ai']}>
                    <p>Нейросети</p>
                    <div className={styles['content-ai__list']}>
                        {aiImages && <Images images={aiImages} />}
                        <Button className={styles['content-tag__button']} style='primary' size='small'>
                            <img src="/assets/icons/arrow.png" alt="Кнопка" />
                        </Button>
                    </div>
                </div>
                
                <div className={styles['content-count']}>
                <div className={styles['content-count__view']}>
                    <p>Количество</p>
                    <img src="/assets/chart.png" alt="Диаграмма" />
                    <span>{count}</span>
                    <img src="/assets/eye.png" alt="Просмотр" />
                    </div>
                    <div className={styles['content-count__settings']}>

                    <div className={styles['content-ai__list']}>
                    Управление
                        <Button className={styles['content-tag__button']}>
                            <img src="/assets/setting.png" alt="Настройки" />
                        </Button>
                    </div>
                </div>
                </div>

            </div>
        </div>
    )
}