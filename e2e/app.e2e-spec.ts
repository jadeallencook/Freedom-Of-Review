import { FreedomOfReviewPage } from './app.po';

describe('freedom-of-review App', () => {
  let page: FreedomOfReviewPage;

  beforeEach(() => {
    page = new FreedomOfReviewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
