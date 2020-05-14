import produce from 'immer';

const SELECT_MENU = 'menu/SELECT_MENU';
const SELECT_LAN = 'menu/SELECT_LAN';
const SET_ENABLE_TOP_BTN = 'menu/SET_ENABLE_TOP_BTN';

export const selectMenu = selectedMenu => ({type: SELECT_MENU, selectedMenu});
export const selectLan = lan => ({type: SELECT_LAN, lan});
export const setEnableTopBtn = enableTopBtn => ({type: SET_ENABLE_TOP_BTN, enableTopBtn});

const initialState = {
    menus: [
        {label: '홈', id: '_home'},
        {label: 'RTLS', id: 'rtls'},
        {label: 'LBS', id: 'lbs'},
        {label: '공지사항', id: 'noti'},
        {label: '문의하기', id: 'contact'},
    ],
    selectedMenu: '_home',
    lan: 'ko',
    enableMobileMenu: false,
    enableTopBtn: false,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_MENU:
            return produce(state, draft => {
                draft.selectedMenu = action.selectedMenu;
            });
        case SELECT_LAN:
            return produce(state, draft => {
                draft.lan = action.lan;
            });
        case SET_ENABLE_TOP_BTN:
            return produce(state, draft => {
                draft.enableTopBtn = action.enableTopBtn;
            });
        default:
            return state;
    }
};