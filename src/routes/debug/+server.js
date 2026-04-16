/** @type {import('./$types').RequestHandler} */
export async function GET({ request, url }) {
  // This shows what URL SvelteKit sees after svelte-adapter-azure-swa
  // reconstructs it from the x-ms-original-url header.
  return new Response(
    JSON.stringify(
      {
        parsed_origin: url.origin,
        parsed_pathname: url.pathname,
        parsed_search: url.search,
        parsed_href: url.href,
        raw_header: request.headers.get('x-ms-original-url') ?? '(not present)'
      },
      null,
      2
    ),
    {
      headers: { 'Content-Type': 'application/json' }
    }
  );
}
