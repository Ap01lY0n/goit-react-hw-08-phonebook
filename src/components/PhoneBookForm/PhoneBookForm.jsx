import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  MyForm,
  MyField,
  Label,
  InputContainer,
  ButtonForm,
  ErrorMsg,
} from './PhoneBookForm.styled';
import { addContact } from '../../redux/contacts/contOperations';
import { selectContacts } from '../../redux/contacts/contSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, 'Only letters are allowed')
    .min(3, 'Too Short!')
    .required('This field is required, please fill it'),
    number: Yup.string()
    .matches(/^\d{3}-\d{3}-\d{4}$/, 'Must be in format: 000-000-0000')
    .required('This field is required, please fill it'),
});

const FormContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const finalContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
  
    const identContactName = contacts.find(contact => contact.name === name);

    if (identContactName) {
      return toast.info(`is already in contacts`, 'ok');
    }
    
    dispatch(addContact(finalContact));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={formSchema}
        onSubmit={handleSubmit}
      >
        <MyForm>
          <InputContainer>
            <Label htmlFor="name">Name</Label>
            <MyField type="text" name="name" placeholder="" />
            <ErrorMsg name="name" component="div" />
          </InputContainer>

          <InputContainer>
            <Label htmlFor="number">Number</Label>
            <MyField type="tel" name="number" placeholder="" />
            <ErrorMsg name="number" component="div" />
          </InputContainer>
          <ButtonForm type="submit">Add contact</ButtonForm>
        </MyForm>
      </Formik>
      <ToastContainer />
    </>
  );
};
export default FormContact;