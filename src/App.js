import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import BuildingType from "./Components/BuildingType"
import FloorMany from "./Components/FloorMany"
import MaterialType from "./Components/MaterialType"
import ResultCalc from "./Components/Result"
import Size from "./Components/Size"
import { clearStore } from './Redux/RootReducer';

//неизменный заголовок и изменяемая контентная часть
function App() {
    const dispatch = useDispatch()
    const count = useSelector(state => state.count);
    const page = useSelector(state => state.page)

    const cancelHandler = () => {
        dispatch(clearStore())
    }

    return (
        <div className="App">
            <h1>Калькулятор цены конструкций</h1>
            <div>
                {page === 1 ? (<BuildingType dispatch={dispatch} cancelHandler={cancelHandler} count={count} />
                ) : page === 2 ? (<FloorMany dispatch={dispatch} cancelHandler={cancelHandler} count={count} />
                ) : page === 3 ? (<MaterialType dispatch={dispatch} cancelHandler={cancelHandler} count={count} />
                ) : page === 4 ? (<Size dispatch={dispatch} cancelHandler={cancelHandler} count={count} />
                ) : <ResultCalc cancelHandler={cancelHandler} />
                }
            </div>
        </div>
    );
}

export default App;
