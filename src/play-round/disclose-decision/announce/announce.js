const publish =
[
  'YOU WIN',
  'YOU LOSE',
  'DRAW'
]

const print = message => console.log(message)

const announce = (conclusion = 2) =>
{
  const message = publish[conclusion]

  print(message)
  return message
}

export default announce
