// RegisterForm.js
import { useFormik } from 'formik';
import { registerSchema } from './ValidationSchemas';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {  toast } from 'react-toastify';

export default function RegisterForm() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      
      username: '',
      email: '',
      password: '',
      confirmpassword: "",
      phone: '',
      cart: [],
      order: []
    },
    validationSchema: registerSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log("form data", values);
  
        const existingUsername = await axios.get('http://localhost:3000/user', {
          params: { username: values.username }
        });
  
        if (existingUsername.data.length > 0) {
          toast.error("Username already exists!");
          return;
        }
  
        const existingEmail = await axios.get('http://localhost:3000/user', {
          params: { email: values.email }
        });
  
        if (existingEmail.data.length > 0) {
          toast.error("Email already exists!");
          return;
        }
  
        const { confirmpassword, ...userData } = values;
  
  const response = await axios.post('http://localhost:3000/user', userData);
  
  localStorage.setItem("loggedUserId", response.data.id);

        console.log("registration success", userData);
        toast.success("Registered successfully");
  
        resetForm();
        console.log("happensd")
        navigate('/log');
  
      } catch (error) {
        console.log("registration failed", error);
        toast.error('Registration failed');
      }
    }
  });


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
  <div className="  bg-white p-6 rounded-xl shadow-md">

    <form onSubmit={formik.handleSubmit} className="space-y-5">
      {['username', 'email', 'password', 'confirmpassword'].map((field) => (
        <div key={field} className="space-y-1">
          <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">
          {field === 'confirmpassword' ? 'Confirm Password' : field.charAt(0).toUpperCase() + field.slice(1)}
          
          </label>
          
          <input
            id={field}
            name={field}
            type={field === 'password' || field === 'confirmpassword' ? 'password' : 'text'}

            value={formik.values[field]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          />
          {formik.touched[field] && formik.errors[field] && (
            <p className="mt-1 text-sm text-red-600">{formik.errors[field]}</p>
          )}
        </div>
      ))}
      
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <PhoneInput
          country={'in'}
          value={formik.values.phone}
          onChange={(phone) => formik.setFieldValue('phone', phone)}
          inputClass=" px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          buttonClass="border-gray-300"
          dropdownClass="border-gray-300 shadow-sm"
        />
        {formik.errors.phone && (
          <p className="mt-1 text-sm text-red-600">{formik.errors.phone}</p>
        )}
      </div>

      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >Register
      </button>
      <p className="text-sm text-center text-gray-600 mt-4">
        Already have an account?{ }
        <button
        type="button"
        className="flip-trigger font-medium text-blue-600 hover:text-blue-500"
        onClick={()=>navigate('/log')}
      >
  Login
</button>
      </p>
    </form>
    </div>
    </div>
  );
}
