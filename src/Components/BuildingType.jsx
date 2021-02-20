import { Link } from 'react-router-dom'
import { buildingType } from '../Redux/RootReducer'
import { Button } from 'antd';
import 'antd/dist/antd.css';
import styles from '../css/styles.module.css'



const BuildingType = ({ next, cancelHandler, dispatch, count }) => {
    return (
        <div>
            <h3>Шаг {count}</h3>
            <div className={styles.body}>
                <div className={styles.bodyHeader}>
                    <p className={styles.question}>Что будем строить?</p>
                </div>
                <div className={styles.bodyBody}>
                    <ul className={styles.bodyContent} onClick={event => dispatch(buildingType(event.target.value))}>
                        <Link to='#'><li value='1'>Жилой дом</li> </Link>
                        <Link to='#'> <li value='2'>Гараж</li> </Link>
                    </ul>
                </div>
            </div>
            <div className={styles.buttons} >
                <Button onClick={() => cancelHandler()} size='large' disabled>Отмена</Button>
                <Button onClick={() => next('/material')} size='large' disabled>Далее</Button>
            </div>
        </div>
    )
}

export default BuildingType
