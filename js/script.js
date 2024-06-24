document.addEventListener('DOMContentLoaded', function() {
    let books = JSON.parse(localStorage.getItem('books')) || [
        { id: 1, title: '책 제목 1', author: '저자 1' },
        { id: 2, title: '책 제목 2', author: '저자 2' },
        { id: 3, title: '책 제목 3', author: '저자 3' }
    ];

    const bookList = document.getElementById('book-list');
    const createButton = document.getElementById('create-button');

    function renderBooks() {
        bookList.innerHTML = '';
        // books 배열을 역순으로 반복하여 리스트 아이템을 생성
        for (let i = books.length - 1; i >= 0; i--) {
            const book = books[i];
            const listItem = document.createElement('li');
            listItem.textContent = `${book.title} - ${book.author}`;
            listItem.setAttribute('tabindex', '0');
            listItem.setAttribute('role', 'button');
            listItem.addEventListener('click', () => {
                window.location.href = `detail.html?id=${book.id}`;
            });
            listItem.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    window.location.href = `detail.html?id=${book.id}`;
                }
            });
            bookList.appendChild(listItem);
        }
    }

    createButton.addEventListener('click', () => {
        window.location.href = 'create.html';
    });

    renderBooks();
});
