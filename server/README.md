# AirGuide Backend API

API RESTful para el sistema de navegación universitaria AirGuide, construida con Node.js, Express y Prisma.

## Tecnologías

- **Node.js v22** - Runtime de JavaScript
- **Express** - Framework web
- **Prisma ORM** - Object-Relational Mapping
- **TypeScript** - Tipado estático
- **JWT** - Autenticación con tokens
- **Bcrypt** - Hash de contraseñas
- **Zod** - Validación de esquemas

## Requisitos Previos

- Node.js v22 o superior
- npm

## Instalación

### 1. Instalar dependencias

```bash
cd server
npm install --legacy-peer-deps
```

### 2. Configurar variables de entorno

Edita el archivo `.env` con tus configuraciones:

```env
# Database - PostgreSQL en Prisma Cloud
DATABASE_URL="postgres://f7a35276552eb6c4aa3bd70770cb509caeb73a885b11fcbbc269562a4a873e46:sk_isnKgYV7R84c6doSZiLKK@db.prisma.io:5432/postgres?sslmode=require&pool=true"

# Server
PORT=3001
NODE_ENV=development

# JWT
JWT_SECRET=airguide-secret-key-app-in-development-2026
JWT_EXPIRES_IN=1d

# CORS
CORS_ORIGIN=http://localhost:5173
```

### 3. Ejecutar migraciones de Prisma

```bash
# Generar el cliente de Prisma
npm run prisma:generate

# Ejecutar migraciones
npm run prisma:migrate

# Poblar la base de datos
npm run prisma:seed
```

## Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Inicia servidor en modo desarrollo

# Producción
npm run build            # Compila TypeScript a JavaScript
npm start                # Inicia servidor compilado

# Prisma
npm run prisma:generate  # Genera cliente de Prisma
npm run prisma:migrate   # Ejecuta migraciones
npm run prisma:studio    # Abre Prisma Studio (GUI)
npm run prisma:seed      # Pobla la base de datos
```

## Debugging

### Ver logs de Prisma

Edita `src/lib/prisma.ts` para habilitar más logs:

```typescript
log: ['query', 'error', 'warn', 'info']
```

### Variables de entorno para debugging

```env
NODE_ENV=development
DEBUG=*
```

## Notas

1. **Seguridad**: Cambiar el `JWT_SECRET` en producción
2. **CORS**: Ajustar `CORS_ORIGIN` según el frontend
3. **Base de datos**: Hacer backups regularmente
4. **Migraciones**: Revisar las migraciones antes de aplicarlas en producción

## Deployment

### Variables de Entorno Requeridas en Producción

```env
DATABASE_URL=""
PORT=3001
NODE_ENV=production
JWT_SECRET=<secreto>
JWT_EXPIRES_IN=7d
CORS_ORIGIN=https://dominio.com
```

---

**Desarrollado por Vexel - Airguide**
@Autores
- Saul Noe Perez Aguilera
- Luis Eduardo Rios Cervantes
- Estefany Ariadna Corrales Corpus
- Guillermo Alfredo Gutiérrez Romero

