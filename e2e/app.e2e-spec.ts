import { Angular2AccPage } from './app.po';

describe('angular2-acc App', () => {
  let page: Angular2AccPage;

  beforeEach(() => {
    page = new Angular2AccPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
