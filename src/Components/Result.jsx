import { useSelector } from "react-redux"
import { Button } from 'antd';
import 'antd/dist/antd.css';
import styles from '../css/styles.module.css'


const ResultCalc = ({ cancelHandler }) => {
    const message = useSelector(state => state.message)
    const result = useSelector(state => state.result)
    return (
        <div>
            <div className={styles.body}>
                <div className={styles.bodyHeader}>
                    {result === 'ok' ? <p className={styles.question}>Успешно</p> : <p className={styles.question}>Ошибка</p>}
                </div>
                <div className={styles.bodyBody}>
                    <p style={{ color: result === "ok" ? "blue" : "red" }}>{message}</p>
                </div>
            </div>
            <div className={styles.buttons} >
                <Button onClick={() => { cancelHandler() }} size='large'>Новый расчёт</Button>
            </div>
        </div>
    )
}

export default ResultCalc
