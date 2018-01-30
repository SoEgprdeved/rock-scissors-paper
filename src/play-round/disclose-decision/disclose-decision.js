import announce from './announce'

const victory = (x, y) => x || y == true

const discloseDecision = results =>
{
  const hasWinner = results.reduce(victory)
  const winner = results.indexOf(true)

  return hasWinner ? announce(winner) : announce()
}

export default discloseDecision
