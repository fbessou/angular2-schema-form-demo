import { Angular2SchemaFormPage } from './app.po';

describe('angular2-schema-form App', () => {
  let page: Angular2SchemaFormPage;

  beforeEach(() => {
    page = new Angular2SchemaFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
