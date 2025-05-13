<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->


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

After successfully tesing the front-end, I will now focus on creating pages in it.
I started to create routes for my app in the front-end.
I do this by creating a folder in my src folder and naming it pages, after that I created 3 files, 
Books.jsx, Add.jsx, and Update.jsx.


you can use npm start to start the back-end and front-end. (work in progress)



