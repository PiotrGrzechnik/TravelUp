import LocalizedStrings from 'react-localization'

const t = new LocalizedStrings({
  en: {
    registrationFormTitle: 'Create a new account',
    userLoginErrorNetwork: 'Something went wrong, please try again later',
    userDataIdNotProvided: 'ID is not provided',
    userNameIsRequired: ' is required!',
    userPasswordConfirmDifferent: 'The two passwords are different!',
    userConfirmYourPassword: 'Please confirm your password!',
  },
})

export { t }
