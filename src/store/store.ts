import { createMemo } from 'solid-js'
import { createStore, produce } from 'solid-js/store'
import { Currency } from '../model/Currency'
import { Fee } from '../model/Fee'
import { Language } from '../model/Language'
import { StudyCourse } from '../model/StudyCourse'
import { University } from '../model/University'
import { UniversityView } from '../model/UniversityView'
import {
	createLanguageFilter,
	createStudyCourseFilter,
	createFeeFilter,
} from '../service/universityFilters'

export type RootState = {
	filter: {
		studyCourses: StudyCourse[]
		maxFee: Fee
		ignoreAdditionalFees: boolean
		languages: Language[]
	}
	view: {
		universities: UniversityView
	}
	universities: University[]
}

const initialState: RootState = {
	filter: {
		languages: [],
		studyCourses: [],
		maxFee: {
			amount: 0,
			currency: Currency.EUR,
			timespan: 1,
		},
		ignoreAdditionalFees: true,
	},
	view: {
		universities: UniversityView.CARD,
	},
	universities: [...Array(5).keys()].map(() => ({
		name: 'NAK',
		studyCourses: ['AINF'],
		fees: {
			studyFee: {
				amount: 5000,
				currency: Currency.EUR,
				timespan: 1,
			},
			additional: [
				{
					amount: 200,
					currency: Currency.EUR,
					timespan: 3,
					name: 'Housing',
				},
			],
		},
		languages: [Language.DE, Language.EN],
		websites: {
			main: 'http://google.de',
			additional: [
				{
					name: 'hallo',
					url: 'https://google.de',
				},
			],
		},
		experienceReports: [
			{
				name: 'my Report',
				url: 'http://google.de',
			},
			{
				name: 'my Report 2',
				url: 'http://google.de',
			},
		],
	})),
}

const [state, originalSetState] = createStore(initialState)

const setState = (fn: (s: RootState) => void) =>
	originalSetState(produce<RootState>(fn))

export { state, setState }
