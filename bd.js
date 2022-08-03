const crearBaseDeDatos = () => {
  const elementos = [
    {
      id: "1",
      par: "2",
      imagen: "/assets/4500_6_05.jpg",
    },
    {
      id: "2",
      par: "1",
      imagen: "/assets/4500_6_05.jpg",
    },
    {
      id: "3",
      par: "4",
      imagen: "/assets/4500_7_02.jpg",
    },
    {
      id: "4",
      par: "3",
      imagen: "/assets/4500_7_02.jpg",
    },
    {
      id: "5",
      par: "6",
      imagen: "/assets/4600_1_08.jpg",
    },
    {
      id: "6",
      par: "5",
      imagen: "/assets/4600_1_08.jpg",
    },
    {
      id: "7",
      par: "8",
      imagen: "/assets/4700_6_04.jpg",
    },
    {
      id: "8",
      par: "7",
      imagen: "/assets/4700_6_04.jpg",
    },
    {
      id: "9",
      par: "10",
      imagen: "/assets/4500_1_01.jpg",
    },
    {
      id: "10",
      par: "9",
      imagen: "/assets/4500_1_01.jpg",
    },
    {
      id: "11",
      par: "12",
      imagen: "/assets/4500_7_07.jpg",
    },
    {
      id: "12",
      par: "11",
      imagen: "/assets/4500_7_07.jpg",
    },
  ];

  localStorage.setItem("cards", JSON.stringify(elementos));
};

crearBaseDeDatos();
