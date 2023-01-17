// Vous devez insérer les nouveaux tests ici
import 'jest-extended';
import app from '../../../src/app';
import supertest from 'supertest';
import {JeuDeDes} from '../../../src/core/jeuDeDes';

const request = supertest(app);

let jeu;
let joueurTest1, joueurTest2

describe('redemarrerJeu.test.ts', () => {
  it("should implement test", async () => {
    throw new Error("Ce test n'a pas été défini")
  });
});

describe('GET /api/v1/jeu/redemarrerJeu',()=>{
  beforeAll(async()=>{
    jeu = new JeuDeDes();
    joueurTest1 = JSON.parse(jeu.demarrerJeu("joueur1"));
    joueurTest2 = JSON.parse(jeu.demarrerJeu("joueur2"));
  })
  it("should create a game", () => {
    expect(jeu).toBeTruthy();
  });
  it("should have players", async () => {
    expect(jeu._joueurs).toBeTruthy();
   });
  it("should call GET /api/v1/jeu/redemarrerJeu", async () => {
    const response = await request.get('/api/v1/jeu/redemarrerJeu');
    expect(response.status).toBe(200);
    });
  });
 
