import './App.css';
import Postlist from '../components/Postlist/Postlist.js';
import Searchbar from '../components/Searchbar/Searchbar.js';
import Sidebar from '../components/Sidebar/Sidebar.js';

function App() {
    return (
        <div className="App">
            <header className="header">
                <div className="header__logo">
                    <h1>Posttit</h1>
                    <p>A simple reddit client</p>
                </div>
                <Searchbar />
            </header>

            <main>
                <Postlist />
                <Sidebar />
            </main>

            <footer>
                <p>© 2024 Posttit</p>
            </footer>
        </div>
    );
}

export default App;
