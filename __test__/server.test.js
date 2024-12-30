import supertest from 'supertest';
import {startServer} from '../src/server/index'; // Import the app instance

describe('Test: Server should be running', () => {
  let server;
  beforeAll(async () => {
    // Start the server dynamically on port 3000 or fallback to port 5000
    server = await startServer();
  });

  // Close the server after all tests
  afterAll((done) => {
    server.close(done);  // Ensure the server closes after tests
  });

  it('should respond to GET / with status 200 and correct message', async () => {
    const response = await supertest(server).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Server is running');
  }, 10000); // Increase the timeout if necessary
});
