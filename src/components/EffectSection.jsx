import { useEffect, useState, useCallback } from "react"
import Button from "./Button/Button"
import Modal from "./Modal/Modal"

export default function EffectSection() {
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    const fetchUsers = useCallback(async () => {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        setUsers(users)
        setLoading(false)
    }, [])
    
    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    return (
       <section>
        <h3>Effects</h3>

        <Button 
        style={{marginBottom: '1rem '}}
        onClick={() => setModal(true)}>Открыть информацию</Button>
       
       <Modal open={modal}>
        <h3>Hello from Modal</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas id saepe fugit exercitationem distinctio consequatur quod tempore cum, perspiciatis, molestiae voluptates iure esse officia pariatur suscipit! Autem nemo ipsam deserunt.</p>
        <Button onClick={() => setModal(false)}>Close Modal </Button>
        </Modal>

        {loading && <p>Loading...</p>}

        {!loading && <ul>
            <input type="text" className="control" />
            {users.map(user => <li key={user.id}>{user.name}</li> )}
        </ul> }
       </section> 
    )
        
}