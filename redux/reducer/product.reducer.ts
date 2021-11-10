import { Product } from "../../declarations/types";
import { GET_PRODUCT, ADD_PRODUCT, PURGE } from "../types/product.types";

interface productState {
  products: Array<string>;

  // when the user has an PRODUCT
}

const initialState: productState = {
  products: [],
};

interface SetLoading {
  type: "SEARCHING_DRIVER";
}

interface MakePRODUCT {
  type: "ADD_PRODUCT";
  product: Product;
}
interface GetProduct {
  type: "GET_PRODUCT";
  product: Product;
}

interface Purge {
  type: "PURGE";
}

type Action = SetLoading | MakePRODUCT | GetProduct | Purge;

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case GET_PRODUCT: {
      return {
        ...state,
        products: action.product,
        type: action.type,
      };
    }

    case ADD_PRODUCT: {
      return {
        ...state,
        type: action.type,
      };
    }

    // fallback to clear storage incase of fatal error
    case PURGE:
      return {
        products: [],
      };

    default:
      return state;
  }
}
