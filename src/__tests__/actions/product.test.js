import * as actionTypes from "../../redux/actionTypes";
import { getProductsAction } from "../../redux/actions/productActions";
import { mockStore } from "../../setupTests";

const store = mockStore();

describe("product actions", () => {
  it("should return products from api", () => {
    return store.dispatch(getProductsAction()).then(() => {
      const action = store.getActions();

      const expectedAction = {
        type: actionTypes.GET_PRODUCTS,
      };

      expect(action[0].type).toEqual(expectedAction.type);
      expect(action[0].payload).toHaveLength(12);
    });
  });
});
