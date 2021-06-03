import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from '../Actions/Basket';
import { ADD_ORDER } from '../Actions/Order';
import CartItem from '../../Model/BasketItem';

const initialState = {
  items: {},
  totalAmount: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      const addedProduct = action.product;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;
      const quantity = action.quantity;

      let updatedOrNewCartItem;

      if (state.items[addedProduct.id]) {
        updatedOrNewCartItem = new CartItem(
          state.items[addedProduct.id].quantity + quantity,
          prodPrice,
          prodTitle,
          state.items[addedProduct.id].sum + (prodPrice * quantity)
        );
      } else {
        updatedOrNewCartItem = new CartItem(quantity, prodPrice, prodTitle, (prodPrice * quantity));
      }
      return {
        ...state,
        items: { ...state.items, [addedProduct.id]: updatedOrNewCartItem },
        totalAmount: state.totalAmount + (prodPrice*quantity)
      };
      case REMOVE_FROM_BASKET:
        const selectedCartItem = state.items[action.pid];
        const currentQty = selectedCartItem.quantity;
        let updatedCartItems;
        if (currentQty > 1) {
          const updatedCartItem = new CartItem(
            selectedCartItem.quantity - 1,
            selectedCartItem.productPrice,
            selectedCartItem.productTitle,
            selectedCartItem.sum - selectedCartItem.productPrice
          );
          updatedCartItems = { ...state.items, [action.pid]: updatedCartItem };
        } else {
          updatedCartItems = { ...state.items };
          delete updatedCartItems[action.pid];
        }
        return {
          ...state,
          items: updatedCartItems,
          totalAmount: state.totalAmount - selectedCartItem.productPrice
        };
        case ADD_ORDER:
          return initialState;
  }
  return state;
};
