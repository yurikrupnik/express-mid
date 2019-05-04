import express from 'express';
import f from '../index';

const runServer = () => {
    const app = express();
    app.use(f());
    return app;
};

test('f', () => {
    f({}, {}, jest.fn());
});

test('f', () => {
    const app = express();
    app.use(f);
});
