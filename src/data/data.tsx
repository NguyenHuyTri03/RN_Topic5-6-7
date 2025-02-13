import { OnboardingPrograms } from "../typescheck/onboardingTypesCheck";

export const OnboardingData: OnboardingPrograms[] = [
    {
        '_id': 'onboard1',
        'text': 'Img 1',
        'imgUrl': require('../../assets/onboarding/cat404.json'),
        'textColor': '#3e3e3e',
        'bgColor': '#7e7e7e'
    },
    {
        '_id': 'onboard2',
        'text': 'Img 2',
        'imgUrl': require('../../assets/onboarding/panda.json'),
        'textColor': '#3e3e3e',
        'bgColor': '#7e7e7e'
    }
]