import React from 'react'
import { Container, Icon, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormButton } from './SignupElements'
const Signup = () => {
  return (
    <Container>
        <FormWrap>
            <Icon to="/">FENKO</Icon>
            <FormContent>
                <Form action="#">
                    <FormH1>Sign Up To Your Account</FormH1>
                    <FormLabel htmlFor='for'>Name</FormLabel>
                    <FormInput type='name' required />
                    <FormLabel htmlFor='for'>Surname</FormLabel>
                    <FormInput type='surname' required />
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlfor='for'>Password</FormLabel>
                    <FormInput type='password' required />
                    <FormLabel htmlfor='for'>Repeat Yout Password</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit'>Sign Up</FormButton>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
  )
}

export default Signup