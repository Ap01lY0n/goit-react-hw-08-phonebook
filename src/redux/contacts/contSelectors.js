import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from "../filter/filterSelector";
export const selectContacts = state => state.contacts.items;

export const selectError = state => state.contacts.error;
export const selectLoading = state => state.contacts.isLoading;


export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter ],
  
  (contacts, filter) => {
     
    const normalizedFilter = filter.toLowerCase(); 
      
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  })