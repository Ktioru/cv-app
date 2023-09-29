import { useState } from 'react'
import Header from './Header.jsx'
import Form from './Form.jsx'
import CV from './CV.jsx'

import './header.scss'

function App() {

  return (
    <>
      <Header />
      <main>
        <Form />
        <CV />
      </main>
      
    </>
  )
}

export default App
