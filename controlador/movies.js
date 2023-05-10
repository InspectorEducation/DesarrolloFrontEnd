const movies = [
  {
    title: "Avatar",
    releaseYear: 2009,
    rating: 7.8,
    id: "info1",
    img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1430A47DDD532CE6292009B3CF2080145C771904DF2F472021F2EC6075D0761C/scale?width=1200&aspectRatio=1.78&format=jpeg",
    reseña:
      "A nivel visual y técnico Avatar (2009) es la película de ciencia ficción impresionante y sorprendentemente más espectacular y la más grandilocuente, y también es una de las más innovadoras y ambiciosas película de todos los tiempos en la historia",
    sinopsis:
      "En un exuberante planeta llamado Pandora viven los Navi, seres que aparentan ser primitivos pero que en realidad son muy evolucionados. Debido a que el ambiente de Pandora es venenoso, los híbridos humanos/Navi, llamados Avatares.",
    actores: ["Zoe Saldaña", "Sam Worthington", "Giovanni Ribisi"],
  },
  {
    title: "Blade Cazador de vampiros",
    releaseYear: 1998,
    rating: 7.1,
    id: "info2",
    img: "https://hbomax-images.warnermediacdn.com/images/GXt_r5AwEa8PCwgEAAAsi/tileburnedin?size=1280x720&partner=hbomaxcom&v=47750e98cb3ab92f0052e9ed0aefb69a&host=art-gallery.api.hbo.com&language=es-419&w=1280",
    reseña:
      "Que decir de esta tremenda película. Innovadora en el género vampiros y superhéroes. Wesley snipes está a la altura del personaje o incluso lo agranda. Un estilo único y propio que mezcla la antiguo y lo moderno,lo clásico y lo novedoso.",
    sinopsis:
      "Un hombre medio mortal, medio vampiro y capaz de andar bajo la luz solar, trata de vengar la muerte de su madre e impedir que los vampiros dominen el mundo. Estos han desarrollado una novedosa tecnología y tan solo necesitan hallar un tipo sanguíneo concreto para así poder invocar a una deidad maligna que juega un papel fundamental en sus planes.",
    actores: ["Wesley Snipes", "Donal Logue", "Kris Kristofferson"],
  },
  {
    title: "Blade Runner 2048",
    releaseYear: 2017,
    rating: 8.1,
    id: "info3",
    img: "https://img.asmedia.epimg.net/resizer/0F6DytNBTgaS9SDzInW8W5deHgA=/644x362/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/YUQJG26FQFKPNIL4WQ5LXVMKJI.jpg",
    reseña:
      "Cinta dirigida por Ridley Scott (director de Gladiator y Alien) nos trajo una obra maestra, marcaría un antes y después en la industria del cine. Considerada película de culto para muchos. El cineasta británico hizo uno de sus mejores trabajos junto a Gladiator y Alien.",
    sinopsis:
      "En un futuro sombrío y lluvioso, un expolicía vuelve al servicio para buscar y destruir a un grupo de androides que fingen ser humanos para, integrados en la sociedad, encontrar a su creador y matarlo.",
    actores: ["Harrison Ford", "William Sanderson", "Joanna Cassidy"],
  },
  {
    title: "La Naranja Mecanica",
    releaseYear: 1971,
    rating: 8.2,
    id: "info4",
    img: "https://www.el-parnasillo.com/naranjamecanica/la-naranja-mecanica-poster.jpg",
    reseña:
      "Es una obra de arte. Una pelicula que se anticipó a todas las que vinieron despues sobe la violencia y la protesta juvenil. Supo combinar la violencia interior de los personajes con la exterior y no cayo en la tentación de achacarla solo a los jóvens sino que hace un escrutinio de una sociedad que inevitablemente conduce al conflcto personal y social.",
    sinopsis:
      "Un criminal en la Inglaterra del futuro pasa una serie de procesos experimentales para corregir sus impulsos violentos.",
    actores: ["Malcolm McDowell", "Miriam Karlin", "Adrienne Corri"],
  },
  {
    title: "Inside Out",
    releaseYear: 2015,
    rating: 7.3,
    id: "info5",
    img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg",
    reseña:
      "Es una obra de arte. Una pelicula que se anticipó a todas las que vinieron despues sobe la violencia y la protesta juvenil. Supo combinar la violencia interior de los personajes con la exterior y no cayo en la tentación de achacarla solo a los jóvens sino que hace un escrutinio de una sociedad que inevitablemente conduce al conflcto personal y social.",
    sinopsis:
      "Un criminal en la Inglaterra del futuro pasa una serie de procesos experimentales para corregir sus impulsos violentos.",
    actores: ["Malcolm McDowell", "Miriam Karlin", "Adrienne Corri"],
  },
  {
    title: "Garfield 2",
    releaseYear: 2006 ,
    rating: 6.6,
    id: "info6",
    img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4E9E81584305009D6385F6178D4B6930E97CD6EC4A3B53C818400DEF778FFA9A/scale?width=1440&aspectRatio=1.78&format=jpeg",
    reseña:
      "Es una obra de arte. Una pelicula que se anticipó a todas las que vinieron despues sobe la violencia y la protesta juvenil. Supo combinar la violencia interior de los personajes con la exterior y no cayo en la tentación de achacarla solo a los jóvens sino que hace un escrutinio de una sociedad que inevitablemente conduce al conflcto personal y social.",
    sinopsis:
      "Un criminal en la Inglaterra del futuro pasa una serie de procesos experimentales para corregir sus impulsos violentos.",
    actores: ["Malcolm McDowell", "Miriam Karlin", "Adrienne Corri"],
  },
  {
    title: "Bao",
    releaseYear: 2018,
    rating: 9.2,
    id: "info7",
    img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg",
    reseña:
      "Es una obra de arte. Una pelicula que se anticipó a todas las que vinieron despues sobe la violencia y la protesta juvenil. Supo combinar la violencia interior de los personajes con la exterior y no cayo en la tentación de achacarla solo a los jóvens sino que hace un escrutinio de una sociedad que inevitablemente conduce al conflcto personal y social.",
    sinopsis:
      "Un criminal en la Inglaterra del futuro pasa una serie de procesos experimentales para corregir sus impulsos violentos.",
    actores: ["Malcolm McDowell", "Miriam Karlin", "Adrienne Corri"],
  },
  {
    title: "Enredados",
    releaseYear: 2010,
    rating: 8.0,
    id: "info8",
    img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FA1548A6B82C9991B1D38DF251A388FEA2483904510FBC73E150F67F7BDE38C0/scale?width=1440&aspectRatio=1.78&format=jpeg",
    reseña:
      "Es una obra de arte. Una pelicula que se anticipó a todas las que vinieron despues sobe la violencia y la protesta juvenil. Supo combinar la violencia interior de los personajes con la exterior y no cayo en la tentación de achacarla solo a los jóvens sino que hace un escrutinio de una sociedad que inevitablemente conduce al conflcto personal y social.",
    sinopsis:
      "Un criminal en la Inglaterra del futuro pasa una serie de procesos experimentales para corregir sus impulsos violentos.",
    actores: ["Malcolm McDowell", "Miriam Karlin", "Adrienne Corri"],
  },
  {
    title: "Soul",
    releaseYear: 2020 ,
    rating: 8.3,
    id: "info9",
    img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/56EEBB17CC25C9FE16E334C34EF96BF7D91EC9BA3B438F88FB24E1C2AE785E03/scale?width=1440&aspectRatio=1.78&format=jpeg",
    reseña:
      "Es una obra de arte. Una pelicula que se anticipó a todas las que vinieron despues sobe la violencia y la protesta juvenil. Supo combinar la violencia interior de los personajes con la exterior y no cayo en la tentación de achacarla solo a los jóvens sino que hace un escrutinio de una sociedad que inevitablemente conduce al conflcto personal y social.",
    sinopsis:
      "Un criminal en la Inglaterra del futuro pasa una serie de procesos experimentales para corregir sus impulsos violentos.",
    actores: ["Malcolm McDowell", "Miriam Karlin", "Adrienne Corri"],
  },
  {
    title: "Moana",
    releaseYear: 2016,
    rating: 9.2,
    id: "info10",
    img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AAC4808815AE5721A6AAB372DD14B8CE2E7E9EFF3A27942EF2B6B45EBF4E65CB/scale?width=1440&aspectRatio=1.78&format=jpeg",
    reseña:
      "Es una obra de arte. Una pelicula que se anticipó a todas las que vinieron despues sobe la violencia y la protesta juvenil. Supo combinar la violencia interior de los personajes con la exterior y no cayo en la tentación de achacarla solo a los jóvens sino que hace un escrutinio de una sociedad que inevitablemente conduce al conflcto personal y social.",
    sinopsis:
      "Un criminal en la Inglaterra del futuro pasa una serie de procesos experimentales para corregir sus impulsos violentos.",
    actores: ["Malcolm McDowell", "Miriam Karlin", "Adrienne Corri"],
  },
  {
    title: "Increibles 2",
    releaseYear: 2018,
    rating: 5.2,
    id: "info11",
    img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B409C2A425D58C32D822EB633C7CAE3DC910DC2FC62D2B1807A0BB092C531E9A/scale?width=1440&aspectRatio=1.78&format=jpeg",
    reseña:
      "Es una obra de arte. Una pelicula que se anticipó a todas las que vinieron despues sobe la violencia y la protesta juvenil. Supo combinar la violencia interior de los personajes con la exterior y no cayo en la tentación de achacarla solo a los jóvens sino que hace un escrutinio de una sociedad que inevitablemente conduce al conflcto personal y social.",
    sinopsis:
      "Un criminal en la Inglaterra del futuro pasa una serie de procesos experimentales para corregir sus impulsos violentos.",
    actores: ["Malcolm McDowell", "Miriam Karlin", "Adrienne Corri"],
  },
  {
    title: "Assembled",
    releaseYear: 2021,
    rating: 6.1,
    id: "info12",
    img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D53D1F5D357587A8D09067AB09FFC7096F837CBAAE02BDC3C0E75814471A1E36/scale?width=1440&aspectRatio=1.78&format=jpeg",
    reseña:
      "Es una obra de arte. Una pelicula que se anticipó a todas las que vinieron despues sobe la violencia y la protesta juvenil. Supo combinar la violencia interior de los personajes con la exterior y no cayo en la tentación de achacarla solo a los jóvens sino que hace un escrutinio de una sociedad que inevitablemente conduce al conflcto personal y social.",
    sinopsis:
      "Un criminal en la Inglaterra del futuro pasa una serie de procesos experimentales para corregir sus impulsos violentos.",
    actores: ["Malcolm McDowell", "Miriam Karlin", "Adrienne Corri"],
  },
];

export default movies;
