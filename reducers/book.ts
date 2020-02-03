export const initialState = {
  ItemNewSpecial: [],
  Bestseller: [],
  ItemEditorChoice: [],
}

const FIND_NEW_SPECIAL_LIST_REQUEST = "FIND_NEW_SPECIAL_LIST_REQUEST";
const FIND_BEST_SELLER_LIST_REQUEST = "FIND_BEST_SELLER_LIST_REQUEST";
const FIND_EDITOR_CHOICE_LIST_REQUEST = "FIND_EDITOR_CHOICE_LIST_REQUEST";

interface BookAction {
  type: string,
  data?: object
}

export const findNewSpecialListRequest = {
  type: FIND_NEW_SPECIAL_LIST_REQUEST
}
export const findBestSellerListRequest = {
  type: FIND_BEST_SELLER_LIST_REQUEST
}
export const findEditorChoiceListRequest = {
  type: FIND_EDITOR_CHOICE_LIST_REQUEST
}

const reducer = (state = initialState, action: BookAction) => {
  switch (action.type) {
    case FIND_NEW_SPECIAL_LIST_REQUEST: {
      console.log(FIND_NEW_SPECIAL_LIST_REQUEST)
      return {
        ...state
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default reducer