import { useLoaderData } from "react-router-dom";

const Update = () => {

    const loadedUsers = useLoaderData();

    const handleUpdate = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const updateUser = {name,email}
        console.log(updateUser)

        fetch(`http://localhost:5000/users/${loadedUsers._id}`,{
            method:'PUT',
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(updateUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                alert("updated data successfully")
                // event.target.reset()
            }
        })
    }

    return (
        <div>
            <h2>Name : {loadedUsers.name}</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name"  defaultValue={loadedUsers.name} />
                <br />
                <input type="email" name="email" id="" defaultValue={loadedUsers.email} />
                <br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default Update;