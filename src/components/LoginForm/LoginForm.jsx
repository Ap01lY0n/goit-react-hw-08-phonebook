import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operation';
import { Form, Label, Input, Button } from "./LoginForm.styled";

export const LoginForm = () => {
    const dispatch = useDispatch();
  
    const handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      form.reset();
    };
  
    return (
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Email
          <Input 
          type="email" 
          name="email" 
          placeholder="Enter your email address"
          title="Please enter a valid email address"
          required
          />
        </Label>
        <Label>
          Password
          <Input 
          type="password" 
          name="password" 
          placeholder="Enter your password"
          title="The password must contain only Latin letters (both upper and lower case), numbers and other symbols"
          required
          
          />
        </Label>
        <Button type="submit">Log In</Button>
      </Form>
    );
  };
  