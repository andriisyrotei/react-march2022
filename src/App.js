import React from 'react';
import Characters from "./components/Characters";

const App = () => {
    return (
        <div>
            <div>
                <Characters
                    id={1}
                    name={'Rick Sanchez'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Male'}
                    image={'image":"https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
                    alt={'Rick'}
                />
            </div>
            <div>
                <Characters
                    id={2}
                    name={'Morty Smith'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Male'}
                    image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}
                    alt={'Morty'}
                />
            </div>
            <div>
                <Characters
                    id={3}
                    name={'Summer Smith'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Female'}
                    image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}
                    alt={'Summer'}
                />
            </div>
            <div>
                <Characters
                    id={5}
                    name={'Jerry Smith'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Male'}
                    image={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}
                    alt={'Beth'}
                />
            </div>
        </div>
    )
};

export default App;

