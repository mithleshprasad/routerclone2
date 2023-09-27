import React from "react";

export const FAQs = () => {
    const content=`
    import {
        useLocation,
        useNavigate,
        useParams,
      } from "react-router-dom";
      
      function withRouter(Component) {
        function ComponentWithRouterProp(props) {
          let location = useLocation();
          let navigate = useNavigate();
          let params = useParams();
          return (
            <Component
              {...props}
              router={{ location, navigate, params }}
            />
          );
        }
      
        return ComponentWithRouterProp;
      }
    `;
    const content1=`
    // Ah, this is nice and simple!
<Route path=":userId" component={Profile} />

// But wait, how do I pass custom props to the <Profile> element??
// Hmm, maybe we can use a render prop in those situations?
<Route
  path=":userId"
  render={routeProps => (
    <Profile routeProps={routeProps} animate={true} />
  )}
/>

// Ok, now we have two ways to render something with a route. :/

// But wait, what if we want to render something when a route
// *doesn't* match the URL, like a Not Found page? Maybe we
// can use another render prop with slightly different semantics?
<Route
  path=":userId"
  children={({ match }) => (
    match ? (
      <Profile match={match} animate={true} />
    ) : (
      <NotFound />
    )
  )}
/>

// What if I want to get access to the route match, or I need
// to redirect deeper in the tree?
function DeepComponent(routeStuff) {
  // got routeStuff, phew!
}
export default withRouter(DeepComponent);

// Well hey, now at least we've covered all our use cases!
// ... *facepalm*
    `;
  return (
    <>
      <div className="container m-5">
        <h3>FAQs</h3>
        <p>
          Here are some questions that people commonly have about React Router
          v6. You might also find what you're looking for in the examples.
        </p>
        <h4 className="mt-2">What happened to withRouter? I need it!</h4>
        <p>
          This question usually stems from the fact that you're using React
          class components, which don't support hooks. In React Router v6, we
          fully embraced hooks and use them to share all the router's internal
          state. But that doesn't mean you can't use the router. Assuming you
          can actually use hooks (you're on React 16.8+), you just need a
          wrapper.
        </p>
        <div class="card " style={{ background: "#f2f0eb" }}>
          <div class="card-body">
            <pre className="text-secondary" style={{ color: " " }}>
              <code>{content}</code>
            </pre>
          </div>       
        </div>
        <h4 className="mt-2">Why does Route have an element prop instead of render or component?</h4>
        <p>In React Router v6 we switched from using v5's Route component and Route render APIs to Route element. Why is that?</p>
        <p>For starters, we see React itself taking the lead here with the Suspense fallback = Spinner  API. The fallback prop takes a React element, not a component. This lets you easily pass whatever props you want to your Spinner from the component that renders it.</p>
        <p>Also, Route's rendering API in v5 was rather large. As we worked on v4/5, the conversation went something like this:</p>
        <div class="card " style={{ background: "#f2f0eb" }}>
          <div class="card-body">
            <pre className="text-secondary" style={{ color: " " }}>
              <code>{content1}</code>
            </pre>
          </div>       
        </div>
      </div>
    </>
  );
};
