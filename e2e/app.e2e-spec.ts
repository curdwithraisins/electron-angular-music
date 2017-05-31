import { ElectronAngularMusicPage } from './app.po';

describe('electron-angular-music App', () => {
  let page: ElectronAngularMusicPage;

  beforeEach(() => {
    page = new ElectronAngularMusicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
