import express from 'express';
import next from 'next';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';
import dotenv from 'dotenv';

const prod = process.env.NODE_ENV !== 'production';
const app = next({ prod });
const handle = app.getRequestHandler();
dotenv.config();

app.prepare().then(() => {
  const server = express();

  server.use(morgan('dev'));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(cookieParser(process.env.COOKIE_SECRET));
  server.use(
    expressSession({
      resave: false,
      saveUninitialized: false,
      secret: process.env.COOKIE_SECRET as string,
      cookie: {
        httpOnly: true,
        secure: false,
      },
    }),
  );

  server.get('*', (req, res) => {
    return handle(req, res);
  });
  server.listen(prod ? process.env.PORT : 3000, () => {
    console.log(`running on port ${process.env.PORT}`);
  });
});

export default undefined;
