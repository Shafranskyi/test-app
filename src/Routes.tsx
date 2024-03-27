import { Route, Routes } from 'react-router-dom';
import PokemonsList from './Pokemon/List';
import PokemonView from './Pokemon/View';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PokemonsList />} />
            <Route path="/pokemon/:pokemonId" element={<PokemonView />} />

            <Route path="*" element={<PokemonsList />} />
            {/* It would be great to add 'Not found' page but so far so good */}
        </Routes>
    );
};

export default AppRoutes;
