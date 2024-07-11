# React Server Components

[React Server Components](https://react.dev/reference/rsc/server-components) are a new type of Component that renders ahead of time, before bundling, in an environment separate from your client app or SSR server..

## Benefits of React Server Components

here are a couple of benefits to doing the rendering work on the server, including:

- Data Fetching: Server Components allow you to move data fetching to the server, closer to your data source. This can improve performance by reducing time it takes to fetch data needed for rendering, and the number of requests the client needs to make.
- Security: Server Components allow you to keep sensitive data and logic on the server, such as tokens and API keys, without the risk of exposing them to the client.
- Caching: By rendering on the server, the result can be cached and reused on subsequent requests and across users. This can improve performance and reduce cost by reducing the amount of rendering and data fetching done on each request.
- Performance: Server Components give you additional tools to optimize performance from the baseline. For example, if you start with an app composed of entirely Client Components, moving non-interactive pieces of your UI to Server Components can reduce the amount of client-side JavaScript needed. This is beneficial for users with slower internet or less powerful devices, as the browser has less client-side JavaScript to download, parse, and execute.
- Initial Page Load and First Contentful Paint (FCP): On the server, we can generate HTML to allow users to view the page immediately, without waiting for the client to download, parse and execute the JavaScript needed to render the page.
- Search Engine Optimization and Social Network Shareability: The rendered HTML can be used by search engine bots to index your pages and social network bots to generate social card previews for your pages.
- Streaming: Server Components allow you to split the rendering work into chunks and stream them to the client as they become ready. This allows the user to see parts of the page earlier without having to wait for the entire page to be rendered on the server.
  

## Downsides Of Server Components

Server components are no exception and there are a few downsides with using them:

- No Interactivity: Since server components are rendered on the server it is impossible for you to have any interactivity in your server components. This means you cannot use React hooks, event listeners, or any other code that involves user interaction.
- No Browser APIs: Another downside is you cannot use any browser APIs in server components since they are rendered on the server and have no access to client APIs. This means things like localStorage, navigator, and window are all unavailable in server components. This again isn’t a major problem since you can just use nested client components to access these APIs.
- Cannot Easily Be Nested In Client Components: Server components cannot be nested inside clients components. This is somewhat obvious as a client component is rendered on the client so you cannot also have a server component inside of it.