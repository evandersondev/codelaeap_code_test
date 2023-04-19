import { toast } from 'react-toastify'

export function showSuccessNotification(message: string) {
	return toast(message, {
		theme: 'colored',
		type: 'success',
		style: {
			background: '#47B960',
			color: '#ffffff',
			fontWeight: 'bold',
		},
	})
}
