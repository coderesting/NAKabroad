import { Fee } from '../store/store'

export function formatFee(fee: Fee) {
	return (
		Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: fee.currency,
		}).format(fee.amount) +
		' for ' +
		fee.timespan +
		' Month'
	)
}
