export const data = [
  {
    question: "Palabra que contiene diptongo decreciente",
    choices: ["nuevamente", "cielo", "ciudad", "sonríe", "pleito"],
    answer: "pleito",
  },
  {
    question: "Grupo de palabras que presentan diptongo homogéneo",
    choices: [
      "traiga, reina, mamey",
      "cuenca, realce, boicot",
      "sirviente, suave, piano",
      "reía, viuda, cuidado",
      "ciudad, cuy, huida",
    ],
    answer: "ciudad, cuy, huida",
  },
  {
    question:
      "El precio promedio de 30 artículos es 50 nuevos soles. Si se incrementa cada artículo en 20%. Entonces el promedio se incrementará en",
    choices: ["8", "10", "12", "14", "16"],
    answer: "10",
  },
  {
    question:
      "Sustituya la palabra subrayada por el sinónimo respectivo <br> <br>  -El joven <span style='text-decoration: underline;'>errante</span> apareció en una cabaña",
    choices: ["vagabundo", "orate", "sedentario", "confundido", "decente"],
    answer: "vagabundo",
  },
  {
    question:
      " Elija los conectores que den sentido lógico a la oración <br>  Iza terminó su trabajo, _____ divertir con Arni _____ se fue a son muy amigos ",
    choices: [
      "en primer lugar - pero",
      "ya que -como que",
      "posteriormente - porque",
      "mas  -pues bien",
      "como-bien",
    ],
    answer: "posteriormente - porque",
  },
  {
    question:
      "Sustituya las palabras subrayadas por los antónimos respectivos <br> <br>  <span style='text-decoration: underline;'>Evita</span> todo aquello que vaya en <span style='text-decoration: underline;'>detrimento</span> de tu personalidad ",
    choices: [
      "enrostra - mejoría",
      "acepta - provecho",
      "elude - servicio",
      "impide - beneficio",
      "soslaya - favor",
    ],
    answer: "acepta - provecho",
  },
  {
    question: "<img src='src/img/1.jpg' alt=''>",
    choices: ["n^n.n", "n^(n^n)", "n^(n^2)", "n^2n", "n^(2^n)"],
    answer: "n^(n^2)",
  },
  {
    question: "<img src='src/img/2.jpg' alt=''>",
    choices: ["11", "12", "13", "14", "15"],
    answer: "12",
  },
  {
    question: "<img src='src/img/3.jpg' alt=''>",
    choices: ["-3", "0", "-1", "2", "3"],
    answer: "-3",
  },
  {
    question: "<img src='src/img/4.jpg' alt=''>",
    choices: ["0", "1", "4", "6", "8"],
    answer: "0",
  },
  {
    question: "<img src='src/img/5.jpg' alt=''>",
    choices: ["5", "5/2", "2", "√3", "3/2"],
    answer: "5/2",
  },
].sort(() => Math.random() - 0.5);
