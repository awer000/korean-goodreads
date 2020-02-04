export const initialState = {
  ItemNewSpecial: [],
  Bestseller: [],
  ItemEditorChoice: [],
};

export const FIND_NEW_SPECIAL_LIST_REQUEST = 'FIND_NEW_SPECIAL_LIST_REQUEST';
export const FIND_NEW_SPECIAL_LIST_SUCCESS = 'FIND_NEW_SPECIAL_LIST_SUCCESS';
export const FIND_NEW_SPECIAL_LIST_FAILURE = 'FIND_NEW_SPECIAL_LIST_FAILURE';

export const FIND_BEST_SELLER_LIST_REQUEST = 'FIND_BEST_SELLER_LIST_REQUEST';
export const FIND_BEST_SELLER_LIST_SUCCESS = 'FIND_BEST_SELLER_LIST_SUCCESS';
export const FIND_BEST_SELLER_LIST_FAILURE = 'FIND_BEST_SELLER_LIST_FAILURE';

export const FIND_EDITOR_CHOICE_LIST_REQUEST = 'FIND_EDITOR_CHOICE_LIST_REQUEST';
export const FIND_EDITOR_CHOICE_LIST_SUCCESS = 'FIND_EDITOR_CHOICE_LIST_SUCCESS';
export const FIND_EDITOR_CHOICE_LIST_FAILURE = 'FIND_EDITOR_CHOICE_LIST_FAILURE';

interface BookAction {
  type: string;
  data?: object;
}

export const findNewSpecialListRequestAction = {
  type: FIND_NEW_SPECIAL_LIST_REQUEST,
};
export const findBestSellerListRequestAction = {
  type: FIND_BEST_SELLER_LIST_REQUEST,
};
export const findEditorChoiceListRequestAction = {
  type: FIND_EDITOR_CHOICE_LIST_REQUEST,
};

const reducer = (state = initialState, action: BookAction): object => {
  switch (action.type) {
    case FIND_NEW_SPECIAL_LIST_REQUEST: {
      return {
        ...state,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;
