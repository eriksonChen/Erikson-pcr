import { EriksonWebPage } from './app.po';

describe('erikson-web App', function() {
  let page: EriksonWebPage;

  beforeEach(() => {
    page = new EriksonWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
