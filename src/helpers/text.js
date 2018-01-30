const show = message => prompt(message).toUpperCase()

const invalid = 'Invalid entry.'

export const entry = () => show
(
  'PLAYERS vs CPU\n\nRock, scissors or paper?'
)

export const retry = () => show
(
  invalid + '\n\nValue must be either rock, scissors or paper.'
)

export const failed = () => alert
(
  invalid + '\n\nWe\'re sorry, no more attempts left.'
)
