import { useState } from "react"
import { buildingFloor } from '../Redux/RootReducer'
import { Button } from 'antd';
import 'antd/dist/antd.css';
import styles from '../css/styles.module.css'


const FloorMany = ({ dispatch, cancelHandler, count }) => {
    const [floor, setFloor] = useState()

    const next = () => {
        dispatch(buildingFloor(floor))
        setFloor('')
    }

    return (
        <div>
            <h3>Шаг {count}</h3>
            <div className={styles.body}>
                <div className={styles.bodyHeader}>
                    <p className={styles.question}>Количество этажей (число):</p>
                </div>
                <div className={styles.bodyBody}>
                    <input type="text" value={floor} placeholder='Введите кол-во этажей' onChange={event => setFloor(event.target.value)} />
                </div>
            </div>
            <div className={styles.buttons} >
                <Button onClick={() => cancelHandler()} size='large'>Отмена</Button>
                <Button onClick={() => next()} size='large'>Далее</Button>
            </div>
        </div>
    )

}

export default FloorMany