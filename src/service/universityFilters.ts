import { Fee, Language, StudyCourse, University } from '../store/store'

// todo: currency conversion
export const createFeeFilter =
	(thresholdFee: Fee) => (university: University) => {
		const thresholdPerMonth = thresholdFee.amount / thresholdFee.timespan
		if (thresholdPerMonth === 0) {
			return true
		}
		const universityPerMonth =
			university.fees.studyFee.amount / university.fees.studyFee.timespan
		return (
			thresholdFee.currency === university.fees.studyFee.currency &&
			thresholdPerMonth > universityPerMonth
		)
	}

export const createStudyCourseFilter =
	(studyCourses: StudyCourse[]) => (university: University) => {
		return (
			studyCourses.length === 0 ||
			university.studyCourses.length === 0 ||
			studyCourses.some(studyCourse =>
				university.studyCourses.includes(studyCourse)
			)
		)
	}

export const createLanguageFilter =
	(languages: Language[]) => (university: University) => {
		return (
			languages.length === 0 ||
			university.languages.length === 0 ||
			languages.some(language => university.languages.includes(language))
		)
	}
