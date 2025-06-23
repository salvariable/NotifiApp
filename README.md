# 📬 NotifApp

Aplicación demo desarrollada con **React Native** que muestra un sistema de notificaciones animadas, con navegación, persistencia en memoria y cobertura de tests al 100%.

## 🧩 Tecnologías principales

- **React Native**
- **TypeScript**
- **Zustand** para el store de notificaciones
- **React Navigation**
- **React Native Reanimated** para animaciones
- **Jest + Testing Library** para tests
- **Husky** para hooks de Git
- **100% de cobertura de tests** garantizada

---

## 🔍 Funcionalidades

- Listado de notificaciones tipo Inbox
- Notificaciones con ícono y color según tipo: Info, Éxito, Error, Advertencia, Sistema
- Marcar como leídas
- Navegación al detalle (placeholder)
- Badge animado en el header si hay notificaciones sin leer
- Botón para generar notificaciones mock
- UI responsiva y limpia
- Animaciones suaves en ingreso de notificación y en el badge

---

## 🧪 Testing

Todos los componentes, utilidades y store están cubiertos con tests unitarios.

```bash
yarn test --coverage
```

El proyecto incluye:

- Cobertura al **100%** de líneas, branches y funciones
- Hook de **pre-commit** (Husky) que bloquea commits si fallan los tests

---

## 🚀 Scripts principales

```bash
yarn start           # Iniciar el servidor de desarrollo
yarn test            # Ejecutar tests unitarios
yarn test --coverage # Ejecutar tests con reporte de cobertura
```

---

## 📁 Estructura del proyecto

```
NotifApp/
├── components/        # Componentes reutilizables
├── screens/           # Vistas principales (Inbox)
├── store/             # Zustand store
├── utils/             # Utilidades
├── models/            # Tipos y enums
├── __tests__/         # Tests unitarios
└── App.tsx            # Punto de entrada
```

---

## 🧠 Aprendizajes y propósito

Este proyecto fue construido como un challenge técnico para dominar:

- Testing en React Native con cobertura completa
- Animaciones en UI con Reanimated
- Manejo del estado global con Zustand
- Integración de herramientas de calidad (Husky, coverage threshold)

---

## ⚙️ Requisitos

- Node.js >= 18
- Yarn >= 1.22
- React Native CLI >= 0.80

---

## 👤 Autor

**Salvador Bolaños**  
Desarrollador React Native con enfoque en calidad, diseño y producto.
