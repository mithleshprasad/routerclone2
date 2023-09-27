import React from "react";

export const Tutorial = () => {
  const content = `
npm create vite@latest name-of-your-project -- --template react
# follow prompts
cd <your new project directory>
npm install react-router-dom localforage match-sorter sort-by
npm run dev
    `;
  const content1 = `
    VITE v3.0.7  ready in 175 ms

    ➜  Local:   http://127.0.0.1:5173/
    ➜  Network: use --host to expose
    `;
  const content2 = `
src
├── contacts.js
├── index.css
└── main.jsx
    `;
  const content3 = `
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
    `;
  return (
    <>
      <div className="container m-5">
        <h3>Tutorial</h3>
        <p>
          Welcome to the tutorial! We'll be building a small, but feature-rich
          app that lets you keep track of your contacts. We expect it to take
          between 30-60m if you're following along.
        </p>
        <div>
          <img
            src="https://reactrouter.com/_docs/tutorial/15.webp"
            style={{ width: "100%", height: "100%" }}
          ></img>
        </div>
        <p>
          👉 Every time you see this it means you need to do something in the
          app!
        </p>
        <p>
          The rest is just there for your information and deeper understanding.
          Let's get to it.
        </p>
        <h4>Setup</h4>
        <p>NOTE</p>
        <p>
          If you're not going to follow along in your own app, you can skip this
          section
        </p>
        <p>
          We'll be using Vite for our bundler and dev server for this tutorial.
          You'll need Node.js installed for the npm command line tool.
        </p>
        <p>
          👉️ Open up your terminal and bootstrap a new React app with Vite:
        </p>
        <div class="card " style={{ background: "#f2f0eb" }}>
          <div class="card-body">
            <pre className="text-secondary" style={{ color: "" }}>
              <code>{content}</code>
            </pre>
          </div>
        </div>
        <p>You should be able to visit the URL printed in the terminal:</p>
        <div class="card " style={{ background: "#f2f0eb" }}>
          <div class="card-body">
            <pre className="text-secondary" style={{ color: "" }}>
              <code>{content1}</code>
            </pre>
          </div>
        </div>
        <p>
          We've got some pre-written CSS for this tutorial so we can stay
          focused on React Router. Feel free to judge it harshly or write your
          own 😅 (We did things we normally wouldn't in CSS so that the markup
          in this tutorial could stay as minimal as possible.)
        </p>
        <p>👉 Copy/Paste the tutorial CSS found here into src/index.css</p>
        <p>
          This tutorial will be creating, reading, searching, updating, and
          deleting data. A typical web app would probably be talking to an API
          on your web server, but we're going to use browser storage and fake
          some network latency to keep this focused. None of this code is
          relevant to React Router, so just go ahead and copy/paste it all.
        </p>
        <p>
          👉 Copy/Paste the tutorial data module found here into src/contacts.js
        </p>
        <p>
          All you need in the src folder are contacts.js, main.jsx, and
          index.css. You can delete anything else (like App.js and assets,
          etc.).
        </p>
        <p>👉 Delete unused files in src/ so all you have left are these:</p>
        <div class="card " style={{ background: "#f2f0eb" }}>
          <div class="card-body">
            <pre className="text-secondary" style={{ color: "" }}>
              <code>{content2}</code>
            </pre>
          </div>
        </div>
        <p>
          If your app is running, it might blow up momentarily, just keep going
          😋. And with that, we're ready to get started!
        </p>
        <h4>Adding a Router</h4>
        <p>
          First thing to do is create a Browser Router and configure our first
          route. This will enable client side routing for our web app.
        </p>
        <p>
          The main.jsx file is the entry point. Open it up and we'll put React
          Router on the page.
        </p>
        <p>👉 Create and render a browser router in main.jsx</p>
        <div class="card " style={{ background: "#f2f0eb" }}>
            
          <div class="card-body">
          <p>main.js</p><hr></hr>
            <pre className="text-secondary" style={{ color: "" }}>
              <code>{content3}</code>
            </pre>
          </div>
        </div>
        <p>
          This first route is what we often call the "root route" since the rest
          of our routes will render inside of it. It will serve as the root
          layout of the UI, we'll have nested layouts as we get farther along.
        </p>
      </div>
    </>
  );
};
