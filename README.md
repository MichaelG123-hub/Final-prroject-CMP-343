#My Full-Stack App:

I created an App called Book Shop, emulating the feel of going to an online Book store.
What you can do:

Add a book, Update a book, and finally delete a book.

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

update:

I am now working with the front-end

In the terminal I used npx create-react-app . to get started in the front-end.

I changed the website number on the back-end to 3001, because when using npm start in the front-end it uses localhost:3000.

something I did was get rid of the .gitignore in my front-end folder and added what was in there in my root .gitignore file.
just to keep everything I do not want to add to github in one file in one place.

I tested the front-end by typing Hello in the body of my app.js file in the front-end folder.


update:

After successfully testing the front-end, I will now focus on creating pages and routing in it.
I installed react-router-dom in my front-end.
After that I created a folder in my src folder and naming it pages, after that I created 3 files, 
Books.jsx, Add.jsx, and Update.jsx.

The Books.jsx file inside the pages/ folder defines the main page component for the application. It returns a placeholder.
I did this for the Add and Update files as well.

update:

I used npm i axios in my front-end. axios lets us make an api request using a react app.

What I am planning on doing I will fetch all data using my back-end server. 

I want the books page to show all the books.

what I did in the Books.jsx page
was fetche and display all books from http://localhost:3001/books. Each book shows its cover, title, description, and I created a newly added price field (an integer and not null) for later. Also added A link to navigate to the /add page for adding new books.


update: 

This time I am now working on the Add.jsx page in the front-end. Goal is to add a new book.
This page allows users to create and submit a new book entry.

I Set up a form using React state (useState) to collect book details: title, desc, price, and cover.

I created Handles form input changes and updates the state in real time.

I created an on clicking the Add button to send a POST request to http://localhost:3001/books to save the new book to the backend.

After successfully adding the book, the page redirects the user back to the homepage using useNavigate from react-router-dom. 

I created a style.css file to style the layout and presentation of the app. Here's what I styled:

.App: Centers the content both vertically and horizontally using Flexbox.

.books: Displays all book entries in a row using Flexbox.

.book: Allows each book to take equal space within the row.

img: Sets a fixed size for book cover images and ensures they maintain aspect ratio using object-fit. A background color was also added for visual clarity.

Also I added an delete and update button in my Books.jsx page in my front-end.
For now they do nothing but I styled the buttons.

update:

The goal for today is to delete books.

In the backend, I created a DELETE endpoint that receives a book's ID and removes the corresponding record from the database. This allows the server to handle delete requests from the client side.

update: 

Now working on the update button.

In the Books component, I updated the Update button so that when it's clicked, it navigates to a dynamic route based on the book’s ID.
I also went into App.js and added a route for /update/:id that loads the Update component. Inside that component, I retrieved the book ID from the URL and used it to fetch and edit the specific book’s data.
This allows me or anyone to update the details of any book directly from the frontend.

After that I decided to create a form, just like with Add.jsx in Update.jsx, by copy and pasting everything I have in Add.jsx to
Update.jsx with some small changes.

After this I spend some time adding style to the update form in the style.css page.

After styling the update form I went into the index.js file in the back-end created a PUT endpoint at /books/:id. This endpoint takes the book ID from the URL and the updated book data from the request body. I wrote a SQL query that updates the book's title, description, price, and cover in the database. If the query runs successfully, the server responds with a confirmation message.

After this I went back to the Update.jsx file and I used useLocation from React Router to extract the book ID from the URL. When the user fills out the form and clicks the update button, a PUT request is sent to the backend with the updated book information. If the update is successful, I redirect the user back to the main book list using useNavigate.

Update: 

To upload an image try to get the URL of the image. an example is going to google images, type an image you want to see with pjpg or png at the end of your search like "book jpgs or book png". Click the image
of a book you want to use and you can see the big preview of it. After that you right click to see that image on a new tab. Check to see if A. there is a http or https(might not always be required) and have the end of the URL have .jpg or .png at the end of it. This is the way to upload a cover for your book on my app.




you can use npm start to start the back-end and front-end to run this app. (work in progress)



