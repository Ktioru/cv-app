import { useState } from 'react'



function Header() {
    const theme = document.querySelector("html")
    const checked = "checked"
    
    function themeSwitcher() {
        console.log("MEU PAU")
        theme.dataset.theme == "dark" ? theme.setAttribute("data-theme", "light") : theme.setAttribute("data-theme", "dark")

    }
    
    
    

  return (
    <>
      <header>
        
        <h1>CV App</h1>

        <div className='themeSwitcher'>

            <input type="checkbox" id="switch" name="switch" role="switch" onClick={themeSwitcher} />
        </div>
      </header>
    </>
  )
}

export default Header
