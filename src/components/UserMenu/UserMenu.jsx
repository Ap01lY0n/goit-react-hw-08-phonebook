import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operation';
// import { useAuth } from 'hooks';
import { selectUser } from "../../redux/auth/selectors";
import { useSelector } from 'react-redux';
import { Wrapper, Text, Button  } from "./UserMenu.styled";


export const UserMenu = () => {
  const dispatch = useDispatch();
//   const { user } = useAuth();
const user = useSelector(selectUser);
  return (
    <Wrapper>
      <Text> Welcome, {user.name}</Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Wrapper>
  );
};
