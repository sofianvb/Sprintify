export class CarrerasModel {
    async getCarrerasInfo(url) {
        await new Promise(resolve => setTimeout(resolve, 500));

        const mockData = [
            {
                id: 1,
                nombre: "San Silvestre Vallecana",
                ubicacion: "Estadio Santiago Bernabéu",
                distancia: "10 KM",
                ritmo: "5:00 /km",
                hora: "17:30",
                tipo: "Media Maratón"
            },
            {
                id: 2,
                nombre: "Retiro Morning Run",
                ubicacion: "Parque del Retiro",
                distancia: "5 KM",
                ritmo: "4:30 /km",
                hora: "08:00",
                tipo: "Entrenamiento"
            }
        ];

        return mockData;
    }
}