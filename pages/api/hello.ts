
/**
 * API Endpoint Tips
 * 
 * Do Not Fetch an API Route from getStaticProps or getStaticPaths
 * ---------------------------------------------------------------
 * 
 * You should not fetch an API Route from getStaticProps or getStaticPaths. Instead, write
 * your server-side code directly in getStaticProps or getStaticPaths (or call a helper
 * function).
 * 
 * Here’s why: getStaticProps and getStaticPaths runs only on the server-side. It will never
 * be run on the client-side. It won’t even be included in the JS bundle for the browser. That
 * means you can write code such as direct database queries without them being sent to browsers.
 * 
 * A Good Use Case: Handling Form Input
 * ------------------------------------
 * 
 * A good use case for API Routes is handling form input. For example, you can create a form
 * on your page and have it send a POST request to your API Route. You can then write code to
 * directly save it to your database. The API Route code will not be part of your client bundle,
 * so you can safely write server-side code.
 * 
 * Preview Mode
 * ------------
 * 
 * Static Generation is useful when your pages fetch data from a headless CMS. However, it’s
 * not ideal when you’re writing a draft on your headless CMS and want to preview the draft
 * immediately on your page. You’d want Next.js to render these pages at request time instead
 * of build time and fetch the draft content instead of the published content. You’d want
 * Next.js to bypass Static Generation only for this specific case.
 * 
 * Next.js has a feature called Preview Mode to solve the problem above, and it utilizes API
 * Routes.
 * 
 * To learn more about it take a look at the Preview Mode documentation:
 * (https://nextjs.org/docs/advanced-features/preview-mode)
 * 
 * Dynamic API Routes
 * ------------------
 * 
 * API Routes can be dynamic, just like regular pages.
 * 
 * Take a look at the Dynamic API Routes documentation to learn more:
 * https://nextjs.org/docs/api-routes/dynamic-api-routes
 * 
 */

import { NextApiRequest, NextApiResponse } from "next";

/**
 * An example of an API endpoint in NextJS.
 * 
 * @param {NextApiRequest} _ An instance of NodeJS's http.IncomingMessage, plus some pre-built middlewares (https://nextjs.org/docs/api-routes/api-middlewares).
 * @param {NextApiResponse} res An instance of NodeJS's http.ServerResponse, plus some helper functions (https://nextjs.org/docs/api-routes/response-helpers).
 */
export default function handler(_: NextApiRequest, res: NextApiResponse)
{
    res.status(200).json({ text: "Hello" });
}

// Example API endpoint for form data

// export default function handler(req, res) 
// {
//     const email = req.body.email
//     // Then save email to your database, etc...
// }