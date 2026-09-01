let books = [];

function addBook() {
    let bookName = document.getElementById("bookName").value;

    if (bookName === "") {
        alert("Please enter a book name.");
        return;
    }

    books.push(bookName);

    displayBooks();

    document.getElementById("bookName").value = "";
}

function displayBooks() {
    let bookList = document.getElementById("bookList");

    bookList.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        let li = document.createElement("li");

        li.innerText = books[i] + " ";

        let deleteButton = document.createElement("button");

        deleteButton.innerText = "Delete";

        deleteButton.onclick = function() {
            deleteBook(i);
        };

        li.appendChild(deleteButton);

        bookList.appendChild(li);
    }
}

function deleteBook(index) {
    books.splice(index, 1);

    displayBooks();
}

function issueBook() {
    let student = document.getElementById("studentName").value;
    let book = document.getElementById("issueBook").value;

    if (student === "" || book === "") {
        alert("Please enter student name and book name.");
        return;
    }

    document.getElementById("issueResult").innerText =
        student + " successfully issued " + book + ".";

    document.getElementById("studentName").value = "";
    document.getElementById("issueBook").value = "";
}

function optimizeComment() {
    let comment = document.getElementById("comment").value;

    if (comment === "") {
        alert("Please enter a comment.");
        return;
    }

    let optimized = comment;

    optimized = optimized.replace(
        /\b(very|really|actually|basically|just)\b/gi,
        ""
    );

    optimized = optimized.replace(/\s+/g, " ").trim();

    document.getElementById("optimizedComment").innerText =
        optimized;
}
