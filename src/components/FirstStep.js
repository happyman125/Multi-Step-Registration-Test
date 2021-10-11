import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const FirstStep = props => {
  const { user } = props;
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    }
  });

  const onSubmit = data => {
    props.updateUser(data);
    props.history.push('/second');
  };

  return (
    <Form className='input-form' onSubmit={handleSubmit(onSubmit)}>
      <motion.div
        className='col-md-6 offset-md-3'
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ stiffness: 150 }}
      >
        <Form.Group controlId='firstName'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='text'
            name='firstName'
            placeholder='Enter your first name'
            autoComplete='off'
            ref={register({
              required: 'First name is required.',
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'First name should contain only characters.'
              }
            })}
            className={`${errors.firstName ? 'input-error' : ''}`}
          />
          {errors.firstName && (
            <p className='errorMsg'>{errors.firstName.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId='lastName'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type='text'
            name='lastName'
            placeholder='Enter your last name'
            autoComplete='off'
            ref={register({
              required: 'Last name is required.',
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'Last name should contain only characters.'
              }
            })}
            className={`${errors.lastName ? 'input-error' : ''}`}
          />
          {errors.lastName && (
            <p className='errorMsg'>{errors.lastName.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            name='email'
            placeholder='Enter your email address'
            autoComplete='off'
            ref={register({
              required: 'Email is required.',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Email is not valid.'
              }
            })}
            className={`${errors.email ? 'input-error' : ''}`}
          />
          {errors.email && <p className='errorMsg'>{errors.email.message}</p>}
        </Form.Group>

        <Button variant='primary' type='submit'>
          Next
        </Button>
      </motion.div>
    </Form>
  );
};

export default FirstStep;
