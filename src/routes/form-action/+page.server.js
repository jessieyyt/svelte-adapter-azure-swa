/** @type {import('./$types').Actions} */
export const actions = {
  submit: async ({ request }) => {
    const data = await request.formData();
    const name = data.get('name');

    return {
      success: true,
      message: `Hello, ${name}! Form action processed.`
    };
  }
};
