import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Ejercicio1Controller } from './ejercicio1/ejercicio1.controller';
import { Ejercicio2Controller } from './ejercicio2/ejercicio2.controller';

/**
 * Módulo Principal de la Aplicación.
 * Estudiante: Yesmir Guzmán - Cédula: 20130682
 * 
 * En NestJS, los módulos son utilizados para organizar la estructura de la aplicación.
 * Este 'AppModule' es el módulo raíz que agrupa todos los controladores y servicios.
 * 
 * - imports: Aquí importaríamos otros módulos si la aplicación creciera.
 * - controllers: Registramos los controladores que manejarán las rutas (AppController, Ejercicio1Controller, Ejercicio2Controller).
 * - providers: Registramos los servicios que contienen la lógica de negocio (AppService).
 */
@Module({
  imports: [],
  controllers: [AppController, Ejercicio1Controller, Ejercicio2Controller],
  providers: [AppService],
})
export class AppModule { }
