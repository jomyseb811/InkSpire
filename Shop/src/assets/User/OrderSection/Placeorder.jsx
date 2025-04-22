import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../AllBooks.jsx/Cartcontext';

export default function CheckoutFormik() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    address: Yup.string().required('Address is required'),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone must be 10 digits')
      .required('Phone is required'),
    paymentMethod: Yup.string().required('Select a payment method'),
  });

  const handlePlaceOrder = (values) => {
    const userId = localStorage.getItem('loggedUserId');

    if (!userId) {
      alert('Please login to continue.');
      return navigate('/login');
    }

    if (cartItems.length === 0) {
      alert('Your cart is empty.');
      return;
    }

    const order = {
      userId,
      shipping: {
        name: values.name,
        address: values.address,
        phone: values.phone,
      },
      paymentMethod: values.paymentMethod,
      items: cartItems,
      date: new Date().toISOString(),
    };

    console.log('Order placed:', order);
    alert('Order placed successfully!');
    clearCart();
    navigate('/order-success');
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow mt-10">
      <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Checkout</h2>

      <Formik
        initialValues={{
          name: '',
          address: '',
          phone: '',
          paymentMethod: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handlePlaceOrder}
      >
        {() => (
          <Form className="space-y-4">
            <div>
              <Field
                name="name"
                placeholder="Your Name"
                className="w-full p-3 border rounded"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <Field
                name="address"
                placeholder="Shipping Address"
                className="w-full p-3 border rounded"
              />
              <ErrorMessage name="address" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <Field
                name="phone"
                placeholder="Phone Number"
                className="w-full p-3 border rounded"
              />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <Field
                as="select"
                name="paymentMethod"
                className="w-full p-3 border rounded"
              >
                <option value="">Select Payment Method</option>
                <option value="cod">Cash on Delivery</option>
                <option value="upi">UPI</option>
                <option value="card">Card</option>
              </Field>
              <ErrorMessage name="paymentMethod" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded font-semibold"
            >
              Place Order
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
