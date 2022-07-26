const readline = require('readline');
const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const print = (message) => {
  console.log(message);
};

const gameStartMessage = () => {
  print('じゃんけんゲーム★');
  print('0： グー, 1: チョキ, 2： パー のどれかを入力して下さい');
};

gameStartMessage();

readlineInterface.on('line', (line) => {
  const playerHand = Number(line);
  const janken = () => {
    const inValidHands = [0, 1, 2];
    const hasInValidHand = inValidHands.includes(playerHand);
    const cpuHand = Math.round(Math.random() * 2);

    const judge = () => {
      const result = (playerHand - cpuHand + 3) % 3;
      const isDraw = result === 0;
      const isLose = result === 1;
      const isVictory = result === 2;
      const message =
        (!hasInValidHand && '不正な値です') ||
        (isVictory && 'あなたの勝ちです') ||
        (isLose && 'あなたの負けです') ||
        (isDraw && '引き分けです');
      print(message);
    };
    return judge();
  };
  janken();
  gameStartMessage();
});

readlineInterface.on('close', () => {
  print('お疲れさまでした');
});
