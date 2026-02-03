import React from 'react'

export default function Users({ users, handleDeleteApp, handleEditApp }) {

    const handleDelete = (id) => {
        handleDeleteApp(id)
    }

    const handleEdit = u => {
        handleEditApp(u)
    }

    return (
        <>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOM</th>
                        <th>AGE</th>
                        <th>EMAIL</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(u =>
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.nom}</td>
                                <td>{u.age}</td>
                                <td>{u.email}</td>
                                <td>
                                    <button
                                        style={{ background: "orange" }}
                                        onClick={() => handleEdit(u)}
                                    >Modifier</button>
                                    <button
                                        style={{ background: "red" }}
                                        onClick={() => handleDelete(u.id)}
                                    >Supprimer</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}
