import { Injectable } from '@nestjs/common';

/**
 * Servicio Principal de la Aplicación.
 * Estudiante: Yesmir Guzmán - Cédula: 20130682
 * 
 * Los servicios en NestJS son clases decoradas con '@Injectable()' que se encargan de la lógica de negocio.
 * Pueden ser inyectados en controladores u otros servicios.
 */
@Injectable()
export class AppService {
  /**
   * Método simple que podría utilizarse para devolver un saludo o datos iniciales.
   * En este caso, el controlador lo usa (o lo usaba) para obtener un mensaje básico.
   */
  getHello(): string {
    return 'Hello World!';
  }
}
