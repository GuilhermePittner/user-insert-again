import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { FaTrash } from 'react-icons/fa';

const Login = () => {

    const [users, setUsers] = useState([]);

    const [age, setAge] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleAddUser = () => {
        if (!name || !age || !email) {
            alert("All inputs are required!");
            return;
        }

        const newUser = { name, age, email };
        setUsers([...users, newUser]);

        setName("");
        setAge("");
        setEmail("");

    };

    const handleDeleteUser = (key) => {
        const updatedUsers = users.filter((_, index) => index !== key);
        setUsers(updatedUsers);
    }

    return (
        <div className="flex flex-col items-center pt-[100px]">
            <form className="flex flex-col gap-7 p-7 rounded-lg bg-[#2E2D4E] max-w-[50%] w-[400px] mb-5">
                <h1 className="text-white text-[32px] font-semibold text-center mb-5">Insert User</h1>
                <Input
                    name="name"
                    type="text"
                    value={name}
                    placeholder="Name..."
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    name="age"
                    type="number"
                    value={age}
                    placeholder="Age..."
                    onChange={(e) => setAge(e.target.value)}
                />
                <Input
                    name="email"
                    type="email"
                    value={email}
                    placeholder="your@email.com"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="button" text="Insert" onClick={handleAddUser} />
            </form>
            
            {users.length !== 0 ? (
    <div className="flex flex-col gap-5 mt-5 max-w-[400px] w-full">
        {users.map((user, key) => (
            <div 
                key={key} 
                className="flex justify-between items-center p-4 bg-[#3C3B5A] rounded-lg shadow-md"
            >
                <div>
                    <p className="text-white"> User: {user.name}</p>
                    <p className="text-gray-300">{user.age} years old</p>
                    <p className="text-gray-300">{user.email}</p>
                </div>
                <FaTrash className="text-red-500 cursor-pointer" onClick={() => handleDeleteUser(key)} />
            </div>
        ))}
    </div>
) : (
    <p className="text-white mt-5">No users found!</p>
)}
        </div>
    );
}

export default Login
