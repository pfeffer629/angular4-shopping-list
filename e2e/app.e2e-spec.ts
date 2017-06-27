import { UdemyAngularPage } from './app.po';

describe('udemy-angular App', () => {
  let page: UdemyAngularPage;

  beforeEach(() => {
    page = new UdemyAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
