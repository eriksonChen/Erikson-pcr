import { E3pcrPage } from './app.po';

describe('e3pcr App', () => {
  let page: E3pcrPage;

  beforeEach(() => {
    page = new E3pcrPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
