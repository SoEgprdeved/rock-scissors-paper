const reveal = ([player, cpu]) => console.log(`${player} vs ${cpu}`)

const revealConflict = argues =>
{
  reveal(argues)
  return argues
}

export default revealConflict
