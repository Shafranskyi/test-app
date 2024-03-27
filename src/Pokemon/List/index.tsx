import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Grid } from '@mui/material';
import { getPokemons } from './queries';
import { useQuery } from 'react-query';
import { GeneralLayout } from '../../layouts';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { CustomBackDrop } from '../../App';

const PokemonsList = (): React.ReactElement => {
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({ queryKey: 'pokemon-list', queryFn: getPokemons });

  const handleView = (userIndex: number) => {
    navigate(`/pokemon/${userIndex}`);
  };

  const rows = data?.data.results.map((item, index) => {
    return {
      id: index + 1,
      name: item.name.charAt(0).toUpperCase()
        + item.name.slice(1)
    };
  }) ?? [];

  const columns: GridColDef[] = [
    { field: 'name', flex: 2, renderHeader: () => <strong>Name</strong> },
    {
      field: 'Action',
      headerName: '',
      sortable: false,
      disableExport: true,
      disableColumnMenu: true,
      filterable: false,
      flex: 2,
      renderCell: (params) => (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Button onClick={() => handleView(params.row.id)}>View</Button>
        </Box>
      ),
    },
  ];

  return (
    <>
      <GeneralLayout breadcrumbs={[{ label: 'Home', link: '/' }]}>
        <Grid container spacing={4}>
          <Grid item xs={12} sx={{ minHeight: '200px' }}>
            <DataGrid checkboxSelection={true} rows={rows} columns={columns} />
          </Grid>
        </Grid>
      </GeneralLayout>
      {isLoading && <CustomBackDrop />}
    </>
  );
};

export default PokemonsList;
