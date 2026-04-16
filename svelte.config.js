import azure from 'svelte-adapter-azure-swa';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: azure()
  }
};

export default config;
src/app.html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>SWA Header Injection Demo</title>
</head>
<body>
  <div>%sveltekit.body%</div>
</body>
</html>
