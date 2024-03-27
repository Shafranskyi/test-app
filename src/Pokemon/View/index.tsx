import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getPokemonById } from './queries';
import { CustomBackDrop } from '../../App';
import { GeneralLayout } from '../../layouts';

type UrlParams = {
  pokemonId: string;
};

const PokemonView = (): React.ReactElement => {
  const { pokemonId } = useParams<UrlParams>();

  const {
    data,
    isLoading
  } = useQuery({
    queryKey: `pokemon-${pokemonId}`,
    queryFn: () => getPokemonById(pokemonId!),
  });

  return (
    <GeneralLayout breadcrumbs={[{ label: 'Home', link: '/' }, { label: data?.data.name ?? '' }]}>
      <Grid container spacing={4} sx={{}}>
        <Grid item xs={4}>
          <Typography variant='subtitle1'>Name</Typography>
          <Typography variant='body2'>{data?.data.name.toUpperCase()}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='subtitle1'>Abilities</Typography>
          <Typography variant='body2'>{data?.data.abilities.map(item => item.ability.name).join(", ")}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='subtitle1'>Height</Typography>
          <Typography variant='body2'>{data?.data.height} decimetres</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='subtitle1'>Weight</Typography>
          <Typography variant='body2'>{data?.data.weight} hectograms</Typography>
        </Grid>
      </Grid>
      {isLoading && <CustomBackDrop />}
    </GeneralLayout>
  );
};

export default PokemonView;
