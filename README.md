# What is this project about?

This project is about to practice React basic concepts. I will be building a simple application to build a list of favourite books. Conditional rendering, form submission, states, lifting states up, updating and mapping arrays, and triggering modals
 
![Screenshot from 2022-10-04 10-28-17](https://user-images.githubusercontent.com/77645494/193772147-81655d06-2040-4489-bab3-bcb8bb48c481.png)

## Project structure

I have multiple components handling different tasks. Some of them are used to render UI code, others are in charge of rendering the form, and many of them are shuffling data from one component to another.

## Conditional rendering

I wanted to render the form only when the user clicks on the “Add new book” button. I chose to include a listener on the button, onClick={addNewBookHandler}, which would handle the event by calling a set state function, setShowAddBookForm(true), which in turn will update a Boolean variable, showAddBookForm that will be used to conditionally render the AddBookForm component.

![image](https://user-images.githubusercontent.com/77645494/193774539-7c9ebb49-cb1e-4b07-abca-476faa3b595a.png)

I used this same technique to render headers and buttons as well, based on certain conditions.

## Forms and input fields
In order to: 
+ Gather the data from input fields
+ Trigger an action on form submit.

To get the data from the input fields I've used the onChange event listener because it could be used on most of the form fields. This event will be triggered every time the input field changes, so it will cause the state to update every time the user presses a key to write something in the form input. We can keep track of the input data by calling a set state function each time the onChange handler is called.

![image](https://user-images.githubusercontent.com/77645494/193780233-73c417a9-e711-4c49-97b5-f0d42bea88c9.png)


![image](https://user-images.githubusercontent.com/77645494/193775775-99b170cc-fbee-479b-86f2-49642725579f.png)

Once users finish inputting text, they will click on the submit button and, as the form has an onSubmit event listener, it will trigger the onSubmit handler, submitHandler in our case. This handler will prevent the default behaviour of the form (a page reload), check that the input is not empty, take the data of the input fields (that is actually stored in the state by now) and call a “lift state up” function and clear the input fields.

![image](https://user-images.githubusercontent.com/77645494/193776327-cb62bdca-ef48-45d6-9fd5-588789e89f9a.png)

## Lifting states up

In this project, we are getting data in a component and using it in a different component. Usually, these components are far away from each other, and the only way to link the data between them is by using a common nearest ancestor.

We need to declare a handler function, newBookHandler, in the common ancestor component, App, and pass it as a prop,onNewBook, to the form component, AddBookForm. It is important to note that we are passing the function, not the function call, so we shouldn’t include parenthesis after the function name when we write it in the prop.

![image](https://user-images.githubusercontent.com/77645494/193777182-c255a4af-f9a1-4340-bd8e-0c8aea762e91.png)

The form component, AddBookForm, will call the function that was passed in its props and uses the data from the input fields as the argument. In this way, the arguments gathered in the form component will be available in the ancestor, the App component. This is called “lifting the state up”.

![image](https://user-images.githubusercontent.com/77645494/193777566-c8148396-d1df-465d-bb51-7ad13fc6d818.png)

Lifting states up is used in many components in this project, each time data needs to be gathered from one component and used in another one. Data can be something like text entered on an input filed, or a click on a button, as is the case when we want to delete a book card from the card grid. The tricky part is to realise which component needs to deliver the data, and which one needs to act on it, but I think that with time and experience this will become easier.

## Updating and mapping arrays

In this case, we want to display a series of book cards containing the title and author of each book, so we are going to end up having an array containing a collection of objects, and inside those objects, titles and authors will be stored.

Each time a book is added (or deleted), our array will need to be updated. So, in our example, the App component will receive a new book data from the AddBookForm component and will use that data to update the values of an array, bookList. As this is a change in the state of our application, we use a set state function, setBookList , to update the array.

![image](https://user-images.githubusercontent.com/77645494/193778557-0a96da6e-8524-4f77-9920-d190190b7555.png)

It is very important to note that when we want to update an array, object, counter, or any other variable based on its previous state, we shouldn’t call the set state function just with the new data but use a previous state function as an argument. This way, the set state function will update the variable only when the previous state has finished updating it.

![image](https://user-images.githubusercontent.com/77645494/193778792-d1c8bc56-6ba6-43ae-b776-2d4a6d254771.png)

Once our array is updated, we pass it as a prop to the component that will render it, in this case, BooksGrid. That component will call the component in charge of actually rendering the data on each of the elements of the array. For doing this we use the map() method.

![image](https://user-images.githubusercontent.com/77645494/193779521-4ab1c493-5adf-4de9-ad83-94b22856eaf3.png)


## Triggering a modal

Another common task on web apps is triggering modals, or error messages, when the user performs an action. In our case, we want to give the user a message indicating that the form shouldn’t be submitted when the input fields are empty.

Our Error component is the one that will render the modal if the user actions meet a certain condition. As this is a different component from the one that is evaluating the condition, we need to use the “lifting the state up” method once more.

![image](https://user-images.githubusercontent.com/77645494/193780005-97adaee7-6a02-453a-8ac2-2bc5a5d65633.png)
