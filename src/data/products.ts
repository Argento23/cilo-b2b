export interface Product {
    id: string;
    name: string;
    category: string;
    description: string;
    image: string;
    weight?: string;
    featured?: boolean;
}

export const productCategories = [
    'Bañadas',
    'Clásicas',
    'Rellenas',
    'Premium',
    'Tradicionales',
];

export const products: Product[] = [
    // Anillos
    {
        id: 'anillos-banados-300',
        name: 'Anillos Bañados',
        category: 'Bañadas',
        description: 'Deliciosos anillos bañados en chocolate. Perfectos para cualquier ocasión.',
        image: 'https://cilo.com.ar/wp-content/uploads/2019/11/ANILL-BA%C3%91-300.png',
        weight: '300g',
        featured: true,
    },
    {
        id: 'anillos-vainilla-200',
        name: 'Anillos de Vainilla',
        category: 'Clásicas',
        description: 'Crujientes anillos con el clásico sabor a vainilla.',
        image: 'https://cilo.com.ar/wp-content/uploads/2019/11/ANILLOS-VAIN-200-GRS.png',
        weight: '200g',
        featured: true,
    },
    {
        id: 'anillos-limon',
        name: 'Anillos de Limón',
        category: 'Clásicas',
        description: 'Refrescantes anillos con un toque cítrico de limón.',
        image: 'https://cilo.com.ar/wp-content/uploads/2019/11/anillos-limonn.png',
    },

    // Bizcochos
    {
        id: 'bizcocho-azucar',
        name: 'Bizcocho con Azúcar',
        category: 'Tradicionales',
        description: 'El clásico bizcocho argentino, ideal para el mate.',
        image: 'https://cilo.com.ar/wp-content/uploads/2019/11/BIZCOCH-AZUC.png',
        featured: true,
    },
    {
        id: 'bizcocho-grasa',
        name: 'Bizcocho de Grasa',
        category: 'Tradicionales',
        description: 'Bizcocho tradicional de grasa, un sabor inconfundible.',
        image: 'https://cilo.com.ar/wp-content/uploads/2019/11/BIZCOCH-GRASA.png',
    },

    // Buquitas
    {
        id: 'buquitas-chocolate',
        name: 'Buquitas de Chocolate',
        category: 'Premium',
        description: 'Pequeñas delicias bañadas en chocolate de primera calidad.',
        image: 'https://cilo.com.ar/wp-content/uploads/2019/11/BUQUITAS-CHOCO.png',
    },
    {
        id: 'buquitas-limon',
        name: 'Buquitas de Limón',
        category: 'Premium',
        description: 'Buquitas con un refrescante sabor a limón.',
        image: 'https://cilo.com.ar/wp-content/uploads/2019/11/BUQUITAS-LIMON.png',
    },

    // Chips
    {
        id: 'chips-150',
        name: 'Chips de Chocolate',
        category: 'Premium',
        description: 'Galletas con chips de chocolate belga. Irresistibles.',
        image: 'https://cilo.com.ar/wp-content/uploads/2019/11/CHIPS-150-GRS.png',
        weight: '150g',
        featured: true,
    },
    {
        id: 'chips',
        name: 'Chips',
        category: 'Premium',
        description: 'Deliciosas cookies con chips de chocolate.',
        image: 'https://cilo.com.ar/wp-content/uploads/2019/11/CHIPS.png',
    },

    // Doblinas
    {
        id: 'doblinas-batata',
        name: 'Doblinas de Batata',
        category: 'Rellenas',
        description: 'Crujientes galletitas rellenas con dulce de batata.',
        image: 'https://cilo.com.ar/wp-content/uploads/2019/11/DOBLIN-BATAT.png',
    },
    {
        id: 'doblinas-membrillo',
        name: 'Doblinas de Membrillo',
        category: 'Rellenas',
        description: 'Galletitas rellenas con auténtico dulce de membrillo.',
        image: 'https://cilo.com.ar/wp-content/uploads/2019/11/doblinas-13.jpg',
    },

    // Lengüitas
    {
        id: 'lenguas-banadas-300',
        name: 'Lengüitas Bañadas',
        category: 'Bañadas',
        description: 'Nuestro producto estrella. Lengüitas bañadas en chocolate.',
        image: 'https://cilo.com.ar/wp-content/uploads/2019/11/LENG-BA%C3%91-300.png',
        weight: '300g',
        featured: true,
    },
    {
        id: 'lenguas-coco',
        name: 'Lengüitas de Coco',
        category: 'Clásicas',
        description: 'Delicadas lengüitas con el sabor tropical del coco.',
        image: 'https://cilo.com.ar/wp-content/uploads/2019/11/LENG-COCO.png',
    },
    {
        id: 'lenguas-membrillo-200',
        name: 'Lengüitas de Membrillo',
        category: 'Rellenas',
        description: 'Lengüitas rellenas con dulce de membrillo.',
        image: 'https://cilo.com.ar/wp-content/uploads/2019/11/LENG-MEMB-200-GRS..png',
        weight: '200g',
    },
    {
        id: 'lenguas-vainilla-banadas-300',
        name: 'Lengüitas Vainilla Bañadas',
        category: 'Bañadas',
        description: 'Lengüitas de vainilla bañadas en chocolate.',
        image: 'https://cilo.com.ar/wp-content/uploads/2019/11/LENG-VAI-BA%C3%91-300.png',
        weight: '300g',
    },
    {
        id: 'lenguas-vainilla-200',
        name: 'Lengüitas de Vainilla',
        category: 'Clásicas',
        description: 'El clásico sabor a vainilla en nuestras lengüitas.',
        image: 'https://cilo.com.ar/wp-content/uploads/2019/11/LENG-VAIN-200-GRS..png',
        weight: '200g',
    },

    // Otros productos
    {
        id: 'paquete-miel',
        name: 'Paquete de Miel',
        category: 'Tradicionales',
        description: 'Galletitas con el dulce sabor de la miel.',
        image: 'https://cilo.com.ar/wp-content/uploads/2019/11/PAQUETE-MIEL.png',
    },

    // Pepitas
    {
        id: 'pepitas-200',
        name: 'Pepitas',
        category: 'Clásicas',
        description: 'Clásicas pepitas crujientes.',
        image: 'https://cilo.com.ar/wp-content/uploads/2019/11/PEPAS-200-GRS..png',
        weight: '200g',
    },
    {
        id: 'pepitas-banadas-300',
        name: 'Pepitas Bañadas',
        category: 'Bañadas',
        description: 'Pepitas bañadas en chocolate de primera calidad.',
        image: 'https://cilo.com.ar/wp-content/uploads/2019/11/PEPAS-BA%C3%91-300.png',
        weight: '300g',
    },
    {
        id: 'pepitas-semi-banadas',
        name: 'Pepitas Semi Bañadas',
        category: 'Bañadas',
        description: 'Pepitas parcialmente bañadas en chocolate.',
        image: 'https://cilo.com.ar/wp-content/uploads/2019/11/PEPAS-SEMI-BA%C3%91.png',
    },
    {
        id: 'pepitas-vegetal',
        name: 'Pepitas Vegetal',
        category: 'Clásicas',
        description: 'Pepitas elaboradas con grasa vegetal.',
        image: 'https://cilo.com.ar/wp-content/uploads/2019/11/PEPAS-VEGETAL.png',
    },

    // Especiales
    {
        id: 'polvoron',
        name: 'Polvorón',
        category: 'Tradicionales',
        description: 'Tradicionales polvorones que se deshacen en la boca.',
        image: 'https://cilo.com.ar/wp-content/uploads/2019/11/POLVORON.png',
    },
    {
        id: 'scones',
        name: 'Scones',
        category: 'Premium',
        description: 'Scones artesanales, perfectos para el té.',
        image: 'https://cilo.com.ar/wp-content/uploads/2019/11/SCONS.png',
    },
    {
        id: 'surtidas',
        name: 'Surtidas',
        category: 'Premium',
        description: 'Mix de nuestras mejores galletitas. Variedad garantizada.',
        image: 'https://cilo.com.ar/wp-content/uploads/2019/11/SURTIDAS.png',
        featured: true,
    },
    {
        id: 'topings',
        name: 'Topings',
        category: 'Premium',
        description: 'Galletitas decoradas con deliciosos toppings.',
        image: 'https://cilo.com.ar/wp-content/uploads/2019/11/TOPINGS.png',
    },
];

// Productos destacados
export const featuredProducts = products.filter(p => p.featured);

// Obtener productos por categoría
export const getProductsByCategory = (category: string) => {
    return products.filter(p => p.category === category);
};
