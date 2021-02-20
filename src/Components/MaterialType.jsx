import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { buildingMaterial } from '../Redux/RootReducer'
import { Button } from 'antd';
import 'antd/dist/antd.css';
import styles from '../css/styles.module.css'



const MaterialType = ({ cancelHandler, dispatch, next, count }) => {
    const buildType = useSelector(state => state.building) //hook
    return (
        <div>
            <h3>Шаг {count}</h3>
            <div className={styles.body}>
                <div className={styles.bodyHeader}>
                    <p className={styles.question} >Материал стен:</p>
                </div>
                <div className={styles.bodyBody}>
                    <ul className={styles.bodyContent} onClick={event => dispatch(buildingMaterial(event.target.value))}>
                        <Link to='#'>
                            <li value='2'>Шлакоблок</li>
                        </Link>
                        <Link to='#'>
                            {buildType === 1 ? <li value='1'>Кирпич</li> : <li value='4'>Металл</li>}
                        </Link>
                        <Link to='#'>
                            {buildType === 1 ? <li value='3'>Деревянный брус</li> : <li value='5'>Сендвич-панели</li>}
                        </Link>
                    </ul>
                </div>
            </div>
            <div>
                <Button onClick={() => { cancelHandler() }} size='large'>Отмена</Button>
                <Button onClick={() => { next('/size') }} size='large' disabled>Далее</Button>
            </div>
        </div>
    )

}

export default MaterialType
