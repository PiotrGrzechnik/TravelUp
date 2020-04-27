import LocalizedStrings from 'react-localization'

const t = new LocalizedStrings({
  en: {
    userLoginErrorNetwork: 'Something went wrong, please try again later',
    userDataIdNotProvided: 'ID is not provided',
    userNameIsRequired: ' is required!',
  },
})

export { t }
