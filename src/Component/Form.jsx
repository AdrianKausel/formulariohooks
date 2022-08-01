import React, {useState} from "react";

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password};
        console.log(newUser)
        props.setUser(newUser)
    }

    return(
        <form onSubmit={createUser}>
            <div className="casilla1" >
                <label>First Name:</label>    
                <input type="text" value={firstName} name="nombre" onChange={ (e) => setFirstName(e.target.value)} />
            </div>
            <div className="casilla1">
                <label> Last Name: </label>    
                <input type="text" value={lastName} onChange={ (e) => setLastname(e.target.value)} />
            </div>
            <div className="casilla1">
                <label> Email: </label>    
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value)} />
            </div>
            <div className="casilla1">
                <label> Password: </label>    
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value)} />
            </div>  
            <input className="casilla2" type="submit" value="Create User" />
        </form>
    )
}

export default UserForm;
