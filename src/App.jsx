import './App.css';
import { Wrapper, Center } from './utilities/utilities';

import SushiRiceCalculator from './components/SushiRiceCalculator';

function App() {
    return (
        <Wrapper>
            <div className="app">
                <header>
                    <Center>
                        <h1>Sushi Rice Calculator</h1>
                    </Center    >
                </header>
                <main>
                    <SushiRiceCalculator />
                </main>
                <footer>
                    <Center>Created with love by Ivan Rodrigues</Center>
                </footer>
            </div>
        </Wrapper>
    );
}

export default App;
