import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import axios from 'axios';
import Swal from 'sweetalert2';
import { BASE_API_URL } from '../utils/constants';

const ThirdStep = props => {
  const { user } = props;
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      dateOfBirth: user.dateOfBirth,
      mobile: user.mobile
    }
  });

  const onSubmit = async data => {
    try {
      const { user } = props;

      await axios.post(`${BASE_API_URL}/users`, {
        ...user,
        ...data
      });
      Swal.fire('Awesome!', "You're successfully registered!", 'success').then(
        result => {
          if (result.isConfirmed || result.isDismissed) {
            props.resetUser();
            props.history.push('/userlist');
          }
        }
      );
    } catch (error) {
      if (error.response) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data
        });
        console.log('error', error.response.data);
      }
    }
  };

  return (
    <Form className='input-form' onSubmit={handleSubmit(onSubmit)}>
      <motion.div
        className='col-md-6 offset-md-3'
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ stiffness: 150 }}
      >
        <Form.Group controlId='dateOfBirth'>
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type='date'
            name='dateOfBirth'
            placeholder='Enter your birthday'
            value={dateOfBirth}
            ref={register({
              required: 'Birthday is required.'
            })}
            className={`${errors.dateOfBirth ? 'input-error' : ''}`}
            onChange={e => setDateOfBirth(e.target.value)}
          />
          {errors.dateOfBirth && (
            <p className='errorMsg'>{errors.dateOfBirth.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId='mobile'>
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type='number'
            name='mobile'
            placeholder='Enter your mobile number'
            autoComplete='off'
            ref={register({
              required: 'Mobile Number is required.',
              minLength: {
                value: 10,
                message: 'Mobile Number should have at-least 10 characters.'
              }
            })}
            className={`${errors.mobile ? 'input-error' : ''}`}
          />
          {errors.mobile && <p className='errorMsg'>{errors.mobile.message}</p>}
        </Form.Group>

        <Button variant='primary' type='submit'>
          Next
        </Button>
      </motion.div>
    </Form>
  );
};

export default ThirdStep;
