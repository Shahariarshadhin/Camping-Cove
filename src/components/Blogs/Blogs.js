import React from 'react';

const Blogs = () => {
    return (
        <div style={{ padding: "20px" }} className=' row'>
            <h2>Blogs</h2>
            <div className='col-lg-6'>
                <h4>Difference between javascript and nodejs</h4>
                <p className='text-primary'><b>Javascript</b></p>
                <p>1. Javascript is a programming language that is used for writing scripts on the website.</p>
                <p>2. Javascript can only be run in the browsers.</p>
                <p>3. It is basically used on the client-side.</p>
                <p>4. Javascript is capable enough to add HTML and play with the DOM. </p>
                <p>5. Javascript is used in frontend development.</p>

                <p className='text-primary'><b>Node Js</b></p>
                <p>1. NodeJS is a Javascript runtime environment.</p>
                <p>2. We can run Javascript outside the browser with the help of NodeJS.</p>
                <p>3. It is mostly used on the server-side.</p>
                <p>4. Nodejs does not have capability to add HTML tags.</p>
                <p>5. Nodejs is used in server-side development.</p>
            </div>
            <div className='col-lg-6'>
                <h4>When should you use nodejs and when should you use mongodb?</h4>
                <p className='text-primary'><b>Use of Node Js</b></p>
                <p>When you are doing a project you needs a programming environment and a runtime library that offers you basic programming support and can compile or interpret your code. Nodejs is such as tool for the Javascript programming language.If you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it. </p>

                <p className='text-primary'><b>Use of Mongodb</b></p>
                <p>If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are so many popular databases. MongoDB is one of them database.Different databases have different strengths and different ways of using</p>
            </div>
            <div className='col-lg-6'>
                <h4> Differences between sql and nosql databases.</h4>
            </div>
            <div className='col-lg-6'>
                <h4>What is the purpose of jwt and how does it work?</h4>
            </div>
        </div>
    );
};

export default Blogs;