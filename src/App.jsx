import { Outlet } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
    // Food Station or Nation

    return (
        <>
            <Provider store={store}>
                <Header />
                {/* Main section Container */}
                <main className="max-w-[1280px] m-auto">
                    <Outlet /> {/* using outlet from react router dom for rendering children components */}
                </main>
                <Footer />
            </Provider>
        </>
    );
}

export default App