import type { APIRoute } from 'astro'

const formSpar = import.meta.env.FORMSPARK

export const POST: APIRoute = async ({ request, redirect }) => {
	const formData = await request.formData()
	const email = formData.get('email')?.toString()
	const checkbox = formData.get('checkbox')?.toString()
	const lovac = formData.get('lovac')?.toString()
	if (request.method !== 'POST') {
		console.log('Method Not Allowed')
		return redirect('kontakt-za-izradu-web-stranice')
	}
	if (!email || checkbox !== 'on') {
		console.log('Nisu popunjena obavezna polja')
		return redirect('kontakt-za-izradu-web-stranice')
	}
	if (lovac) {
		console.log('honeypot spam detected')
		return redirect('kontakt-za-izradu-web-stranice')
	}

	const response = await fetch(`https://submit-form.com/${formSpar}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(Object.fromEntries(formData))
	})

	if (!response.ok) {
		console.log('response error')
		return redirect('kontakt-za-izradu-web-stranice')
	}
	return redirect(`/success-page?email=${email}`)
}
