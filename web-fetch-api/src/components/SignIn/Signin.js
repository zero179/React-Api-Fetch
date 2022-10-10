import React from 'react'
import { Container, Icon, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SigninElements'
const Signin = () => {
  return (
    <Container>
        <FormWrap>
            <Icon to="/">FENKO</Icon>
            <FormContent>
                <Form action="#">
                    <FormH1>Sign In To Your Account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlfor='for'>Password</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Forgot Your Password</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
  )
}

export default Signin