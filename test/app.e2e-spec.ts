import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './../src/app.module';

/**
 * Pruebas End-to-End (E2E) para AppController.
 * Estudiante: Yesmir Guzmán - Cédula: 20130682
 * 
 * Las pruebas E2E verifican el funcionamiento de la aplicación completa, simulando peticiones HTTP reales.
 * Aquí probamos que la ruta raíz cargue correctamente.
 */
describe('AppController (e2e)', () => {
  let app: NestExpressApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    // Creamos la aplicación NestJS para pruebas
    app = moduleFixture.createNestApplication<NestExpressApplication>();

    // Configuramos el motor de vistas igual que en main.ts para que las pruebas no fallen al intentar renderizar
    app.setBaseViewsDir(join(__dirname, '..', 'views'));
    app.setViewEngine('ejs');

    await app.init();
  });

  // Verificamos que la petición GET a la raíz '/' responda con un código de estado 200 (OK).
  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200);
    // No comprobamos el contenido exacto del HTML por simplicidad, solo que renderice correctamente.
  });
});
