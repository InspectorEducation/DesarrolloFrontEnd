const movies = [
  {
    title: "iPhone 13 128GB Blanco Estrella",
    releaseYear: "$3'699.000",
    price: 3699000,
    rating: 7.8,
    id: "info1",
    img: "https://mac-center.com/cdn/shop/products/IMG-6206281_823x.jpg?v=1661520210",
    reseña:
      "A nivel visual y técnico Avatar (2009) es la película de ciencia ficción impresionante y sorprendentemente más espectacular y la más grandilocuente, y también es una de las más innovadoras y ambiciosas película de todos los tiempos en la historia",
    sinopsis:
      "En un exuberante planeta llamado Pandora viven los Navi, seres que aparentan ser primitivos pero que en realidad son muy evolucionados. Debido a que el ambiente de Pandora es venenoso, los híbridos humanos/Navi, llamados Avatares.",
    actores: ["Zoe Saldaña", "Sam Worthington", "Giovanni Ribisi"],
  },
  {
    title: "XIAOMI Redmi 12 256GB Azul",
    releaseYear: "$932.900",
    price: 932900,
    rating: 7.1,
    id: "info2",
    img: "https://www.ktronix.com/medias/1400Wx1400H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-6941812739235-001.jpg?context=bWFzdGVyfGltYWdlc3wyODkwODV8aW1hZ2UvanBlZ3xhREptTDJnM1pDOHhNemczT1RneE9URXdPRE00TWk4eE5EQXdWM2d4TkRBd1NGOXRZWE4wWlhJdmFHOTBabTlzWkdWeUwzUnlZVzV6Wm1WeUwybHVZMjl0YVc1bkwyUmxjRzl6YVhRdmFIbGljbWx6TFdsdWRHVnlabUZqWlhNdlNVNHZiV1ZrYVdFdmNISnZaSFZqZEM4Mk9UUXhPREV5TnpNNU1qTTFYekF3TVM1cWNHY3xlYjMyNWVlOTkwNDZkZTMxM2E3YmQ1MDE1NmI3YjE5MjQ0NDIwMmU3M2MzODllOGNmMDcyNjdhOTUzODhiZjkw",
    reseña:
      "Que decir de esta tremenda película. Innovadora en el género vampiros y superhéroes. Wesley snipes está a la altura del personaje o incluso lo agranda. Un estilo único y propio que mezcla la antiguo y lo moderno,lo clásico y lo novedoso.",
    sinopsis:
      "Un hombre medio mortal, medio vampiro y capaz de andar bajo la luz solar, trata de vengar la muerte de su madre e impedir que los vampiros dominen el mundo. Estos han desarrollado una novedosa tecnología y tan solo necesitan hallar un tipo sanguíneo concreto para así poder invocar a una deidad maligna que juega un papel fundamental en sus planes.",
    actores: ["Wesley Snipes", "Donal Logue", "Kris Kristofferson"],
  },
  {
    title: "Celular OPPO Reno 7 256GB Negro",
    releaseYear: "$1'899.900",
    price: 1899900,
    rating: 8.1,
    id: "info3",
    img: "https://falabella.scene7.com/is/image/FalabellaCO/gsc_122272311_3300232_1?wid=800&hei=800&qlt=70",
    reseña:
      "Cinta dirigida por Ridley Scott (director de Gladiator y Alien) nos trajo una obra maestra, marcaría un antes y después en la industria del cine. Considerada película de culto para muchos. El cineasta británico hizo uno de sus mejores trabajos junto a Gladiator y Alien.",
    sinopsis:
      "En un futuro sombrío y lluvioso, un expolicía vuelve al servicio para buscar y destruir a un grupo de androides que fingen ser humanos para, integrados en la sociedad, encontrar a su creador y matarlo.",
    actores: ["Harrison Ford", "William Sanderson", "Joanna Cassidy"],
  },
  {
    title: "MOTOROLA G72 128GB Negro",
    releaseYear: "$899.900",
    price: 899900,
    rating: 8.2,
    id: "info4",
    img: "https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00084002323549L.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    reseña:
      "Es una obra de arte. Una pelicula que se anticipó a todas las que vinieron despues sobe la violencia y la protesta juvenil. Supo combinar la violencia interior de los personajes con la exterior y no cayo en la tentación de achacarla solo a los jóvens sino que hace un escrutinio de una sociedad que inevitablemente conduce al conflcto personal y social.",
    sinopsis:
      "Un criminal en la Inglaterra del futuro pasa una serie de procesos experimentales para corregir sus impulsos violentos.",
    actores: ["Malcolm McDowell", "Miriam Karlin", "Adrienne Corri"],
  },
  {
    title: "iPhone 13 128GB Rosa",
    releaseYear: "$3'699.000",
    price: 3699000,
    rating: 7.3,
    id: "info5",
    img: "https://tiendasishop.com/media/catalog/product/m/l/mlq83lz_a.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
    reseña:
      "Es una obra de arte. Una pelicula que se anticipó a todas las que vinieron despues sobe la violencia y la protesta juvenil. Supo combinar la violencia interior de los personajes con la exterior y no cayo en la tentación de achacarla solo a los jóvens sino que hace un escrutinio de una sociedad que inevitablemente conduce al conflcto personal y social.",
    sinopsis:
      "Un criminal en la Inglaterra del futuro pasa una serie de procesos experimentales para corregir sus impulsos violentos.",
    actores: ["Malcolm McDowell", "Miriam Karlin", "Adrienne Corri"],
  },
  {
    title: "iPhone 14 Pro 128 GB Morado Oscuro",
    releaseYear: "$5'549.000",
    price: 5549000,
    rating: 6.6,
    id: "info6",
    img: "https://tiendasishop.com/media/catalog/product/i/p/iphone_14_pro_deep_purple_pdp_image_position-1a_mxla_4.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
    reseña:
      "Es una obra de arte. Una pelicula que se anticipó a todas las que vinieron despues sobe la violencia y la protesta juvenil. Supo combinar la violencia interior de los personajes con la exterior y no cayo en la tentación de achacarla solo a los jóvens sino que hace un escrutinio de una sociedad que inevitablemente conduce al conflcto personal y social.",
    sinopsis:
      "Un criminal en la Inglaterra del futuro pasa una serie de procesos experimentales para corregir sus impulsos violentos.",
    actores: ["Malcolm McDowell", "Miriam Karlin", "Adrienne Corri"],
  }
];

export default movies;
