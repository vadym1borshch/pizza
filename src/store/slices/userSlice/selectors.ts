import {RootState} from "@/store/store";

export const userSelector = (state: RootState) => state.user.user
export const orderSelector = (state: RootState) => state.user.order