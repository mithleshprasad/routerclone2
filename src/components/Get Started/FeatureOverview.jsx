import React from "react";

export const FeatureOverview = () => {
  const contentCss = `
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
      `;
 const sidebarCss = `
        // Configure nested routes with JSX
        createBrowserRouter(
          createRoutesFromElements(
            <Route path="/" element={<Root />}>
              <Route path="contact" element={<Contact />} />
              <Route
                path="dashboard"
                element={<Dashboard />}
                loader={({ request }) =>
                  fetch("/api/dashboard.json", {
                    signal: request.signal,
                  })
                }
              />
              <Route element={<AuthLayout />}>
                <Route
                  path="login"
                  element={<Login />}
                  loader={redirectIfUser}
                />
                <Route path="logout" action={logoutUser} />
              </Route>
            </Route>
          )
        );
        
        // Or use plain objects
        createBrowserRouter([
          {
            path: "/",
            element: <Root />,
            children: [
              {
                path: "contact",
                element: <Contact />,
              },
              {
                path: "dashboard",
                element: <Dashboard />,
                loader: ({ request }) =>
                  fetch("/api/dashboard.json", {
                    signal: request.signal,
                  }),
              },
              {
                element: <AuthLayout />,
                children: [
                  {
                    path: "login",
                    element: <Login />,
                    loader: redirectIfUser,
                  },
                  {
                    path: "logout",
                    action: logoutUser,
                  },
                ],
              },
            ],
          },
        ]);
      `;
const Content=`
1 <Route path="projects/:projectId/tasks/:taskId" />
`;

const Content1=`
// If the current location is /projects/abc/tasks/3
<Route
  // sent to loaders
  loader={({ params }) => {
    params.projectId; // abc
    params.taskId; // 3
  }}
  // and actions
  action={({ params }) => {
    params.projectId; // abc
    params.taskId; // 3
  }}
  element={<Task />}
/>;

function Task() {
  // returned from useParams
  const params = useParams();
  params.projectId; // abc
  params.taskId; // 3
}

function Random() {
  const match = useMatch(
    "/projects/:projectId/tasks/:taskId"
  );
  match.params.projectId; // abc
  match.params.taskId; // 3
}
`;
  return (
    <>
      <div className="container m-5">
        <h3> Feature Overview</h3>
        <h4>Client Side Routing</h4>
        <p className="mt-2">React Router enables "client side routing".</p>
        <p>
          In traditional websites, the browser requests a document from a web
          server, downloads and evaluates CSS and JavaScript assets, and renders
          the HTML sent from the server. When the user clicks a link, it starts
          the process all over again for a new page.
        </p>
        <p>
          Client side routing allows your app to update the URL from a link
          click without making another request for another document from the
          server. Instead, your app can immediately render some new UI and make
          data requests with fetch to update the page with new information.
        </p>
        <p>
          This enables faster user experiences because the browser doesn't need
          to request an entirely new document or re-evaluate CSS and JavaScript
          assets for the next page. It also enables more dynamic user
          experiences with things like animation.
        </p>
        <p>linking/submitting to pages with Link and Form:</p>
     
        <div class="card " style={{ background: "#f2f0eb" }}>
          <div class="card-body">
            <pre className="text-secondary" style={{ color: "" }}>
              <code>{contentCss}</code>
            </pre>
          </div>
         
        </div>
        <h4 className="mt-2">Nested Routes</h4>
          <p>
            Nested Routing is the general idea of coupling segments of the URL
            to component hierarchy and data. React Router's nested routes were
            inspired by the routing system in Ember.js circa 2014. The Ember
            team realized that in nearly every case, segments of the URL
            determine:
         
          </p>
          <li>The layouts to render on the page</li>
            <li>The data dependencies of those layouts</li>
          <p>React Router embraces this convention with APIs for creating nested layouts coupled to URL segments and data.</p>
          <div class="card " style={{ background: "#f2f0eb" }}>
          <div class="card-body">
            <pre className="text-secondary" style={{ color: "" }}>
              <code>{sidebarCss}</code>
            </pre>
          </div>       
        </div>
        <p className="mt-2">This <a href="#" className="text-dark">visualization</a> might be helpful.</p>
        <h4>Dynamic Segments</h4>
        <p>Segments of the URL can be dynamic placeholders that are parsed and provided to various apis.</p>
        <div class="card " style={{ background: "#f2f0eb" }}>
          <div class="card-body">
            <pre className="text-secondary" style={{ color: "" }}>
              <code>{Content}</code>
            </pre>
          </div>       
        </div>
        <p>The two segments with : are dynamic, and provided to the following APIs:</p>
        <div class="card " style={{ background: "#f2f0eb" }}>
          <div class="card-body">
            <pre className="text-secondary" style={{ color: "" }}>
              <code>{Content1}</code>
            </pre>
          </div>       
        </div>
      </div>
    </>
  );
};
