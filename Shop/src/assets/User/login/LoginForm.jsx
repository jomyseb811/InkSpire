// LoginForm.js
import { useFormik } from 'formik';
import { loginSchema } from './ValidationSchemas';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function LoginForm({ flipBookRef, flipBack }) {

const navigate =useNavigate()

  const formik = useFormik({
    initialValues: { email: '', password: '' },

    validationSchema: loginSchema,

    onSubmit : async (values) =>{
    try{

      const response =  await axios('http://localhost:3000/user')
      const user = response.data.find(
        (u) => u.email === values.email && u.password === values.password
      );

      localStorage.setItem('email',user.email)
      localStorage.setItem('password',user.password)
      console.log(user.username)
      toast.success(`Welcome,${user.username}`)
      
      navigate('/home')
    } catch(error){
      console.error('Login error :',error);
      toast.error('An error occured. please try again later')
      
    }
   }
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
        <form onSubmit={formik.handleSubmit} className="space-y-5">
          {['email', 'password'].map((field) => (
            <div key={field} className="space-y-1">
              <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">
                {field === 'password' ? 'Password' : 'email'}
              </label>
              <input
                id={field}
                name={field}
                type={field === 'password' ? 'password' : 'email'}
                value={formik.values[field]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="block px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all w-full"
              />
              {formik.touched[field] && formik.errors[field] && (
                <p className="mt-1 text-sm text-red-600">{formik.errors[field]}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
          >
            Login
          </button>

          <p className="text-sm text-center text-gray-600 mt-4">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={flipBack}
              className="flip-trigger font-medium text-green-600 hover:text-green-500"
            >
              Register
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
