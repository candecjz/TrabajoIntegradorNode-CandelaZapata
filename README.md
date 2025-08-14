# API REST Gestión Escolar

Este proyecto es una API REST desarrollada con Node.js, Express y MongoDB (Mongoose) para la gestión de estudiantes y sus cursos. Forma parte del trabajo integrador MERN Stack.

## 🚀 Características

- CRUD completo de estudiantes
- Filtro por curso en el endpoint GET
- Validaciones de datos y email único
- Conexión a MongoDB Atlas usando variables de entorno
- Manejo de errores
- Listo para desplegar en Vercel

## 📚 Tecnologías Utilizadas

- **Backend:** Node.js, Express.js
- **Base de datos:** MongoDB, Mongoose
- **Extras:** CORS

## 📦 Instalación y uso

1. Clona el repositorio:
   ```bash
   git clone https://github.com/candecjz/TrabajoIntegradorNode-CandelaZapata.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor:
   ```bash
   npm run dev
   ```

## 🗂️ Estructura del Proyecto

```
Cande - Trabajo Integrador/
├── app.js
├── config/
│   └── db.js
├── middlewares/
│   └── error.js
├── models/
│   └── estudiante.js
├── routes/
│   └── estudiantes.js
├── package.json
├── .env
└── README.md
```

## 📑 Endpoints principales

| Método | Endpoint         | Descripción                                             |
| ------ | ---------------- | ------------------------------------------------------- |
| GET    | /estudiantes     | Lista todos los estudiantes (filtro por curso opcional) |
| GET    | /estudiantes/:id | Obtiene un estudiante por ID                            |
| POST   | /estudiantes     | Crea un nuevo estudiante                                |
| PUT    | /estudiantes/:id | Actualiza un estudiante por ID                          |
| DELETE | /estudiantes/:id | Elimina un estudiante por ID                            |

### Filtro por curso

Puedes filtrar estudiantes por curso usando query:

```bash
GET /estudiantes?curso=Matemática
```

## 📝 Ejemplo de creación de estudiante

```json
{
  "nombre": "Pedro",
  "apellido": "Pérez",
  "email": "pedro.perez@example.com",
  "cursos": ["Matemática", "Ciencias"]
}
```

## 👩‍💻 Autor

- Julieta Candela Zapata
- candecjz
