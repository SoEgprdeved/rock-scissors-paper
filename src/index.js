import playRound from './play-round'

const fiveRounds = 5

const final = score =>
{
  const win = x => x === 'YOU WIN'
  const lose = x => x === 'YOU LOSE'
  const playerScore = score.filter(win).length
  const cpuScore = score.filter(lose).length

  return console.log(`1P: ${playerScore} CPU: ${cpuScore}`)
}

const play = (round, score = []) =>
  round == 0 ? final(score)
             : play(round - 1, [...score, playRound()])

play(fiveRounds)
