import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridRowsProp, GridCellParams } from '@mui/x-data-grid';
import { Button, Box } from '@mui/material';
import { deleteUserById, getAllUsers } from '../../api/user';

interface User {
    _id: string;
    username: string;
    email: string;
}

const Admin = () => {
    const [users, setUsers] = useState<User[]>([]);
    const handleEdit = (params: GridCellParams) => {
        console.log(`Edit clicked for user with ID: ${params.id}`);
    };

    const handleRemove = async(params: GridCellParams) => {
        try {
            await deleteUserById(params.id);
            setUsers((prevUsers) => prevUsers.filter((user) => user._id !== params.id));

        } catch (error) {
            console.error('Error to delete:', error);
        }
        // console.log(`Remove clicked for user with ID: ${params.id}`);
    };

    const handleUpdatePassword = (params: GridCellParams) => {
        console.log(`Update Password clicked for user with ID: ${params.id}`);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allUser = await getAllUsers();
                console.log(allUser)
                setUsers(allUser?.users);
            } catch (error) {
                console.error('Error :', error);
            }
        };

        fetchData();
    }, []);

    const columns: GridColDef[] = [
        { field: '_id', headerName: 'ID', width: 200 },
        { field: 'username', headerName: 'Username', width: 200 },
        { field: 'email', headerName: 'Email', width: 300 },
        {
            field: 'edit',
            headerName: 'Edit',
            width: 100,
            renderCell: (params: GridCellParams) => (
                <Button variant="outlined" onClick={() => handleEdit(params)}>
                    Edit
                </Button>
            ),
        },
        {
            field: 'updatePassword',
            headerName: 'Update Password',
            width: 180,
            renderCell: (params: GridCellParams) => (
                <Button variant="outlined" color="primary" onClick={() => handleUpdatePassword(params)}>
                    Update Password
                </Button>
            ),
        },
        {
            field: 'remove',
            headerName: 'Remove',
            width: 120,
            renderCell: (params: GridCellParams) => (
                <Button variant="outlined" color="error" onClick={() => handleRemove(params)}>
                    Remove
                </Button>
            ),
        },
    ];

    const rows: GridRowsProp = users.map((user) => ({
        id: user._id,
        ...user,
    }));

    return (
        <Box sx={{display: 'flex',justifyContent:'center',height: 400, width: '90vw', paddingTop: '120px',paddingLeft:'25px'}}>
           <Box>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                checkboxSelection
            />
            </Box>
        </Box>
    )
}

export default Admin;
