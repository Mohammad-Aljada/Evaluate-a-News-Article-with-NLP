import { CheckUrl } from '../src/client/js/CheckUrl';

describe('IS valid URL Or Not', () => {

  test('have a valid URL with HTTP return true', () => {
    const url = 'http://example.com';
    expect(CheckUrl(url)).toBe(true);
  });
  // Test for a valid URL with HTTPS protocol
  test('have a valid URL with HTTPS return true', () => {
    const url = 'https://example.com';
    expect(CheckUrl(url)).toBe(true);
  });
  test('have a valid URL with srting return false', () => {
    const url = 'example';
    expect(CheckUrl(url)).toBe(false);
  });
});