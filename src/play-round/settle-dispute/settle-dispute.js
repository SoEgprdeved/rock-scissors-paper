const rules =
[
  'ROCK SCISSORS',
  'SCISSORS PAPER',
  'PAPER ROCK'
]

const victorious = move => rules.includes(move)

const debate = contest => contest.map(victorious)

const brawl = ([player, cpu]) => debate
(
  [
    player + ' ' + cpu,
    cpu + ' ' + player
  ]
)

const settleDispute = players => brawl(players)

export default settleDispute
