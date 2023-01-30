// Vous devez insérer les nouveaux tests ici
import 'jest-extended';
import app from '../../../src/app';
import supertest from 'supertest';
import {JeuDeDes} from '../../../src/core/jeuDeDes';

const request = supertest(app);

let jeu;
let joueurTest1, joueurTest2

describe('GET /api/v1/jeu/redemarrerJeu',()=>{
  beforeAll(async()=>{
    jeu = new JeuDeDes();
    joueurTest1 = JSON.parse(jeu.demarrerJeu("Sam,1"));
    joueurTest2 = JSON.parse(jeu.demarrerJeu("Ben,2"));
  })
  it("should create a game", () => {
    expect(jeu).toBeTruthy();
  });
  it("should have players", async () => {
    expect(jeu._joueurs).toBeTruthy();
   });
  it("should expect response 200 ", async () => {
    const response = await request.get('/api/v1/jeu/demarrerJeu/joueurTest1')
      .then(() => request.get('/api/v1/jeu/redemarrerJeu'));
    expect(response.status).toBe(200);
    });

  it.only("should expect response 404", async () => {
    jeu.redemarrerJeu();
    console.log(jeu._joueurs.length);
    const response = await request.get('/api/v1/jeu/redemarrerJeu');
    expect(response.status).toBe(404);
    });
  });
 
