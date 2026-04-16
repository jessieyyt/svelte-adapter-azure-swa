<script>
  export let form;
</script>

<h1>Form Action Demo</h1>
<p>SvelteKit checks that the <code>Origin</code> header matches the request URL origin on POST. If the attacker can spoof the URL origin via <code>x-ms-original-url</code>, this check is bypassed.</p>

<form method="POST" action="?/submit">
  <label>
    Name: <input type="text" name="name" value="test" />
  </label>
  <button type="submit">Submit</button>
</form>

{#if form?.success}
  <p style="color: green;">✅ Form submitted successfully: {form.message}</p>
{/if}
