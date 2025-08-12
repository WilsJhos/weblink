document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('current-year').textContent = new Date().getFullYear();

    
    const servicios = [
        {
            titulo: "Configuración OLT",
            imagen: "https://drive.google.com/thumbnail?id=1EHOapbaY4Wk27hJS3fQND32Qyp3Wf03Z"
        },
        {
            titulo: "Router Cisco",
            imagen: "https://drive.google.com/thumbnail?id=1qQWKItx3QxsKRxw0zUY7sWklV4Tb9d9R"
        },
        {
            titulo: "Firewall Fortinet",
            imagen: "https://drive.google.com/thumbnail?id=1wGmHEL9bgwz1TtyI3GT88DcieHBlkIfw"
        },
        {
            titulo: "Instalación FTTH",
            imagen: "https://drive.google.com/thumbnail?id=1bqcD6j7r_gYLHezo0ztkMX9r--9PXffT"
        }
    ];

    
    const serviciosContainer = document.getElementById('servicios-imagenes');
    servicios.forEach(servicio => {
        const col = document.createElement('div');
        col.className = 'col-12 col-sm-6 col-md-4 col-lg-3';
        
        col.innerHTML = `
            <div class="card h-100">
                <div class="card-body text-center">
                    <h3 class="section-title h5">${servicio.titulo}</h3>
                    <img src="${servicio.imagen}" alt="${servicio.titulo}" class="service-img img-fluid mt-2">
                </div>
            </div>
        `;
        
        serviciosContainer.appendChild(col);
    });

    
    const objetivos = [
        "Brindar soporte técnico especializado en equipos de red",
        "Optimizar la infraestructura de nuestros clientes",
        "Implementar soluciones escalables y seguras",
        "Reducir los tiempos de inactividad de las redes"
    ];

    const objetivosLista = document.getElementById('objetivos-lista');
    objetivos.forEach(objetivo => {
        const li = document.createElement('li');
        li.textContent = objetivo;
        objetivosLista.appendChild(li);
    });

    
    const serviciosTabla = [
        {
            servicio: "Configuración de OLT",
            descripcion: "Instalación y configuración de equipos OLT para redes FTTH, incluyendo gestión de ONTs y perfiles de servicio."
        },
        {
            servicio: "Routers Cisco",
            descripcion: "Configuración avanzada de routers Cisco para ISPs y políticas de enrutamiento."
        },
        {
            servicio: "Firewalls Fortinet",
            descripcion: "Implementación de soluciones de seguridad con Fortinet, incluyendo VPNs, filtrado de contenido y protección contra amenazas."
        },
        {
            servicio: "Despliegue FTTH",
            descripcion: "Servicios completos para implementación de redes FTTH, desde diseño hasta puesta en marcha y capacitación."
        }
    ];

    const tablaBody = document.querySelector('#servicios-tabla tbody');
    serviciosTabla.forEach((servicio, index) => {
        const tr = document.createElement('tr');
        if (index % 2 === 1) tr.className = 'table-light';
        
        tr.innerHTML = `
            <td><strong>${servicio.servicio}</strong></td>
            <td>${servicio.descripcion}</td>
        `;
        
        tablaBody.appendChild(tr);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});