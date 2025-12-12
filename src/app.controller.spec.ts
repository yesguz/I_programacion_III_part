import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

/**
 * Pruebas Unitarias para AppController.
 * Estudiante: Yesmir Guzmán - Cédula: 20130682
 * 
 * Este archivo contiene pruebas unitarias que verifican el funcionamiento aislado del controlador,
 * sin necesidad de levantar todo el servidor.
 */
describe('AppController', () => {
  let appController: AppController;

  // Antes de cada prueba, configuramos un módulo de prueba simulado.
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    // Verificamos que al llamar a getHello() se devuelva un objeto vacío 
    // (ya que ahora el controlador renderiza una vista y pasa un objeto de datos vacío).
    it('debería retornar un objeto vacío para la vista', () => {
      expect(appController.getHello()).toEqual({});
    });
  });
});
