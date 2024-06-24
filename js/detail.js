document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const bookId = params.get('id');

    const books = JSON.parse(localStorage.getItem('books')) || [];
    const book = books.find(b => b.id == bookId);
    const bookDetail = document.getElementById('book-detail');

    if (book) {
        bookDetail.innerHTML = `
            <h2>${book.title}</h2>
            <p>저자: ${book.author}</p>
            <p>${book.description}</p>
        `;
    } else {
        bookDetail.textContent = '도서를 찾을 수 없습니다.';
    }
});
