import * as React from 'react';
import { DataGrid, GridColDef, GridRowEntry } from '@mui/x-data-grid';
import { mockData } from '../../const/mock';
import Status from '../Status';
import Link from 'next/link';

const columns: GridColDef[] = [
    { field: 'id', headerClassName: 'table__header', headerName: 'ID', flex: 0.07, cellClassName: 'table__default table__default--id'},
    { field: 'firstname', headerClassName: 'table__header', headerName: 'First name', flex: 0.15, cellClassName: 'table__strong'},
    { field: 'lastname', headerClassName: 'table__header', headerName: 'Last name', flex: 0.15, cellClassName: 'table__strong'},
    { field: 'dateofbirth', headerClassName: 'table__header', headerName: 'Date of Birth', type: 'date', flex: 0.25, cellClassName: 'table__default' },
    { 
        field: 'signs', 
        headerName: 'Signs',
        align: 'right',
        headerAlign: 'right',
        flex: 0.15,
        headerClassName: 'table__header',
        renderCell: (cellValue) => {
            return (
                <Status state={parseInt(cellValue.row.signs)}/>
            );
        },
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
                <Link className="table__action" href={`/certificates/${cellValue.row.id}`}>{'View Info'}</Link>
            )
        }
    }
];

const getRows = () => {
    return mockData.certificates;
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
                autoHeight
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
                    },
                    '& .MuiDataGrid-columnHeaders': {
                        position: "sticky",
                        zIndex: 100,
                    },
                    '& .MuiDataGrid-virtualScroller': {
                        marginTop: "0 !important"
                    },
                    '& .MuiDataGrid-main': {
                        overflow: "visible"
                    }
                }}
            />
        </div>
    )
}

export default Table;