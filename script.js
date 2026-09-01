let books = [];


// ADD BOOK
function addBook() {

    let bookName =
        document.getElementById("bookName").value.trim();

    if (bookName === "") {
        alert("Please enter a book name.");
        return;
    }

    books.push(bookName);

    displayBooks();

    document.getElementById("bookName").value = "";
}


// DISPLAY BOOKS
function displayBooks() {

    let bookList =
        document.getElementById("bookList");

    bookList.innerHTML = "";

    books.forEach(function(book, index) {

        bookList.innerHTML += `
            <li>
                ${book}
                <button onclick="deleteBook(${index})">
                    Delete
                </button>
            </li>
        `;
    });
}


// DELETE BOOK
function deleteBook(index) {

    books.splice(index, 1);

    displayBooks();
}


// ISSUE BOOK
function issueBook() {

    let student =
        document.getElementById("studentName").value.trim();

    let book =
        document.getElementById("issueBook").value.trim();

    if (student === "" || book === "") {

        alert("Please enter student name and book name.");

        return;
    }

    document.getElementById("issueResult").innerText =
        student + " successfully issued " + book + ".";

    document.getElementById("studentName").value = "";
    document.getElementById("issueBook").value = "";
}


// COMMENT OPTIMIZATION
function optimizeComment() {

    let comment =
        document.getElementById("comment").value.trim();

    if (comment === "") {

        alert("Please enter a comment.");

        return;
    }

    let optimized = comment
        .replace(/\b(very|really|actually|basically|just)\b/gi, "")
        .replace(/\s+/g, " ")
        .trim();

    document.getElementById("optimizedComment").innerText =
        optimized;
}
