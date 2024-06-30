import React from 'react'
import st from "./signup.module.css"
import Form from '../components/Form/Form'

const SignUp = () => {
  return (
    <div className={st.signup_container}>
        <Form/>
    </div>
  )
}

export default SignUp