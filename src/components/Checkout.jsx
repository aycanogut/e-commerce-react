import React, { useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCartAction,
  totalPriceAction,
} from "../redux/actions/cartActions";

const Checkout = () => {
  const publishableKey = process.env.REACT_APP_PAYMENT_KEY;
  const dispatch = useDispatch();
  const totalPriceOfCart = () => dispatch(totalPriceAction());
  const { totalPrice } = useSelector((state) => state.cart);
  const clearCart = () => dispatch(clearCartAction());

  useEffect(() => {
    totalPriceOfCart();
  }, [totalPrice]);

  const onToken = (token) => {
    if (token) {
      toast.success("Payment success");
      clearCart();
    }
  };

  return (
    <div>
      <Toaster position="bottom-right" />
      <StripeCheckout
        label="Pay Now"
        name="E-commerce"
        billingAddress
        shippingAddress
        description={`Your total is $ ${totalPrice}`}
        amount={totalPrice * 100}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default Checkout;
