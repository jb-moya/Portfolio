import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface MenuStates {
    [key: string]: boolean;
}

interface NavbarState {
    menuStates: MenuStates;
}

const initialState: NavbarState = {
    menuStates: {
        Home: false,
        About: false,
        Skills: false,
        Projects: false,
        Contacts: false,
    },
};

const navbarSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setMenuState: (
            state,
            action: PayloadAction<{ name: string; value: boolean }>
        ) => {
            console.log(action.payload.name);
            state.menuStates[action.payload.name] = action.payload.value;
        },
        resetMenuState: (state) => {
            state.menuStates = initialState.menuStates;
        },
    },
});

export default navbarSlice.reducer;

export const { setMenuState, resetMenuState } = navbarSlice.actions;
