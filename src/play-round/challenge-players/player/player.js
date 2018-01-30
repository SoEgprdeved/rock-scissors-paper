import { entry, retry, failed } from '../../../helpers/text'

const player = options  =>
{
  let attempt = 0

  const invalid = () =>
  {
    attempt = 0
    failed()
  }

  const pursuit = endeavor => endeavor == 2 ? invalid() : authenticate(retry())

  const authorized = input => options.includes(input)

  const authenticate = input => authorized(input) ? input : pursuit(attempt++)

  return authenticate(entry())
}

export default player
