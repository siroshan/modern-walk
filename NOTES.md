# NEXT JS

## Pages

- The pages router has file-system based router.
- When a file is added to pages directory it's automatically available as a page. `
pages/contact.tsx`
- But best practice is using **Index Routes**. Create a folder with name of the route, then add an index file. `pages/about/index.tsx`
- The router supports nested files. If you create a nested folder structure, files will automatically be routed in the same way still.  
- Next.js supports pages with dynamic routes. If you create a file called `pages/products/[id].tsx`, then it will be accessible at `products/1`, `products/2`, etc. Here `id` is the dynamic segment. Dynamic segments can be accessed from `useRouter`,
- It allows single shared layout for the entire application using custom app. (e.g.: Application usually have same navigation bar and footer on every page.)
- It also allows to add layout per page as well. If you need multiple layouts, you can add a property `getLayout` to your page, allowing you to return a React component for the layout. 


## Data Fetching
- If you export a function called `getStaticProps` (Static Site Generation) from a  page, Next.js will pre-render this page at build time using the props returned by `getStaticProps`.
- Usually can be used for home page, or any other pages where user specific data is not need.
- If a page has dynamic routes and uses  `getStaticProps`, it needs to define a list of paths to be statically generated.
- When you export a function called  `getStaticPaths`  (Static Site Generation) from a page that uses dynamic routes, Next.js will statically pre-render all the paths specified by  `getStaticPaths`.
- It's useful for pre-rendering the specific products' pages for SEO purposes.
- Next.js allows you to create or update static pages _after_ you’ve built your site. Incremental Static Regeneration (ISR) enables you to use static-generation on a per-page basis, **without needing to rebuild the entire site**. With ISR, you can retain the benefits of static while scaling to millions of pages.
- If you export  `getServerSideProps` (Server-Side Rendering) function from a page, Next.js will pre-render this page on each request using the data returned by `getServerSideProps`.

## Custom App
Next.js uses the  `App`  component to initialize pages. You can override it and control the page initialization and:

-   Persist layouts between page changes
-   Keeping state when navigating pages
-   Inject additional data into pages
-   Add global CSS 

Adding a custom `getInitialProps` in your `App` will disable Automatic Static Optimization in pages without static generation.

`App` does not support Next.js Data Fetching methods like `getStaticProps` or `getServerSideProps`

## Custom Document
A custom `Document` can update the `<html>` and `<body>` tags used to render a Page. This file is only rendered on the server, so event handlers like `onClick` cannot be used in `_document`.

`Document` currently does not support Next.js Data Fetching methodslike `getStaticProps`or `getServerSideProps`

## Custom Server

It should only be used when the integrated router of Next.js can't meet your app requirements.

A custom server will remove important performance optimizations, like **serverless functions** and **Automatic Static Optimization**

## App Routing

For app routing use `useRouter` from `next/navigation` (for the page routing we use `useRouter` from `next/router` ). 

It allow us to choose the rendering environment(**server** or **client**) at the component level. By default all the compoents are rendered on server. If we want to make the component to render it on client we use `use client` directive at the top of the component file.

Add interactivity and event listeners (`onClick()`,  `onChange()`, etc), Use State and Lifecycle Effects (`useState()`,  `useReducer()`,  `useEffect()`, etc) and browser only APIs only can be used on client. If the component falls under this case use define `use client`.

### Static Rendering

With  **Static Rendering**, both Server  _and_  Client Components can be prerendered on the server at  **build time**. The result of the work is  cached and reused on subsequent requests. The cached result can also be revalidated. Equivalent to SSG and ISR.

Server and Client Components are rendered differently during Static Rendering:

-   Client Components have their HTML and JSON prerendered and cached on the server. The cached result is then sent to the client for hydration.
-   Server Components are rendered on the server by React, and their payload is used to generate HTML. The same rendered payload is also used to hydrate the components on the client, resulting in no JavaScript needed on the client.

### Dynamic Rendering
With Dynamic Rendering, both Server  _and_  Client Components are rendered on the server at  **request time**. The result of the work is not cached. Equivalent to SSR.

### Pros of App Routing
- We can fetch data on component level rather than page level.
- Instead of making whole page to render it on server or on the client, we can choose which component to render it on client or server.
- Reducing JS usage on client.

### Cons of App Routing
- Relativley new. Less resources available.
- Hydration issues can be tricky to resolve.
- To get the full advantage, we might have to separate components depending on the use case. 



# React Hydration

In React, “hydration” is  **how React “attaches” to existing HTML that was already rendered by React in a server environment**. During hydration, React will attempt to attach event listeners to the existing markup and take over rendering the app on the client.

While rendering your application, there was a difference between the React tree that was pre-rendered (SSR/SSG) and the React tree that rendered during the first render in the Browser. The first render is called Hydration. This can cause the React tree to be out of sync with the DOM and result in unexpected content/attributes being present.
