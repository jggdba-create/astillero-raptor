# Astillero Sailors & Raptor Overland Arg

Página web responsive y moderna para dos marcas especializadas en navegación y aventuras outdoor.

## 🚀 Características

- **Diseño oscuro metalizado** con efectos visuales modernos
- **Totalmente responsive** - optimizado para móviles, tablets y desktop
- **Dos marcas integradas**:
  - @astillerosailors - Construcción y reparación de veleros, mantenimiento náutico, charters
  - @raptor.overland.arg - Travesías 4x4, equipamiento Overland, rutas y camps
- **Galería interactiva** con modal para visualización de imágenes
- **Formulario de contacto** funcional
- **Navegación suave** entre secciones
- **Efectos de hover** y transiciones elegantes

## 📁 Estructura del Proyecto

```
WEBASTILLERO/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript para interacciones
├── images/             # Carpeta de imágenes
│   ├── hero-astillero.jpg
│   ├── astillero-about.jpg
│   ├── raptor-about.jpg
│   ├── astillero-gallery-1.jpg
│   ├── astillero-gallery-2.jpg
│   ├── astillero-gallery-3.jpg
│   ├── astillero-gallery-4.jpg
│   ├── raptor-gallery-1.jpg
│   ├── raptor-gallery-2.jpg
│   ├── raptor-gallery-3.jpg
│   ├── raptor-gallery-4.jpg
│   └── README.md       # Instrucciones para imágenes
└── README.md           # Este archivo
```

## 🎨 Paleta de Colores

- **Fondo principal**: #0d0d0d (negro grafito)
- **Fondo secundario**: #1a1a1a
- **Astillero Sailors**: #3a7bd5 (azul acero)
- **Raptor Overland**: #8da05a (verde oliva metálico)
- **Texto claro**: #e0e0e0
- **Texto atenuado**: #a0a0a0

## 🛠️ Tecnologías Utilizadas

- **HTML5** semántico
- **CSS3** con variables personalizadas y Grid/Flexbox
- **JavaScript** vanilla (sin frameworks)
- **Google Fonts** (Poppins)
- **Font Awesome** para iconos
- **Unsplash** para imágenes de placeholder

## 📱 Responsive Design

La página está optimizada para:
- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Cómo Publicar en GitHub Pages

### Paso 1: Crear un Repositorio en GitHub

1. Ve a [GitHub.com](https://github.com) y crea una nueva cuenta si no tienes una
2. Haz clic en "New repository" o el botón "+" en la esquina superior derecha
3. Nombra tu repositorio (ej: `webastillero` o `astillero-raptor-website`)
4. Asegúrate de que sea **público** (requerido para GitHub Pages gratuito)
5. **NO** inicialices con README, .gitignore o licencia
6. Haz clic en "Create repository"

### Paso 2: Subir los Archivos

#### Opción A: Usando GitHub Web Interface

1. En tu repositorio recién creado, haz clic en "uploading an existing file"
2. Arrastra y suelta los archivos: `index.html`, `styles.css`, `script.js`
3. Escribe un mensaje de commit como "Initial commit - Website files"
4. Haz clic en "Commit changes"

#### Opción B: Usando Git desde Terminal

```bash
# Clonar el repositorio (reemplaza USERNAME y REPO-NAME)
git clone https://github.com/USERNAME/REPO-NAME.git
cd REPO-NAME

# Copiar los archivos del proyecto
# (Copia index.html, styles.css, script.js a esta carpeta)

# Agregar archivos al staging
git add .

# Hacer commit
git commit -m "Initial commit - Website files"

# Subir a GitHub
git push origin main
```

### Paso 3: Habilitar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en la pestaña **"Settings"** (Configuración)
3. En el menú lateral izquierdo, busca **"Pages"**
4. En "Source", selecciona **"Deploy from a branch"**
5. En "Branch", selecciona **"main"** (o "master" si es tu rama principal)
6. En "Folder", selecciona **"/ (root)"**
7. Haz clic en **"Save"**

### Paso 4: Acceder a tu Sitio Web

1. GitHub procesará tu sitio (puede tomar unos minutos)
2. Una vez listo, verás un mensaje verde con el enlace a tu sitio
3. Tu sitio estará disponible en: `https://USERNAME.github.io/REPO-NAME`

## 🖼️ Gestión de Imágenes

### Carpeta de Imágenes

Todas las imágenes están organizadas en la carpeta `images/` con nombres descriptivos:

- `hero-astillero.jpg` - Imagen principal del hero
- `astillero-about.jpg` - Imagen de la sección Astillero Sailors
- `raptor-about.jpg` - Imagen de la sección Raptor Overland
- `astillero-gallery-1.jpg` a `astillero-gallery-4.jpg` - Galería Astillero
- `raptor-gallery-1.jpg` a `raptor-gallery-4.jpg` - Galería Raptor

### Cómo Reemplazar las Imágenes

1. **Descargar imágenes de Instagram:**
   - Ve a los perfiles @astillerosailors y @raptor.overland.arg
   - Descarga las imágenes que quieras usar
   - Renómbralas según la estructura de archivos

2. **Reemplazar archivos:**
   - Simplemente reemplaza los archivos en la carpeta `images/`
   - Mantén los mismos nombres de archivo
   - Asegúrate de que las imágenes estén en formato JPG

3. **Recomendaciones:**
   - **Tamaño recomendado:** 1200x800px o similar
   - **Formato:** JPG o PNG
   - **Peso:** Máximo 2MB por imagen para mejor rendimiento
   - **Calidad:** Alta resolución para mejor visualización

### Ventajas de esta Estructura

- ✅ **Organización clara** - Todas las imágenes en una carpeta
- ✅ **Fácil mantenimiento** - Solo reemplazar archivos
- ✅ **Sin modificar código** - El sitio funciona automáticamente
- ✅ **Mejor rendimiento** - Imágenes optimizadas localmente
- ✅ **Control total** - No dependes de URLs externas

## 🔧 Personalización

### Cambiar Colores

Los colores están definidos como variables CSS en `styles.css`:

```css
:root {
    --accent-astillero: #3a7bd5;  /* Azul acero */
    --accent-raptor: #8da05a;     /* Verde oliva */
    --primary-dark: #0d0d0d;      /* Negro grafito */
}
```

### Modificar Contenido

- **Textos**: Edita directamente en `index.html`
- **Enlaces de Instagram**: Actualiza las URLs en las secciones correspondientes
- **Información de contacto**: Modifica la sección de contacto

### Agregar Más Imágenes a la Galería

1. Duplica un elemento `.gallery-item` existente
2. Cambia el `onclick="openModal('imgX')"` por un ID único
3. Agrega la descripción en el objeto `captions` en `script.js`

## 📞 Soporte

Si tienes problemas con la implementación:

1. Verifica que todos los archivos estén en la raíz del repositorio
2. Asegúrate de que el repositorio sea público
3. Espera unos minutos después de habilitar GitHub Pages
4. Verifica que no haya errores en la consola del navegador (F12)

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**Desarrollado con ❤️ para Astillero Sailors & Raptor Overland Arg**

*Última actualización: 2024*

