const express = require("express");
const app = express();

var authors = [
  {
    name: "Lawrence Nowell",
    nationality: "UK",
    books: ["Beowulf"],
  },
  {
    name: "William Shakespeare",
    nationality: "UK",
    books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"],
  },
  {
    name: "Charles Dickens",
    nationality: "US",
    books: ["Oliver Twist", "A Christmas Carol"],
  },
  {
    name: "Oscar Wilde",
    nationality: "UK",
    books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"],
  },
];

const PORT = 3003;
app.listen(PORT, () => {
  console.log("Server started on port: " + PORT);
});

app.get("/", (req, res, next) => {
  res.send("Authors API");
});

app.get("/authors/1/", (req, res, next) => {
  res.send(authors[0].name + " " + authors[0].nationality);
});

app.get("/authors/2/", (req, res, next) => {
  res.send(authors[1].name + " " + authors[1].nationality);
});

app.get("/authors/3/", (req, res, next) => {
  res.send(authors[2].name + " " + authors[2].nationality);
});

app.get("/authors/4/", (req, res, next) => {
  res.send(authors[3].name + "  " + authors[3].nationality);
});

app.get("/authors/1/books/", (req, res, next) => {
  res.send(authors[0].books);
});

app.get("/authors/2/books/", (req, res, next) => {
  res.send(authors[1].books);
});

app.get("/authors/3/books/", (req, res, next) => {
  res.send(authors[2].books);
});

app.get("/authors/4/books/", (req, res, next) => {
  res.send(authors[3].books);
});

app.get("/json/authors/:id", (req, res, next) => {
  let id = req.params.id;
  let name = authors[id].name;
  let nationality = authors[id].nationality;
  res.json({ name: name, nationality: nationality });
});

app.get("/json/authors/:id/books", (req, res, next) => {
  let id = req.params.id;
  let books = authors[id].books;
  res.json({
    books: books,
  });
});
