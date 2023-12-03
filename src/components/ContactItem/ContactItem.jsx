import React from 'react';
import { deleteContact } from '../../redux/contacts/contOperations';
import { useDispatch } from 'react-redux';
import {
  ItemEl,
  ContactData,
  ContactName,
  ContactNumber,
  ContactDelete,
} from './ContactItem.styled';

export const ContactItem = ({contact: { name, number, id }}) => {
  
  const dispatch = useDispatch();

  return (
    <ItemEl>
      <ContactData>
        <ContactName>{name}</ContactName>
        <ContactNumber>{number}</ContactNumber>
      </ContactData>
      <ContactDelete type="button" onClick={() => dispatch(deleteContact(id))}>
        &times;
      </ContactDelete>
    </ItemEl>
  );
};