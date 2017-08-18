import { SupportfirstPage } from './app.po';

describe('supportfirst App', function() {
  let page: SupportfirstPage;

  beforeEach(() => {
    page = new SupportfirstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
