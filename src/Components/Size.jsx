import { useState } from "react"
import { getResult } from "../Redux/RootReducer"
import { Button } from 'antd';
import 'antd/dist/antd.css';
import styles from '../css/styles.module.css'



const Size = ({ dispatch, cancelHandler, count }) => {
    const [sizeX, setX] = useState('')
    const [sizeY, setY] = useState('')
    const next = () => {
        dispatch(getResult({ sizeX, sizeY }))
        setX('')
        setY('')
    }
    return (
        <div>
            <h3>Шаг {count}</h3>
            <div className={styles.body}>
                <div className={styles.bodyHeader}>
                    <p className={styles.question} >Длина стен (в метрах):</p>
                </div>
                <div className={styles.bodyBody}>
                    <input value={sizeX} placeholder='Длина' onChange={event => setX(event.target.value)} type="text" />
                    X
                    <input value={sizeY} placeholder='Ширина' onChange={event => setY(event.target.value)} type="text" />
                </div>
            </div>
            <div className={styles.buttons} >
                <Button onClick={() => { cancelHandler() }} size='large'>Отмена</Button>
                <Button onClick={() => { next() }} size='large'>Рассчитать</Button>
            </div>
        </div>
    )
}

export default Size