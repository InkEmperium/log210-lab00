import 'jest-extended';
import { readFileSync } from 'fs';
import { Request, Response, NextFunction } from 'express';
const path = require('path');
import { JeuRouter } from '../../../src/routes/jeuRouter';


let content = ""
beforeAll(async () => {
  const filename = path.join('src', 'routes', 'jeuRouter.ts')
  content = readFileSync(filename, 'utf-8');
});

describe('src/routes/jeuRouter.ts', () => {
  it("should contain this._router.get('/redemarrerJeu', this.redemarrerJeu.bind(this))", () => {
    expect(content.includes("this._router.get('/redemarrerJeu', this.redemarrerJeu.bind(this))")).toBeTruthy();
  });

  it("should contain redemarrerJeu(req: Request, res: Response, next: NextFunction) {", () => {
    expect(content.includes("redemarrerJeu(req: Request, res: Response, next: NextFunction) {")).toBeTruthy();
  });

  it("should contain this._controleurJeu.redemarrerJeu()", () => {
    expect(content.includes("this._controleurJeu.redemarrerJeu()")).toBeTruthy();
  });

  it("should contain resultatObj.v3", () => {
    expect(content.includes('resultatObj.v3')).toBeWithin(1, 7);
    expect(content.includes("resultatObj.v3")).toBeTruthy();
  });
});


describe("redemarrerJeu()", () => {
  it("should return a success message with status 200 when the game is restarted",() => {
    const resultatObj = {
      v1: 1,
      v2: 2,
      v3: 3
    };
    const resultat = JSON.stringify(resultatObj);
    const req = {
      body: {
        name: 'test'
      },
      params: {
        nom: 'test'
      },
      flash: jest.fn().mockReturnThis()
    } as unknown as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis()
    } as unknown as Response;
    const next = jest.fn() as NextFunction;
    const jeu = new JeuRouter();

    jeu.redemarrerJeu(req, res, next);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({
      message: 'Success',
      status: res.status,
      resultat
    });
  }, 10000);
});

//   it("should return a failure message with status 404 when the name is not provided",()={

//   });
// });




