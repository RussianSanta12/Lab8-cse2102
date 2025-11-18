import scoreController from '../controllers/scoreController';

describe('scoreController', () => {
  beforeEach(() => {
    scoreController.reset();
  });

  beforeAll(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  test('records correct and incorrect answers', () => {
    scoreController.recordAnswer(true);
    scoreController.recordAnswer(false);
    const s = scoreController.getScore();
    expect(s.score).toBe(1);
    expect(s.count).toBe(2);
  });

  test('reset clears values', () => {
    scoreController.recordAnswer(true);
    scoreController.reset();
    const s = scoreController.getScore();
    expect(s.score).toBe(0);
    expect(s.count).toBe(0);
  });
});
