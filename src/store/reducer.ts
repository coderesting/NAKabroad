import { createMemo } from 'solid-js'
import {
	createLanguageFilter,
	createStudyCourseFilter,
	createFeeFilter,
} from '../service/universityFilters'
import {
	Fee,
	Language,
	setState,
	state,
	StudyCourse,
	UniversityView,
} from './store'

export const setUniversityView = (universityView: UniversityView) =>
	setState(s => (s.view.universities = universityView))

export const setLanguageFilter = (languages: Language[]) =>
	setState(s => (s.filter.languages = languages))

export const setStudyCourseFilter = (studyCourses: StudyCourse[]) =>
	setState(s => (s.filter.studyCourses = studyCourses))

export const setMaxFeeFilter = (maxFee: Fee) =>
	setState(s => (s.filter.maxFee = maxFee))

export const filteredUniversities = createMemo(() => {
	return state.universities
		.filter(createLanguageFilter(state.filter.languages))
		.filter(createStudyCourseFilter(state.filter.studyCourses))
		.filter(createFeeFilter(state.filter.maxFee))
})
