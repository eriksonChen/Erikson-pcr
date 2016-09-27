import { WebsiteErPage } from './app.po';

describe('website-er App', function() {
  let page: WebsiteErPage;

  beforeEach(() => {
    page = new WebsiteErPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
