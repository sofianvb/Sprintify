import { Config } from "../config/config.js";
import { CarrerasModel } from "../model/carrerasModel.js";

export class CarrerasViewModel {
    async init() {
        const config = new Config();
        const model = new CarrerasModel();

        try {
            const url = config.getUrlCarreras();
            const carreras = await model.getCarrerasInfo(url);
            this.render(carreras);
        } catch (error) {
            console.error("Error al obtener los datos de carreras: ", error);
        }
    }

    render(datos) {
        const contenedor = document.getElementById("lista-carreras");
        if (!contenedor) return;

        let contenidoHtml = "";

        datos.forEach(item => {
            contenidoHtml += `
                <div class="carrera-card p-3 mb-3">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <span class="badge-sprintify">${item.tipo}</span>
                        <i class="bi bi-share text-white"></i>
                    </div>
                    <h4 class="fw-bold">${item.nombre}</h4>
                    <p class="text-muted mb-2"><i class="bi bi-geo-alt"></i> ${item.ubicacion}</p>
                    <div class="d-flex justify-content-between mt-3">
                        <div>
                            <small class="text-muted d-block">Distancia</small>
                            <span class="fw-bold">${item.distancia}</span>
                        </div>
                        <div>
                            <small class="text-muted d-block">Ritmo</small>
                            <span class="fw-bold">${item.ritmo}</span>
                        </div>
                        <div>
                            <small class="text-muted d-block">Hora</small>
                            <span class="fw-bold">${item.hora}</span>
                        </div>
                    </div>
                    <button class="btn btn-light w-100 mt-3 fw-bold rounded-pill btn-unirme" data-id="${item.id}">Unirme</button>
                </div>
            `;
        });

        contenedor.innerHTML = contenidoHtml;

        // FUNCIONALIDAD #4: INSCRIPCIÓN A CARRERAS
        const botonesUnirme = document.querySelectorAll('.btn-unirme');
        botonesUnirme.forEach(boton => {
            boton.addEventListener('click', (e) => {
                const btn = e.target;
                if (btn.innerText === "Unirme") {
                    btn.innerText = "¡Inscrito!";
                    btn.classList.remove("btn-light");
                    btn.classList.add("btn-success");
                    btn.style.backgroundColor = "#e0ff00";
                    btn.style.color = "#000";
                    btn.style.borderColor = "#e0ff00";
                    alert("¡Enhorabuena! Te has inscrito a la carrera correctamente.");
                } else {
                    btn.innerText = "Unirme";
                    btn.classList.remove("btn-success");
                    btn.classList.add("btn-light");
                    btn.style.backgroundColor = "";
                    btn.style.color = "";
                    alert("Te has dado de baja de la carrera.");
                }
            });
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const vm = new CarrerasViewModel();
    vm.init();
});