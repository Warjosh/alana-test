import { AlanaTestPage } from './app.po';

describe('alana-test App', () => {
  let page: AlanaTestPage;

  beforeEach(() => {
    page = new AlanaTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
