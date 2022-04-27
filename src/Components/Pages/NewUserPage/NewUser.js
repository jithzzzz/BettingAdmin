import React from 'react'
import "./NewUser.css"

function NewUser() {
  return (
    <div className='newUser'>
        <h1 className='newUserTitle'>New User</h1>
        <form className='newUserForm'>
            <div className='newUserItems'>
                <label> Username</label>
                <input type="text" placeholder="name"/>
            </div>

            <div className='newUserItems'>
                <label> Full Name</label>
                <input type="text" placeholder="name"/>
            </div>

            <div className='newUserItems'>
                <label> E-mail</label>
                <input type="text" placeholder="name"/>
            </div>

            <div className='newUserItems'>
                <label>Password</label>
                <input type="text" placeholder="name"/>
            </div>

            <div className='newUserItems'>
                <label>Phone</label>
                <input type="text" placeholder="name"/>
            </div>

            <div className='newUserItems'>
                <label>Address</label>
                <input type="text" placeholder="name"/>
            </div>

            <div className='newUserItems'>
                <label>Gender</label>
                <div className='newUserGender'>
                <input type="radio" name='gender'  id='male' value='male'/>
                <label for="male">Male</label>
                <input type="radio" name='gender'  id='female' value='female'/>
                <label for="female">Female</label>
                <input type="radio" name='gender'  id='other' value='other'/>
                <label for="other">Others</label>
                </div>
            </div>

            <div className='newUserItems'>
            <label>Active</label>
            <select className='newUserSelect' name='active' id='active' >
                <option value="yes">YES</option>
                <option value="no">NO</option>

            </select>
            
            </div>
            <button className='newUserButton'>Create</button>
        </form>
    </div>
  )
}

export default NewUser