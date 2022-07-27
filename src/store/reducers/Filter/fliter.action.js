import { filterTypes } from "./filter.types"

export const AddfilterAction = (filter) => ({
    type: filterTypes.ADD_FILTER,
        payload: filter
})
