document.getElementById('yesButton').addEventListener('click', function() {
  document.getElementById('question').innerText = "yown papayag din pala!!!";
  document.getElementById('answer-buttons').style.display = "none";
  document.getElementById('message').innerText = "Happy Valentine's Day! MAHAL";
  document.getElementById('message').style.display = "block";
});

document.getElementById('noButton').addEventListener('click', function() {
  const phrases = [
    "sure kana?",
    "sige naaa",
    "pagisipan mo",
    " chance mo na to uy!",
    "Pogi pa naman ako",
    "bahala ka",
    "ikaw rin",
    "ano? ayaw talaga?",
    "bukas nato",
    "pagbibigyan pa kita ",
    "YES NA!",
    "AY KATAGAL",
    "GO NA SIS!",
    "final na ba?",
    "K! ;("
  ];

  const noCount = parseInt(document.getElementById('noButton').dataset.count) || 0;
  const nextPhraseIndex = Math.min(noCount, phrases.length - 1);

  document.getElementById('question').innerText = phrases[nextPhraseIndex];
  document.getElementById('noButton').dataset.count = noCount + 1;
});
