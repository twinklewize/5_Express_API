import { App } from '../src/app';
import { boot } from '../src/main';
import request from 'supertest';

let application: App;

beforeAll(async () => {
  const { app } = await boot;
  application = app;
});

describe('Users e2e', () => {
  it('Register - error', async () => {
    const res = await request(application.app) //наш application это не app экспресса
      .post('/users/register')
      .send({ email: 'a@a.ru', password: 1 });
    expect(res.statusCode).toBe(422);
  });

  it('Login - success', async () => {
    const res = await request(application.app) //наш application это не app экспресса
      .post('/users/login')
      .send({ email: 'test@test.com', password: 'test' });
    expect(res.body.jwt).not.toBeUndefined();
  });

  it('Login - error', async () => {
    const res = await request(application.app) //наш application это не app экспресса
      .post('/users/login')
      .send({ email: 'a@a.ru', password: '1' });
    expect(res.statusCode).toBe(401);
  });

  it('Info - success', async () => {
    const login = await request(application.app) //наш application это не app экспресса
      .post('/users/login')
      .send({ email: 'test@test.com', password: 'test' });
    const res = await request(application.app) //наш application это не app экспресса
      .get('/users/info')
      .set('Authorization', `Bearer ${login.body.jwt}`);
    expect(res.body.email).toBe('test@test.com');
  });
  it('Info - error', async () => {
    const res = await request(application.app) //наш application это не app экспресса
      .get('/users/info')
      .set('Authorization', `Bearer 1`);
    expect(res.statusCode).toBe(401);
  });
});

afterAll(() => {
  application.close();
});
