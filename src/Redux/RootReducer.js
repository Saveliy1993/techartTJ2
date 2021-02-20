import axios from "axios"

//fix types
const CLEAR_STORE = 'CLEAR_STORE'
const BUILDING_TYPE = 'BUILDING_TYPE'
const BUILDING_FLOOR = 'BUILDING_FLOOR'
const BUILDING_MATERIAL = 'BUILDING_MATERIAL'
const GET_RESULT = 'GET_RESULT'

//Globalstate
const initialState = {
    count: 1,      //default values
    building: null,
    floor: null,
    material: null,
    sizeX: null,
    sizeY: null,
    page: 1,

    result: null, //responce from server
    message: null,
}

//Globalreducer
export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_STORE:
            return initialState //возвращаем изначальные знач
        case BUILDING_TYPE:
            let newPage = action.data === 1 ? 2 : 3
            return { ...state, building: action.data, page: newPage, count: state.count + 1 }
        case BUILDING_FLOOR:
            return { ...state, floor: action.data, page: 3, count: state.count + 1 }
        case BUILDING_MATERIAL:
            return { ...state, material: action.data, page: 4, count: state.count + 1 }
        case GET_RESULT:
            return { ...state, ...action.data, page: 5 }
        default:
            return state
    }
}

//ROOTactioncreators:
export const clearStore = () => ({ type: CLEAR_STORE })

//BUILDINGTYPE
const buildingTypeAC = (data) => ({ type: BUILDING_TYPE, data })
export const buildingType = (data) => (dispatch) => {
    dispatch(buildingTypeAC(data))
}

//BUILDINGHIGHT
const buildingFloorAC = (data) => ({ type: BUILDING_FLOOR, data })
export const buildingFloor = (data) => (dispatch) => {
    dispatch(buildingFloorAC(data))
}

//BuildingMaterial
const buildingMaterialAC = (data) => ({ type: BUILDING_MATERIAL, data })
export const buildingMaterial = (data) => (dispatch) => {
    dispatch(buildingMaterialAC(data))
}

//getresult
export const getResult = (data) => async (dispatch, getState) => {
    const { building, floor, material } = getState()
    try {
        const response = await axios.get(
            `https://data.techart.ru/lab/json/?building=${building}&height=${floor}&material=${material}&sizex=${data.sizeX}&sizey=${data.sizeY}`)
        const { result, message } = response.data
        dispatch({ type: GET_RESULT, data: { result, message } })

    } catch (err) {
        console.log(err)
    }

}

