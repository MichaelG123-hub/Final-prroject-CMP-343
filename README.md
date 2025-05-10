I am replicating a tutorial from youtube. 

original video: https://www.youtube.com/watch?v=fPuLnzSjPLE

I am building an fullstack app using Node.js, MySQL, react, and Postman app.

(WORK IN PROGRESS)

We will fetch books from a database(MySQL)

We can create a new book, delete a specific book or even update a book.

Steps I took:

I stared with downloading MySQL and creating a database called tests, to test the database,
that creates a book with an id, title, description, and cover.png. 

Using the postman app, I created a post request with the path /books and created 
SQL query to insert a new book in the books table. I used an array with values to match the 
three columns title, desc, and cover. using postman and clicking the post option, while my back-end is running, I used the url localhost:3000/books and was able to see I was successful at posting an example book or testing a post for it. making sure everything is connected. 

UPDATE: 

I am testing client side behavior from the backend. 

again using the postman app, I used body, raw, and wrote an example title, desc, and cover.

and posting it on  postman, I then used GET and got some test data back that shows I successfully posted a new test book. 

example: {
        "id": 1,
        "title": "test title",
        "desc": "description",
        "cover": "cover.png"
    },
    {
        "id": 2,
        "title": "title from backend",
        "desc": "desc from backend",
        "cover": "cover pic from backend"
    },
    {
        "id": 3,
        "title": "title from backend",
        "desc": "desc from backend",
        "cover": "cover pic from backend"
    },
    {
        "id": 4,
        "title": "title from backend",
        "desc": "desc from backend",
        "cover": "cover pic from backend"
    },

    now I have: {
        "id": 5,
        "title": "title from client",
        "desc": "desc from client",
        "cover": "cover from client"
    }



you can use npm start to start the back-end. (work in progress)


