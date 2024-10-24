// src/App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/Store';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import './App.css'; // Include responsive styles here

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Book Management System</h1>
                <BookForm />
                <BookList />
            </div>
        </Provider>
    );
}

export default App;
