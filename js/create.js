document.addEventListener('DOMContentLoaded', function() {
    const createBookForm = document.getElementById('create-book-form');

    createBookForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const title = event.target.title.value;
        const author = event.target.author.value;
        const description = event.target.description.value;

        let books = JSON.parse(localStorage.getItem('books')) || [];
        const newBook = {
            id: books.length ? books[books.length - 1].id + 1 : 1,
            title,
            author,
            description
        };

        books.push(newBook);
        localStorage.setItem('books', JSON.stringify(books));
        window.location.href = 'index.html';
    });
});
