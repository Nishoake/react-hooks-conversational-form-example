import React, { useRef, useEffect } from 'react'
import ConversationalForm from 'conversational-form'

export default function ConversationalForm(){
  
  // Creating a ref
  const ref = useRef()

  // Defining the fields / questions for the conversational-form
  const formFields = [
    {
      'tag': 'input',
      'type': 'text',
      'name': 'firstname',
      'cf-questions': 'What is your firstname?'
    },
    {
      'tag': 'input',
      'type': 'text',
      'name': 'lastname',
      'cf-questions': 'What is your lastname?'
    }
  ]

  // Defining the submitCallback function once form is submitted
  function submitCallback() {
    // get the FormData object in JSON format
    let formDataSerialized = cf.getFormData(true)
    console.log(`Formdata, obj: ${formDataSerialized}`)

    // Provide user with response after form submission
    cf.addRobotChatResponse("You are done. Check the dev console for form data output.")
  }

  return(
    <div></div>
  )
}