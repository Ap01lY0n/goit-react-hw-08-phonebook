import { ContactItem } from '../ContactItem/ContactItem';
import { ListUl, ListDiv } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { Error } from '../EMesseage/EMesseage';
import { Loading }  from '../Loading/Loading';
import { selectVisibleContacts, selectError, selectLoading } from "../../redux/contacts/contSelectors";

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectLoading); 
  const error = useSelector(selectError);
 
  return (
    <ListDiv>
      <ListUl>
        {isLoading && <Loading/>}
        {error && <Error/>}
        {contacts.map(contact  => {
          return (<ContactItem key={contact.id}
          contact={contact}
          /> )    
        })}
      </ListUl>
    </ListDiv>
  );
};
export default ContactList;