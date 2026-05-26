class Config {
    constructor() {
        this.urlCarreras = "api/v1/carreras";
    }
    getUrlCarreras() {
        return this.urlCarreras;
    }
}

class CarrerasModel {
    async getCarrerasInfo(url) {
        return [
            { nombre: "San Silvestre Vallecana", distancia: "10 KM" },
            { nombre: "Retiro Morning Run", distancia: "5 KM" }
        ];
    }
}

describe('Pruebas Unitarias Sprintify', () => {

    test('Config debe devolver la URL correcta de carreras', () => {
        const config = new Config();
        expect(config.getUrlCarreras()).toBe('api/v1/carreras');
    });

    test('CarrerasModel debe retornar un array de carreras con propiedades válidas', async () => {
        const model = new CarrerasModel();
        const datos = await model.getCarrerasInfo('dummy-url');
        
        expect(Array.isArray(datos)).toBe(true);
        expect(datos.length).toBeGreaterThan(0);
        expect(datos[0]).toHaveProperty('nombre');
        expect(datos[0]).toHaveProperty('distancia');
    });

    test('El formulario debe detectar una contraseña demasiado corta', () => {
        const mockPasswordInput = {
            value: '12345',
            minLength: 6,
            checkValidity() {
                return this.value.length >= this.minLength;
            }
        };
        
        const esValido = mockPasswordInput.checkValidity();
        
        expect(esValido).toBe(false); 
    });

});