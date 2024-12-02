import { useEffect, useState } from "react";
import { getUsers } from "../services/getUsers";

export function useUsers() {
    const [users, setUsers] = useState(null);
    useEffect(() => {
        getUsers().then(users => setUsers(users))
    })
    return users
}