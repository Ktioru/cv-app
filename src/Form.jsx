import { useState } from 'react'



function Form() {
    
    
    
    

  return (
    <div className='form'>
      <form action="" method="get">
        <fieldset>
            <h2 className='title'>Personal Info</h2>
            <div className='content'>
                <div className="grid">
                    <label>
                        Name
                        <input type="text" placeholder="First name" required />
                    </label>

                    <label >
                        Professional Title
                        <input type="text" placeholder="Professional Title" required />
                    </label>
                    

                </div>
                <div className="grid">

                    <label for="phoneNumber">
                        Phone Number
                        <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" required />
                    </label>

                    <label for="city">
                        City
                        <input type="text" id="city" name="city" placeholder="City" required />
                    </label>

                </div>
                <label for="email">Email address</label>
                <input type="email" id="email" name="email" placeholder="Email address" required />
                <label>Summary</label>
                <textarea placeholder="Summary" required />
            </div>
            
        </fieldset>

        <fieldset>
            <h2 className='title'>Work Experience</h2>
            <div className='content'>
                <div className="grid">
                    <label>
                        Position
                        <input type="text" placeholder="Position" required />
                    </label>

                    <label >
                        Company
                        <input type="text" placeholder="Professional Title" required />
                    </label>
                    

                </div>
                <div className="grid">

                    <label for="phoneNumber">
                        Phone Number
                        <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" required />
                    </label>

                    <label for="city">
                        City
                        <input type="text" id="city" name="city" placeholder="City" required />
                    </label>

                </div>
                <label for="email">Email address</label>
                <input type="email" id="email" name="email" placeholder="Email address" required />
                <label>Summary</label>
                <textarea placeholder="Summary" required />
            </div>
            
        </fieldset>
            
            
            
            

                
      </form>
    </div>
  )
}

export default Form
