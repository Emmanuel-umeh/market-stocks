import { ADD_PRODUCT } from "../types/product.types";

import { Dispatch } from "hoist-non-react-statics/node_modules/@types/react";
import { Product } from "../../declarations/types";

// Make a request to be pikcked up
export const addProduct =
  (product: Product) => async (dispatch: Dispatch<any>) => {
    try {
      dispatch({
        type: ADD_PRODUCT,
        order: product,
      });
    } catch {
      (err: any) => {
        console.log(
          "error!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ",
          err
        );
      };
    }
  };
