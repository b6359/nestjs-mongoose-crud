# nestjs-mongoose-crud

# **NestJS Mongoose CRUD**

This repository contains a RESTful API built with **NestJS** and **Mongoose** to demonstrate CRUD (Create, Read, Update, Delete) operations for managing resources such as products. The project follows best practices for building scalable and maintainable applications.

---

## **Features**
- **CRUD Operations**: Endpoints to manage resources.
- **Database**: Uses **MongoDB** as the database with **Mongoose** for schema modeling.
- **Modular Architecture**: Organized into modules, services, and controllers.
- **TypeScript**: Fully written in TypeScript for type safety and better development experience.
- **Environment Configuration**: Easily configurable via `.env` files.
- **Scalable Design**: Built to handle future enhancements with minimal refactoring.

---

## **Prerequisites**
- **Node.js** (v14+)
- **MongoDB** (local or cloud instance, e.g., MongoDB Atlas)
- **npm** (v6+)

---

## **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nestjs-mongoose-crud.git
   cd nestjs-mongoose-crud
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the `.env` file:
   - Create a `.env` file in the root directory.
   - Add your MongoDB connection string:
     ```
     DATABASE_URI=mongodb://localhost:27017/nestjs-crud
     ```

---

## **Running the Application**
Start the development server:
```bash
npm run start:dev
```

The application will run at `http://localhost:3000`.

---

## **Endpoints**
### **Base URL**: `http://localhost:3000/products`

| Method | Endpoint       | Description             |
|--------|----------------|-------------------------|
| GET    | `/`            | Get all products       |
| GET    | `/:id`         | Get a product by ID    |
| POST   | `/`            | Create a new product   |
| PUT    | `/:id`         | Update a product by ID |
| DELETE | `/:id`         | Delete a product by ID |

### Example Payload for Creating a Product:
```json
{
  "name": "Product Name",
  "description": "Product Description",
  "price": 100
}
```

---

## **Folder Structure**
```plaintext
nestjs-mongoose-crud/
│
├── src/
│   ├── products/
│   │   ├── dto/
│   │   │   ├── create-product.dto.ts
│   │   │   ├── update-product.dto.ts
│   │   ├── schemas/
│   │   │   └── product.schema.ts
│   │   ├── products.controller.ts
│   │   ├── products.module.ts
│   │   ├── products.service.ts
│   ├── app.module.ts
│   ├── main.ts
│
├── .env                    # Environment variables
├── package.json
├── README.md
└── tsconfig.json
```

---

## **Technologies Used**
- **NestJS**: A progressive Node.js framework.
- **Mongoose**: MongoDB object modeling for Node.js.
- **TypeScript**: Provides static typing.
- **dotenv**: Manages environment variables.

---

## **Contributing**
Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---


