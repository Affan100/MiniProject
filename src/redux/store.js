import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import axios from 'axios'
axios.defaults.withCredentials = true
import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import axios from 'axios'
axios.defaults.withCredentials = true
const initialForm = {
    Productname: '',
    price: 0,
    quality: '',
    img: ''
}

const initAuthData = {
    accessToken: null,
    psuInfo: null,
}

export const productActions = {
    getProductsSuccess: products => ({
        type: 'GET_PRODUCTS_SUCCESS', products
    }),
    getProductsFailed: () => ({ type: 'GET_PRODUCTS_FAILED' }),
    getProducts: () => async (dispatch) => {
        try {
            console.log('get product new')
            const response = await axios.get(`http://localhost/api/product`)
            const responseBody = await response.data;
            console.log('response: ', responseBody)
            dispatch({ type: 'GET_PRODUCTS_SUCCESS', products: responseBody });
        } catch (error) {
            console.error(error);
            dispatch({ type: 'GET_PRODUCTS_FAILED' });
        }
    },
    addBear: (products, form) => ({
        type: 'ADD_PRODUCT', products: {
            id: products.length > 0 ? products[products.length - 1].id + 1 : 0,
            ...form
        }
    }),
    deleteProduct: (id) => ({ type: 'DELETE_PRODUCT', id: id }),
    updateProduct: (id, form) => ({ type: 'UPDATE_PRODUCT', id: id, product: { ...form, id: id } })
}

export const AuthActions = {
    getLoginStatus: () => async (dispatch) => {
        const res = await axios.get(`http://localhost/api/auth`)
        dispatch({ type: 'GET_LOGIN_ATATUS', payload: res.data });
    },

    logout: () => async (dispatch) => {
        const res = await axios.get(`http://localhost/api/auth/logout`)
        dispatch({ type: 'LOGOUT' })
    }
}

const AuthReducer = (data = initAuthData, action) => {
    switch (action.type) {
        case 'GET_LOGIN_ATATUS': return action.payload;
        case 'LOGOUT': return initAuthData
        default: return data
    }
}

export const formActions = {
    changeName: (Productname) => ({ type: 'CHANGE_PRODUCTNAME', Productname: Productname }),
    changeWeight: (price) => ({ type: 'CHANGE_PRICE', price: price }),
    changeWeight: (quality) => ({ type: 'CHANGE_QUALITY', quality: quality }),
    changeImg: (img) => ({ type: 'CHANGE_IMG', img: img })
}

const productReducer = (products = [], action) => {
    switch (action.type) {
        case 'GET_PRODUCT':
            return action.products
        case 'ADD_PRODUCT':
            return [...products, action.products]
        case 'DELETE_PRODUCT':
            return products.filter((product, index) => +product.id !== +action.id)
        case 'UPDATE_PRODUCT':
            return products.map((product, index) => {
                if (+product.id === +action.id) {
                    return action.product;
                }
                else {
                    return product;
                }
            })
        case 'GET_PRODUCTS_SUCCESS':
            console.log('action: ', action.productS)
            return action.productS
        case 'GET_PRODUCTS_FAILED':
            console.log('action: Failed')
            return action.productS

    }
    return productS;
}
const formReducer = (data = initialForm, action) => {
    switch (action.type) {
        case 'CHANGE_PRODUCTNAME':
            return {
                ...data,
                Productname: action.Productname //chagne only name
            }
        case 'CHANGE_PRICE':
            return {
                ...data,
                price: action.price //chagne only name
            }
        case 'CHANGE_QUALITY':
            return {
                ...data,
                quality: action.quality //chagne only name
            }
        case 'CHANGE_IMG':
            return {
                ...data,
                img: action.img //chagne only name
            }
        default: return data;
    }
}
const reducers = combineReducers({
    product: productReducer,
    form: formReducer,
    Auth: AuthReducer
})

export const store = createStore(reducers, applyMiddleware(logger, thunk));