import React from 'react';

const Blogs = () => {
    return (
        <div class="grid md:grid-cols-2 gap-4">
            <div>
                <h3 className='font-bold'>How will you improve the performance of a React Application?</h3>
                <br />
                <p>
                    React uses several clever techniques to minimize the number of costly DOM operations required to update the UI.There are several ways you can speed up your React application.React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. While this will lead to a faster user interface without specifically optimizing for performance for many cases, there are ways Using Immutable Data Structures, Stateless Components and React.PureComponent,Multiple Chunk Files,Using Production Mode Flag in Webpack,Dependency optimization,Avoid Inline Function Definition in the Render Function.

                </p>

                <br />
                <h3 className='font-bold'>What are the different ways to manage a state in a React application?</h3>
                <br />
                <p>
                    There are four main types of state you need to properly manage in React apps: Local state - Local state is data we manage in one or another component.Local state is most often managed in React using the use hooks. Global state - Global state is data we manage across multiple components. Server state - Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept. URL state - Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state.

                </p>

            </div>

            <div>
                <h3 className='font-bold'>How does prototypical inheritance work?</h3>
                <br />
                <p>
                    It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.
                </p>
                <p>
                    <span className='fw-bold'>NodeJS</span> is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.Run Javascript outside the browser with the help of NodeJS.
                    It is used in server-side development.


                </p>
                <br />
                <h3 className='font-bold'>What is a unit test? Why should write unit tests?</h3>
                <br />
                <p>
                    UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers.
                </p>
                <p>
                    Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built.
                </p>

            </div>
        </div>
    );
};

export default Blogs;