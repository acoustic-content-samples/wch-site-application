import { ProdOobPage } from './app.po';

describe('prod-oob App', () => {
  let page: ProdOobPage;

  beforeEach(() => {
    page = new ProdOobPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
