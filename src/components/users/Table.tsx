import * as React from 'react';
import { DataGrid, GridColDef, GridRowEntry } from '@mui/x-data-grid';
import { mockData } from '../../const/mock';
import Link from 'next/link';

const roleNameMap: {[key: number]: string} = {
    0: 'Administrator',
    1: 'Doctor',
    2: 'Midwife',
}

const columns: GridColDef[] = [
    { field: 'id', headerClassName: 'table__header', headerName: 'ID', flex: 0.07, cellClassName: 'table__default table__default--id'},
    { field: 'firstname', headerClassName: 'table__header', headerName: 'First name', flex: 0.15, cellClassName: 'table__strong'},
    { field: 'lastname', headerClassName: 'table__header', headerName: 'Last name', flex: 0.15, cellClassName: 'table__strong'},
    { 
        field: 'role', 
        headerClassName: 'table__header', 
        headerName: 'User Role', 
        flex: 0.15, 
        cellClassName: 'table__default',
        renderCell: (cellValue) => {
            return (
                roleNameMap[cellValue.row.role]
            );
        }
    },
    { 
        field: 'action', 
        headerName: 'Action',
        align: 'right',
        headerAlign: 'right',
        flex: 0.2,
        headerClassName: 'table__header',
        sortable: false,
        renderCell: (cellValue) => {
            return (
                <Link className="table__action" href={`/users/${cellValue.row.id}`}>{'View User'}</Link>
            )
        }
    }
];

const getRows = () => {
    return mockData.users;
}

export const Table = () => {
    const rows = getRows();

    return(
        <div className="table">
            <DataGrid
                aria-label='Live Birth Certificates'
                rows={rows}
                columns={columns}
                disableSelectionOnClick
                disableColumnMenu
                getRowClassName={(params) => params.indexRelativeToCurrentPage % 2 === 0 ? 'table__green' : 'table__white'}
                classes={{
                    sortIcon: 'sortIcon',
                    menuIcon: 'menuIcon',
                    menuIconButton: 'menuIcon',
                    filterIcon: 'menuIcon'
                }}
                sx={{
                    "& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus": {
                        outline: "none"
                    }
                }}
            />
        </div>
    )
}

export default Table;