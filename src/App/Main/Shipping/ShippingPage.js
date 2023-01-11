import { useFormik } from 'formik';
import * as yup from 'yup';

import './ShippingPage.css';

const formSchema = yup.object().shape({
  firstName: yup.string().required('Please enter First Name'),
  lastName: yup.string().required('Please enter Last Name'),
  address: yup.string().required('Please enter address'),
  country: yup.string().required('This field is required'),
  zipCode: yup
    .string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(5, 'Must be exactly 5 digits')
    .max(5, 'Must be exactly 5 digits')
    .required('This field is required'),
  city: yup.string().required('Please enter city'),
  region: yup.string().required('Please enter region'),
  phone: yup
    .string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Phone number is not valid'
    )
    .required('This field is required'),
});

const ShippingPage = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      address: '',
      country: 'USA',
      zipCode: '',
      city: '',
      region: '',
      phone: '',
    },
    validationSchema: formSchema,
  });

  return (
    <div className='shipping-page'>
      <h1>Shipping address</h1>
      <form
        className='shipping-form'
        name='shipping-form'
        method='post'
        onSubmit={handleSubmit}
      >
        <div className='row'>
          <div className='col-lg-3'>
            <label htmlFor='first-name'>First Name</label>
          </div>
          <div className='col-lg-9'>
            <input
              id='first-name'
              type='text'
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.firstName && touched.firstName && (
              <div style={{ fontSize: '0.7em', color: 'red' }}>
                {errors.firstName}
              </div>
            )}
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-3'>
            <label htmlFor='last-name'>Last Name</label>
          </div>
          <div className='col-lg-9'>
            <input
              id='last-name'
              type='text'
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lastName && touched.lastName && (
              <div style={{ fontSize: '0.7em', color: 'red' }}>
                {errors.lastName}
              </div>
            )}
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-3'>
            <label htmlFor='address'>Address</label>
          </div>
          <div className='col-lg-9'>
            <input
              id='address'
              type='text'
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.address && touched.address && (
              <div style={{ fontSize: '0.7em', color: 'red' }}>
                {errors.address}
              </div>
            )}
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-3'>
            <label htmlFor='country'>Country</label>
          </div>
          <div className='col-lg-9'>
            <select
              id='country'
              className='three-halfs-width'
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value='USA'>USA</option>
              <option value='Ukraine'>Ukraine</option>
              <option value='Spain'>Spain</option>
              <option value='Italy'>Italy</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-3'>
            {/* TODO: find regexp or ready solution in yup */}
            <label htmlFor='zip-code'>Zip/Postal Code</label>
          </div>
          <div className='col-lg-9'>
            <input
              id='zip-code'
              className='input-half-width'
              type='text'
              value={values.zipCode}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.zipCode && touched.zipCode && (
              <div style={{ fontSize: '0.7em', color: 'red' }}>
                {errors.zipCode}
              </div>
            )}
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-3'>
            <label htmlFor='city'>City</label>
          </div>
          <div className='col-lg-9'>
            <input
              id='city'
              className='three-halfs-width'
              type='text'
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.city && touched.city && (
              <div style={{ fontSize: '0.7em', color: 'red' }}>
                {errors.city}
              </div>
            )}
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-3'>
            <label htmlFor='region'>Region</label>
          </div>
          <div className='col-lg-9'>
            <input
              id='region'
              className='three-halfs-width'
              type='text'
              value={values.region}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.region && touched.region && (
              <div style={{ fontSize: '0.7em', color: 'red' }}>
                {errors.region}
              </div>
            )}
          </div>
        </div>
        <div className='row'>
          {/* TODO: find validator for mobile phone */}
          <div className='col-lg-3'>
            <label htmlFor='phone'>Phone</label>
          </div>
          <div className='col-lg-9'>
            <input
              id='phone'
              className='input-half-width'
              type='text'
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.phone && touched.phone && (
              <div style={{ fontSize: '0.7em', color: 'red' }}>
                {errors.phone}
              </div>
            )}
          </div>
        </div>
        {/* TODO: should be submit button. Validation will be triggered on submit */}
        <button
          type='submit'
          className='shipping-form-botton'
          disabled={isSubmitting}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ShippingPage;
