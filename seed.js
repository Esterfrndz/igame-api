const mongoose = require('mongoose');
const Product = require('/Users/esterfernandez/Desktop/tech-products-api/src/models/productModel.js'); // Asegúrate de ajustar la ruta según tu estructura de carpetas

// URL de conexión a tu base de datos MongoDB
const MONGODB_URI = 'mongodb://localhost:27017/tech-products';

// Datos de ejemplo para insertar en la base de datos
const products = [
  {
    id:11,
    name: 'Steelseries Arctis Pro Wireless Auriculares Gaming Inalámbricos Negros',
    category: 'auricular',
    price: 243.98,
    description: 'El audio de alta fidelidad llega a los juegos por primera vez',
    image: '11.png'
  },
  {
    id:12,
    name: 'Astro Gaming Auriculares Inalámbricos A50 + Estación Base PS4/PC/Mac',
    category: 'auricular',
    price: 324.99,
    description: 'Disfruta del legendario sonido y rendimiento de astro audio v2, y de la libertad de no tener cables por en medio',
    image: '12.png'
  },
  {
    id:13,
    name: 'Razer BlackShark V2 HyperSpeed Auriculares Gaming Inalámbricos Blancos',
    category: 'auricular',
    price: 162.51,
    description: 'Consigue la comodidad ininterrumpida que necesitas para el juego competitivo todo el día con los Razer BlackShark V2 HyperSpeed',
    image: '13.png'
  },
  {
    id:14,
    name: 'Corsair Virtuoso RGB Wireless Auriculares Gaming 7.1 Inalámbricos Carbón',
    category: 'auricular',
    price: 204.99,
    description: 'Los CORSAIR Virtuoso RGB Wireless ofrecen una experiencia de sonido de alta fidelidad a los jugadores más exigentes, combinando una calidad de audio impecable con una comodidad continua gracias a la banda y a las orejeras de espuma con memoria premium.',
    image: '14.png'
  },
  {
    id:15,
    name: 'Logitech G735 Auriculares Inalámbricos Gaming LIGHTSYNC RGB Blancos',
    category: 'auricular',
    price: 232.52,
    description: 'En The Aurora Collection, los auriculares inalámbricos con micrófono G735 para gaming maximizan la comodidad, incluso para quienes tienen la cabeza pequeña',
    image: '15.png'
  },
  

];

// Conexión a MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log('Conectado a MongoDB');

  // Insertar productos en la base de datos
  await Product.insertMany(products);
  console.log('Datos insertados correctamente');

  // Desconectar de MongoDB después de insertar
  mongoose.disconnect();
}).catch(err => {
  console.error('Error al conectar a MongoDB:', err);
});
