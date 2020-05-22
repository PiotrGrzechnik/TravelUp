import { getAuthToken, removeAuthToken, setAuthToken } from 'src/utils'

beforeEach(() => {
  // Mock authToken, in token name=Pedro
  Object.defineProperty(window.document, 'cookie', {
    writable: true,
    value:
      'authToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUGVkcm8ifQ.G2yfHADgtJpYOZIx0yHvhWkqCkrqdQabEFXS84AtxVM',
  })
})

describe('getAuthToken', () => {
  test('get data from token correctly', () => {
    expect(getAuthToken().name).toBe('Pedro')
  })

  test('handle wrong token correctly', () => {
    const wrongTokens = {
      accessToken: '1234567890',
    }

    removeAuthToken()
    expect(getAuthToken()).toBe(null)

    setAuthToken(wrongTokens)
    expect(getAuthToken()).toBe(null)
  })
})

describe('removeAuthToken', () => {
  test('remove token cookie correctly', () => {
    expect(getAuthToken()).not.toBe(null)

    removeAuthToken()
    expect(getAuthToken()).toBe(null)
  })
})

describe('setAuthToken', () => {
  test('set token cookie correctly', () => {
    const tokens = {
      accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUGVkcm8ifQ.G2yfHADgtJpYOZIx0yHvhWkqCkrqdQabEFXS84AtxVM',
    }

    removeAuthToken()
    expect(getAuthToken()).toBe(null)

    setAuthToken(tokens)
    expect(getAuthToken()).not.toBe(null)
  })
})
