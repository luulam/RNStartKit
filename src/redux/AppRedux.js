import _ from 'lodash'
import Immutable from 'seamless-immutable'
import { createReducer, createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
    addNotify: ['id', 'title'],
    removeNotify: ['id'],
    putNotify: ['title'],
    showDialog: ['title', 'message', 'button'],
    hideDialog: null,

    dialog: ['title', 'message', 'button', 'show']
})

export const AppTypes = Types
export const AppCreators = Creators

const INITIAL_STATE = {
    notifys: [],
    dialog: {
        title: '',
        message: '',
        button: [],
        show: false
    }
};

export const addNotify = (state, { id, title }) => {
    return Immutable(state).merge({
        notifys: _.concat(state.notifys, { id: id, title: title })
    })
}

export const removeNotify = (state, { id }) => {
    return Immutable(state).merge({
        notifys: _.filter(state.notifys, noti => noti.id != id)
    });
}

export const showDialog = (state, { title, message, button }) => {
    return Immutable(state).merge({
        dialog: AppCreators.dialog(title, message, button || [], true)
    });
}

export const hideDialog = (state) => {
    return Immutable(state).merge({
        dialog: AppCreators.dialog('', '', [], false)
    });
}

export default createReducer(INITIAL_STATE, {
    [Types.ADD_NOTIFY]: addNotify,
    [Types.REMOVE_NOTIFY]: removeNotify,
    [Types.SHOW_DIALOG]: showDialog,
    [Types.HIDE_DIALOG]: hideDialog,
})