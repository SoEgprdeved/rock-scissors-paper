import challengePlayers from './challenge-players'
import revealConflict from './reveal-conflict'
import settleDispute from './settle-dispute'
import discloseDecision from './disclose-decision'
import announce from './disclose-decision/announce'
import pipe from '../helpers/pipe'

const round = pipe
(
  revealConflict,
  settleDispute,
  discloseDecision
)

const fight = ([x, y]) => typeof x === 'undefined' ? announce(1) : round([x,y])

const playRound = () => fight(challengePlayers())

export default playRound
