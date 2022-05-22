import { Wrapper, Center, Cover } from './utilities/utilities';

import SushiRiceCalculator from './components/SushiRiceCalculator';

function App() {
    return (
        <>
            <div className="app">
                <Cover>
                    <div>
                        <header>
                            <Wrapper>
                                <Center>
                                    <h1>Sushi Rice Calculator</h1>
                                </Center>
                            </Wrapper>
                        </header>

                        <main>
                            <Wrapper>
                                <SushiRiceCalculator />
                            </Wrapper>
                        </main>
                    </div>

                    <footer>
                        <Wrapper>
                            Created with ❤️ by{' '}
                            <a
                                href="https://ivan-rodrigues.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Ivan Rodrigues
                            </a>
                            .
                        </Wrapper>
                    </footer>
                </Cover>
            </div>
            <div className="overlay"></div>
        </>
    );
}

export default App;
