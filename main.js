console.log('Up and Running')

const computerPlay = () => {
  const plays = ['Rock', 'Paper', 'Scissors']
  const randNum = Math.floor(Math.random() * 3)
  return plays[randNum]
}

const playRound = (playerSelection, computerSelection) => {
  const downPlayerSelection = playerSelection.toLowerCase()
  const downComputerSelection = computerSelection.toLowerCase()
  if (downPlayerSelection === downComputerSelection) {
    console.log('Tie')
    return 0
  } else if (
    downPlayerSelection === 'rock' &&
    downComputerSelection === 'scissors'
  ) {
    console.log('You Win! Rock beats Scissors')
    return 1
  } else if (
    downPlayerSelection === 'paper' &&
    downComputerSelection === 'rock'
  ) {
    console.log('You Win! Paper beats Rock')
    return 1
  } else if (
    downPlayerSelection === 'scissors' &&
    downComputerSelection === 'paper'
  ) {
    console.log('You Win! Scissors beats Paper')
    return 1
  } else if (
    downPlayerSelection === 'rock' &&
    downComputerSelection === 'paper'
  ) {
    console.log('You Lose! Paper beats Rock')
    return -1
  } else if (
    downPlayerSelection === 'paper' &&
    downComputerSelection === 'scissors'
  ) {
    console.log('You Lose! Scissors beats Paper')
    return -1
  } else if (
    downPlayerSelection === 'scissors' &&
    downComputerSelection === 'rock'
  ) {
    console.log('You Lose! Rock beats Scissors')
    return -1
  } else {
    return 0
  }
}

const game = () => {
  const score = { player: 0, computer: 0 }
  let plays = 0
  while (plays < 5) {
    const player = prompt("Please enter 'Rock', 'Paper', or 'Scissors': ")
    const result = playRound(player, computerPlay())
    if (!result) {
      console.log('Please enter a correct instruction')
      continue
    }
    plays++
    if (result) {
      result === 1 ? score['player']++ : score['computer']++
    }
    console.log(score)
  }
}

console.log(computerPlay())
console.log(game())
