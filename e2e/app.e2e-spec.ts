import { AngularworkshopspotifyEmptyPage } from './app.po';

describe('angularworkshopspotify-empty App', () => {
  let page: AngularworkshopspotifyEmptyPage;

  beforeEach(() => {
    page = new AngularworkshopspotifyEmptyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
