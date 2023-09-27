import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar mx-5" style={{ width: "330px" }}>
      <h5>Get Started</h5>
      <ul className="list-unstyled text-secondary m-3 ">
        <li>
          <Link to="/FeatureOverview">Feature Overview</Link>
        </li>
        <li>
          <Link to="/Tutorial">Tutorial</Link>
        </li>
        <li>
          <Link to="/Examples">Examples</Link>
        </li>
        <li>
          <Link to="/FAQs">FAQs</Link>
        </li>

        <li>Main Concepts</li>
      </ul>

      <h5>Upgrading</h5>
      <ul className="list-unstyled text-secondary m-3 ">
        <li>Migrating to RouterProvider</li>
        <li>Upgrading from v5</li>
        <li>Migrating from @reach/router</li>
      </ul>

      <h5>Routers</h5>
      <ul className="list-unstyled text-secondary m-3">
        <li>Picking a Router 🆕</li>
        <li>createBrowserRouter 🆕</li>
        <li>createHashRouter 🆕</li>
        <li>createMemoryRouter 🆕</li>
        <li>createStaticHandler 🆕</li>
        <li>createStaticRouter 🆕</li>
        <li>RouterProvider 🆕</li>
        <li>StaticRouterProvider 🆕</li>
      </ul>

      <h5>Router Components</h5>
      <ul className="list-unstyled text-secondary m-3">
        <li>BrowserRouter</li>
        <li>HashRouter</li>
        <li>MemoryRouter</li>
        <li>NativeRouter</li>
        <li>StaticRouter</li>
      </ul>

      <h5>Routes</h5>
      <ul className="list-unstyled text-secondary m-3">
        <li>Route 🆕</li>
        <li>action 🆕</li>
        <li>errorElement 🆕</li>
        <li>lazy 🆕</li>
        <li>loader 🆕</li>
        <li>shouldRevalidate🆕</li>
      </ul>
      <h5>Components</h5>
      <ul className="list-unstyled text-secondary m-3">
        <li> Await 🆕</li>
        <li>Form 🆕</li>
        <li>Link</li>
        <li>Link (RN)</li>
        <li>NavLink</li>
        <li>Navigate</li>
        <li>Outlet</li>
        <li>Route</li>
        <li>Routes</li>
        <li>ScrollRestoration 🆕</li>
      </ul>
      <h5>Components</h5>
      <ul className="list-unstyled text-secondary m-3">
        <li> useActionData 🆕</li>
        <li>useAsyncError 🆕</li>
        <li>useAsyncValue 🆕</li>
        <li>useBeforeUnload 🆕</li>
        <li>useFetcher 🆕</li>
        <li>useFetchers 🆕</li>
        <li>useFormAction 🆕</li>
        <li>useHref</li>
        <li>useInRouterContext</li>
        <li>useLinkClickHandler </li>
        <li> useLinkPressHandler</li>
        <li>useLoaderData 🆕</li>
        <li>useLocation</li>
        <li>useMatch</li>
        <li>useMatches 🆕</li>
        <li>useNavigate</li>
        <li>useNavigation 🆕</li>
        <li>useNavigationType</li>
        <li>useOutlet</li>
        <li>useOutletContext </li>
        <li> useParams</li>
        <li>useResolvedPath</li>
        <li>useRevalidator 🆕</li>
        <li>useRouteError 🆕</li>
        <li>useRouteLoaderData 🆕</li>
        <li>useRoutes</li>
        <li>useSearchParams</li>
        <li>useSearchParams (RN)</li>
        <li>useSubmit 🆕</li>
      </ul>
      <h5>Fetch Utilities</h5>
      <ul className="list-unstyled text-secondary m-3">
        <li>json 🆕</li>
        <li>redirect 🆕</li>
        <li>redirectDocument 🆕</li>
      </ul>
      <h5>Utilities</h5>
      <ul className="list-unstyled text-secondary m-3">
        <li> createRoutesFromChildren</li>
        <li>createRoutesFromElements</li>
        <li>createSearchParams</li>
        <li>generatePath</li>
        <li>isRouteErrorResponse 🆕</li>
        <li>Location</li>
        <li>matchPath</li>
        <li>matchRoutes</li>
        <li>renderMatches</li>
        <li>ScrollRestoration 🆕</li>
        <li>resolvePath</li>
      </ul>

      <h5>Guides</h5>
      <ul className="list-unstyled text-secondary m-3">
        <li> Server-Side Rendering</li>
        <li>createRoutesFromElements</li>
        <li>Contributing</li>
        <li>API Development Strategy 🆕</li>
        <li>Data Library Integration</li>
        <li>Deferred Data 🆕</li>
        <li>Working With FormData 🆕</li>
        <li>Index Query Param 🆕</li>
      </ul>
    </div>
  );
}

export default Sidebar;
