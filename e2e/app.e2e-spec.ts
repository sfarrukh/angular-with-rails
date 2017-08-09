import { NewAngularPage } from './app.po';

describe('new-angular App', () => {
  let page: NewAngularPage;

  beforeEach(() => {
    page = new NewAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
