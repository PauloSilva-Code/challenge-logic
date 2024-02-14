const nomeHeroi = "Paulo";
let experienciaXp = 8050;
let categoria = "";

if (experienciaXp <= 1000) {
  categoria = "Ferro";
  console.log(
    "O herói " +
      nomeHeroi +
      " está no nível " +
      experienciaXp +
      " no rank " +
      categoria
  );
} else if (experienciaXp > 1001 && experienciaXp < 2000) {
  categoria = "Bronze";
  console.log(
    "O herói " +
      nomeHeroi +
      " está no nível " +
      experienciaXp +
      " no rank " +
      categoria
  );
} else if (experienciaXp > 2001 && experienciaXp < 5000) {
  categoria = "Prata";
  console.log(
    "O herói " +
      nomeHeroi +
      " está no nível " +
      experienciaXp +
      " no rank " +
      categoria
  );
} else if (experienciaXp > 6001 && experienciaXp < 7000) {
  categoria = "Ouro";
  console.log(
    "O herói " +
      nomeHeroi +
      " está no nível " +
      experienciaXp +
      " no rank " +
      categoria
  );
} else if (experienciaXp > 7001 && experienciaXp < 8000) {
  categoria = "Platina";
  console.log(
    "O herói " +
      nomeHeroi +
      " está no nível " +
      experienciaXp +
      " no rank " +
      categoria
  );
} else if (experienciaXp > 8001 && experienciaXp < 9000) {
  categoria = "Ascendente";
  console.log(
    "O herói " +
      nomeHeroi +
      " está no nível " +
      experienciaXp +
      " no rank " +
      categoria
  );
} else if (experienciaXp > 9001 && experienciaXp < 10000) {
  categoria = "Imortal";
  console.log(
    "O herói " +
      nomeHeroi +
      " está no nível " +
      experienciaXp +
      " no rank " +
      categoria
  );
} else if (experienciaXp >= 10001) {
  categoria = "Radiante";
  console.log(
    "O herói " +
      nomeHeroi +
      " está no nível " +
      experienciaXp +
      " no rank " +
      categoria
  );
}
