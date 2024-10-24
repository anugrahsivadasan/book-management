// src/components/BookList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../redux/Actions';

const BookList = () => {
    const books = useSelector((state) => state.books.items); // Ensure this points to the right state
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteBook(id));
    };

    return (
        <div className="book-list">
            <h2>Book List</h2>
            {books.length === 0 ? (
                <p>No books available.</p>
            ) : (
                <ul>
                    {books.map((book) => (
                        <li key={book.id}>
                            {book.title} by {book.author}
                            <button onClick={() => handleDelete(book.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BookList;
