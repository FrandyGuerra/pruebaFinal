import "./styles.css";

const masa = document.querySelector("#masa");
const sabor = document.querySelector("#sabor");
const cobertura = document.querySelector("#cobertura");
const tamano = document.querySelector("#tamano");
const hora = document.querySelector("#hora");

const masaJson = [
  {
    id: 1,
    masa: "bizcocho"
  },
  { id: 2, masa: "Panqueque" },
  {
    id: 3,
    masa: "Merengue"
  },
  {
    id: 4,
    masa: "Hoja"
  }
];

const saborJson = [
  {
    id: 1,
    sabor: "Vainilla"
  },
  {
    id: 2,
    sabor: "Chocolate"
  },
  {
    id: 3,
    sabor: "Nuez"
  }
];

const coberturaJson = [
  {
    id: 1,
    cobertura: "Crema Chantilly"
  },
  {
    id: 2,
    cobertura: "Crema Vainilla"
  },
  {
    id: 3,
    cobertura: "Manjar"
  },
  {
    id: 4,
    cobertura: "Chocolate"
  }
];

const tamanoJson = [
  {
    id: 1,
    tamano: "6 personas"
  },
  {
    id: 2,
    tamano: "12 personas"
  },
  {
    id: 3,
    tamano: "18 personas"
  },
  {
    id: 4,
    tamano: "24 personas"
  }
];

const horaJson = [
  {
    id: 1,
    hora: "9:00"
  },
  {
    id: 2,
    hora: "9:30"
  },
  {
    id: 3,
    hora: "10:00"
  },
  {
    id: 3,
    hora: "10:30"
  },
  {
    id: 4,
    hora: "11:00"
  },
  {
    id: 5,
    hora: "11:30"
  },
  {
    id: 6,
    hora: "12:00"
  },
  {
    id: 7,
    hora: "12:30"
  },
  {
    id: 8,
    hora: "13:00"
  },
  {
    id: 9,
    hora: "13:30"
  },
  {
    id: 10,
    hora: "14:00"
  },
  {
    id: 11,
    hora: "14:30"
  },
  {
    id: 12,
    hora: "15:00"
  },
  {
    id: 13,
    hora: "15:30"
  },
  {
    id: 14,
    hora: "16:00"
  },
  {
    id: 15,
    hora: "16:30"
  },
  {
    id: 16,
    hora: "17:00"
  },
  {
    id: 18,
    hora: "17:30"
  },
  {
    id: 19,
    hora: "18:00"
  },
  {
    id: 20,
    hora: "18:30"
  },
  {
    id: 21,
    hora: "19:00"
  }
];

let p = document.createElement("option");
p.text = "::Masa::";

masa.add(p);
for (let i = 0; i < masaJson.length; i++) {
  let option = document.createElement("option");
  option.text = masaJson[i].masa;
  masa.add(option);
}

let s = document.createElement("option");
s.text = " ";
sabor.add(s);

for (let i = 0; i < saborJson.length; i++) {
  let option = document.createElement("option");
  option.text = saborJson[i].sabor;
  sabor.add(option);
}

let t = document.createElement("option");
t.text = " ";
cobertura.add(t);

for (let i = 0; i < coberturaJson.length; i++) {
  let option = document.createElement("option");
  option.text = coberturaJson[i].cobertura;
  cobertura.add(option);
}

let c = document.createElement("option");
c.text = "::Tamaño::";
tamano.add(c);

for (let i = 0; i < tamanoJson.length; i++) {
  let option = document.createElement("option");
  option.text = tamanoJson[i].tamano;
  tamano.add(option);
}

let q = document.createElement("option");
q.text = "::Hora::";
hora.add(q);

for (let i = 0; i < horaJson.length; i++) {
  let option = document.createElement("option");
  option.text = horaJson[i].hora;
  hora.add(option);
}
