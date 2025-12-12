// DATA: Malla Curricular Derecho Universidad San Sebastián
// Basado en la imagen proporcionada.
// Los ID corresponden al número en la esquina superior derecha del cuadro.
// Los REQ corresponden al número en la esquina inferior izquierda.

const curriculum = [
    // --- AÑO 1 / SEMESTRE I ---
    { id: 1, name: 'Introducción al Derecho', semester: 1, req: [] },
    { id: 2, name: 'Historia Constitucional de Chile', semester: 1, req: [] },
    { id: 3, name: 'Instituciones Políticas', semester: 1, req: [] },
    { id: 4, name: 'Fundamentos Filosóficos del Derecho', semester: 1, req: [] },
    { id: 5, name: 'Estrategias para el Aprendizaje', semester: 1, req: [] },

    // --- AÑO 1 / SEMESTRE II ---
    { id: 6, name: 'Teoría de la Ley y las Personas', semester: 2, req: [1] },
    { id: 7, name: 'Fundamentos de la Economía', semester: 2, req: [] },
    { id: 8, name: 'Derechos Fundamentales', semester: 2, req: [3] },
    { id: 9, name: 'Filosofía del Derecho', semester: 2, req: [4] },
    { id: 10, name: 'Antropología', semester: 2, req: [] },
    { id: 11, name: 'Fundamentos de la Inv. Jurídica', semester: 2, req: [] },

    // --- AÑO 2 / SEMESTRE III ---
    { id: 12, name: 'Acto Jurídico', semester: 3, req: [6] },
    { id: 13, name: 'Derecho Individual del Trabajo', semester: 3, req: [7] },
    { id: 14, name: 'Derecho Constitucional Orgánico', semester: 3, req: [8] },
    { id: 15, name: 'Derecho Procesal Orgánico', semester: 3, req: [8] },
    { id: 16, name: 'Ética', semester: 3, req: [10] },

    // --- AÑO 2 / SEMESTRE IV ---
    { id: 17, name: 'Bienes', semester: 4, req: [12] },
    { id: 18, name: 'Der. Colectivo y Seguridad Social', semester: 4, req: [13] },
    { id: 19, name: 'Derecho Administrativo', semester: 4, req: [14] },
    { id: 20, name: 'Reglas Comunes a Todo Proc.', semester: 4, req: [15] },
    { id: 21, name: 'Argumentación y Expresión Oral', semester: 4, req: [] },
    { id: 22, name: 'Electivo de Formación Integral I', semester: 4, req: [] },

    // --- AÑO 3 / SEMESTRE V ---
    { id: 23, name: 'Obligaciones y Contratos', semester: 5, req: [17] },
    { id: 24, name: 'Actos de Comercio', semester: 5, req: [12] },
    { id: 25, name: 'Teoría del Delito y de la Pena', semester: 5, req: [8] },
    { id: 26, name: 'Procedimientos Declarativos', semester: 5, req: [20] },
    { id: 27, name: 'Métodos Colaborativos de Res. Conflictos', semester: 5, req: [21] },
    { id: 28, name: 'Electivo de Formación Integral II', semester: 5, req: [] },

    // --- AÑO 3 / SEMESTRE VI ---
    { id: 29, name: 'Responsabilidad Civil', semester: 6, req: [23] },
    { id: 30, name: 'Derecho Societario', semester: 6, req: [24] },
    { id: 31, name: 'Formas de Aparición del Delito', semester: 6, req: [25] },
    { id: 32, name: 'Recursos y Juicio Ejecutivo', semester: 6, req: [26] },
    { id: 33, name: 'Mediación, Negociación y Conciliación', semester: 6, req: [27] },
    { id: 34, name: 'Electivo de Formación Integral III', semester: 6, req: [] },

    // --- AÑO 4 / SEMESTRE VII ---
    { id: 35, name: 'Derecho Sucesorio y Familia', semester: 7, req: [29] },
    { id: 36, name: 'Insolvencia y Derecho Concursal', semester: 7, req: [30] },
    { id: 37, name: 'Derecho Penal Especial', semester: 7, req: [31] },
    { id: 38, name: 'Procedimientos Especiales', semester: 7, req: [26] },
    { id: 39, name: 'Redacción Legal', semester: 7, req: [33] },
    { id: 40, name: 'Electivo de Formación Integral IV', semester: 7, req: [] },

    // --- AÑO 4 / SEMESTRE VIII ---
    { id: 41, name: 'Derecho Tributario', semester: 8, req: [23] }, // Req Obligaciones según img
    { id: 42, name: 'Derecho Económico Regulatorio', semester: 8, req: [19] },
    { id: 43, name: 'Der. Penal Económico y Compliance', semester: 8, req: [37] },
    { id: 44, name: 'Destrezas de la Litigación Oral', semester: 8, req: [38] },
    { id: 45, name: 'Ética y Responsabilidad Profesional', semester: 8, req: [9] },
    { id: 46, name: 'Derecho Procesal Penal', semester: 8, req: [37] },

    // --- AÑO 5 / SEMESTRE IX ---
    { id: 47, name: 'Clínica Jurídica I', semester: 9, req: [38] },
    { id: 48, name: 'Seminario de Investigación', semester: 9, req: [11] },
    { id: 49, name: 'Electivo de Profundización I', semester: 9, req: [] },
    { id: 50, name: 'Electivo de Profundización II', semester: 9, req: [] },
    { id: 51, name: 'Electivo I', semester: 9, req: [] },

    // --- AÑO 5 / SEMESTRE X ---
    { id: 52, name: 'Clínica Jurídica II', semester: 10, req: [47] },
    { id: 53, name: 'Electivo de Profundización III', semester: 10, req: [] },
    // El ID 54 pide "1 al 51" (toda la carrera aprobada).
    // Para simplificar el código, pedimos que tenga aprobado el semestre anterior completo.
    { id: 54, name: 'Seminario de Integración Jurídica', semester: 10, req: [47, 48, 49, 50, 51] },
    { id: 55, name: 'Electivo II', semester: 10, req: [] }
];

// --- NO TOCAR DESDE AQUÍ HACIA ABAJO (Lógica del sistema) ---

// Cargar datos guardados
let approvedSubjects = JSON.parse(localStorage.getItem('approvedSubjects')) || [];

const mallaGrid = document.getElementById('malla-grid');
const progressBar = document.getElementById('progress-bar');
const statsText = document.getElementById('stats-text');

function renderMalla() {
    mallaGrid.innerHTML = ''; 
    const maxSemester = Math.max(...curriculum.map(c => c.semester));

    for (let i = 1; i <= maxSemester; i++) {
        const semesterCol = document.createElement('div');
        semesterCol.className = 'semester-column';
        
        const title = document.createElement('div');
        title.className = 'semester-title';
        title.innerText = `Semestre ${i}`;
        semesterCol.appendChild(title);

        const subjectsInSemester = curriculum.filter(c => c.semester === i);

        subjectsInSemester.forEach(subject => {
            const card = document.createElement('div');
            card.className = 'subject-card';
            card.innerText = subject.name;
            
            // Lógica de Estado
            const isApproved = approvedSubjects.includes(subject.id);
            const isLocked = checkLocked(subject);

            if (isApproved) {
                card.classList.add('approved');
            } else if (isLocked) {
                card.classList.add('locked');
                // Opcional: Mostrar candado o tooltip
                card.title = "Faltan pre-requisitos";
            }

            // Click event
            card.addEventListener('click', () => toggleSubject(subject.id));

            semesterCol.appendChild(card);
        });

        mallaGrid.appendChild(semesterCol);
    }
    updateProgress();
}

function checkLocked(subject) {
    if (subject.req.length === 0) return false;
    // Si falta CUALQUIERA de los requisitos, está bloqueado
    return subject.req.some(reqId => !approvedSubjects.includes(reqId));
}

function toggleSubject(id) {
    // Si está bloqueado, no hacer nada
    const subject = curriculum.find(s => s.id === id);
    if (checkLocked(subject) && !approvedSubjects.includes(id)) return;

    if (approvedSubjects.includes(id)) {
        approvedSubjects = approvedSubjects.filter(s => s !== id);
        // Al desmarcar, también debemos desmarcar recursivamente los que se bloquean
        removeDependentSubjects(id);
    } else {
        approvedSubjects.push(id);
    }
    
    saveProgress();
    renderMalla();
}

// Función extra para que si desmarcas un ramo, se desmarquen los siguientes que dependían de él
function removeDependentSubjects(removedId) {
    const dependents = curriculum.filter(s => s.req.includes(removedId));
    dependents.forEach(dep => {
        if (approvedSubjects.includes(dep.id)) {
            approvedSubjects = approvedSubjects.filter(s => s !== dep.id);
            removeDependentSubjects(dep.id); // Recursividad
        }
    });
}

function saveProgress() {
    localStorage.setItem('approvedSubjects', JSON.stringify(approvedSubjects));
}

function updateProgress() {
    const total = curriculum.length;
    const approved = approvedSubjects.length;
    const percentage = Math.round((approved / total) * 100);

    progressBar.style.width = `${percentage}%`;
    progressBar.innerText = `${percentage}%`;
    statsText.innerText = `${approved} ramos aprobados de ${total}`;
}

renderMalla();
