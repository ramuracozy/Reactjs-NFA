import React, { useState } from "react";
import booksData from "../utils/books";
import styles from "../styles/Books.module.css";

export default function Book() {
  const [books, setBooks] = useState(booksData);
  const [newBook, setNewBook] = useState({
    author: "",
    title: "",
    year: "",
    price: "",
    description: "",
    img: ""
  });

  // handler input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  // tambah buku baru
  const addBook = () => {
    if (!newBook.title || !newBook.author) {
      alert("Author dan Title wajib diisi!");
      return;
    }

    const newEntry = {
      ...newBook,
      id: books.length + 1,
    };

    setBooks([...books, newEntry]);

    // reset form
    setNewBook({
      author: "",
      title: "",
      year: "",
      price: "",
      description: "",
      img: ""
    });
  };

  return (
    <div>
      {/* Daftar Buku */}
      <div className={styles.container}>
        {books.map((book) => (
          <div key={book.id} className={styles.card}>
            <img src={book.img} alt={book.title} className={styles.image} />

            <h4 className={styles.author}>{book.author}</h4>
            <h3 className={styles.title}>{book.title}</h3>
            <p className={styles.price}>{book.price}</p>
            <p className={styles.year}>Tahun: {book.year}</p>
            <p className={styles.description}>{book.description}</p>
          </div>
        ))}
      </div>

      {/* Form untuk menambahkan Buku di bawah halaman */}
      <div className={styles.formWrapper}>
        <div className={styles.form}>
          <h3>Tambah Buku Baru</h3>
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={newBook.author}
            onChange={handleChange}
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newBook.title}
            onChange={handleChange}
          />
          <input
            type="date"
            name="year"
            placeholder="Year"
            value={newBook.year}
            onChange={handleChange}
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={newBook.price}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newBook.description}
            onChange={handleChange}
          />
          <input
            type="text"
            name="img"
            placeholder="Image URL"
            value={newBook.img}
            onChange={handleChange}
          />
          <button onClick={addBook}>Tambah Buku</button>
        </div>
      </div>
    </div>
  );
}
