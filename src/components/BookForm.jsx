// src/components/BookForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/Actions';

const BookForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addBook({ id: Date.now(), title, author }));
        setTitle('');
        setAuthor('');
    };

    return (
        <form onSubmit={handleSubmit} className="book-form">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Book Title"
                required
            />
            <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author"
                required
            />
            <button type="submit">Add Book</button>
        </form>
    );
};

export default BookForm;
