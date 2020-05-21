import { parseError } from 'src/utils'

describe('parseError', () => {
  const error = { message: 'This is error message' }
  const errorWithResponse = { response: { error: 'This is error response' } }

  test('parse error message correctly', () => {
    expect(parseError(error)).toStrictEqual({ error: 'This is error message' })
  })

  test('parse error without message correctly', () => {
    expect(parseError('error')).toStrictEqual({
      error: 'Something went wrong, please try again later',
    })
  })

  test('parse error with response correctly', () => {
    expect(parseError(errorWithResponse)).toStrictEqual({ error: 'This is error response' })
  })
})
