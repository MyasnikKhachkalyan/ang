import { InOnePage } from './app.po';

describe('in-one App', () => {
  let page: InOnePage;

  beforeEach(() => {
    page = new InOnePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
