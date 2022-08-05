import { Fee } from './Fee'
import { Language } from './Language'

export type University = {
	name: string
	studyCourses: string[]
	fees: {
		studyFee: Fee
		additional?: (Fee & { name: string })[]
	}
	languages: Language[]
	websites: {
		main?: string
		additional?: { url: string; name: string }[]
	}
	experienceReports: { url: string; name: string }[]
}
