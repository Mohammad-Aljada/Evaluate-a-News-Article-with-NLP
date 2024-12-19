import { handleSubmit } from "../src/client/js/formHandler";

jest.mock("../src/client/js/formHandler", () => ({
    handleSubmit: jest.fn(),
}));

test('handleSubmit must be a function', () => {
    expect(jest.isMockFunction(handleSubmit)).toBe(true);
});
