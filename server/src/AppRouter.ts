import express from 'express';

export class AppRouter {
  private static instance: express.Router;

  static getInstance(): express.Router {
    if (this.instance === undefined) {
      this.instance = express.Router();
    }

    return this.instance;
  }
}
