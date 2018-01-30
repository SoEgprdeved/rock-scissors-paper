import player from './player'
import cpu from './cpu'

const inciteDebate = options =>
{
  const playerProposal = player(options)
  const cpuProposal = cpu(options)

  return [playerProposal, cpuProposal]
}

const challengePlayers = () => inciteDebate
(
  [
    'ROCK',
    'SCISSORS',
    'PAPER'
  ]
)

export default challengePlayers
