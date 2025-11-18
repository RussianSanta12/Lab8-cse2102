const scoreController = {
  score: 0,
  count: 0,

  recordAnswer(isCorrect) {
    if (isCorrect) this.score += 1;
    this.count += 1;
  },

  getScore() {
    return { score: this.score, count: this.count };
  },

  reset() {
    this.score = 0;
    this.count = 0;
  }
};

export default scoreController;
