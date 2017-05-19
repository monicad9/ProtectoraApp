import { AppcompletaPage } from './app.po';

describe('appcompleta App', () => {
  let page: AppcompletaPage;

  beforeEach(() => {
    page = new AppcompletaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
