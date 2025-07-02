// --- 1. Tu lista de preguntas personalizadas ---
// Cada pregunta tendrá un 'id', 'type' (numeric o multiple-choice),
// 'questionText', y su 'correctAnswer' o 'options' + 'correctOptionIndex'.

const allQuestions = [
    // --- Basadas en "Aufgaben" (Ejercicios) ---

    // 1. Rechnet im Kopf (Calcula mentalmente)
    {
    id: 'triangle_1a',
    type: 'multiple-choice',
    questionText: '¿Cuántos lados iguales tiene un triángulo isósceles?',
    options: ['Uno', 'Dos', 'Tres'],
    correctOptionIndex: 1
},
{
    id: 'triangle_1b',
    type: 'multiple-choice',
    questionText: '¿Cómo se llaman los lados iguales de un triángulo isósceles?',
    options: ['Bases', 'Lados medios', 'Lados iguales o "Schenkel"'],
    correctOptionIndex: 2
},
{
    id: 'triangle_1c',
    type: 'multiple-choice',
    questionText: '¿Cómo se llama el lado diferente en un triángulo isósceles?',
    options: ['Schenkel', 'Basis', 'Punta'],
    correctOptionIndex: 1
},
{
    id: 'triangle_1d',
    type: 'multiple-choice',
    questionText: '¿Cómo se llaman los ángulos que están junto a la base?',
    options: ['Ángulos agudos', 'Ángulos de punta', 'Ángulos base o "Basiswinkel"'],
    correctOptionIndex: 2
},
{
    id: 'triangle_1e',
    type: 'multiple-choice',
    questionText: '¿Qué afirmación es correcta según el "Satz vom gleichschenkligen Dreieck"?',
    options: [
        'Todos los ángulos son iguales',
        'Los ángulos junto a la base son iguales',
        'La base es más larga que los lados'
    ],
    correctOptionIndex: 1
},
{
    id: 'triangle_1f',
    type: 'multiple-choice',
    questionText: '¿Qué propiedad tiene un triángulo isósceles además de tener lados iguales?',
    options: ['Es simétrico', 'Tiene cuatro lados', 'Tiene 90°'],
    correctOptionIndex: 0
},
{
    id: 'triangle_1g',
    type: 'multiple-choice',
    questionText: '¿Qué ocurre si un triángulo tiene dos ángulos iguales?',
    options: ['También tiene dos lados iguales', 'Es un triángulo rectángulo', 'Es un triángulo escaleno'],
    correctOptionIndex: 0
},
{
    id: 'triangle_1h',
    type: 'multiple-choice',
    questionText: '¿Dónde se encuentra el eje de simetría en un triángulo isósceles?',
    options: ['En uno de los lados', 'Desde la punta hasta la base', 'En el centro de la base'],
    correctOptionIndex: 1
},
{
    id: 'triangle_1i',
    type: 'multiple-choice',
    questionText: '¿Qué pasa si doblas un triángulo isósceles por el eje de simetría?',
    options: ['Los dos lados no coinciden', 'Se forma un cuadrado', 'Los dos lados coinciden perfectamente'],
    correctOptionIndex: 2
},
{
    id: 'triangle_1j',
    type: 'multiple-choice',
    questionText: '¿Qué significa que un triángulo sea "achsensymmetrisch"?',
    options: ['Tiene todos los lados iguales', 'Tiene una línea de simetría', 'Es un triángulo rectángulo'],
    correctOptionIndex: 1
},
{
    id: 'triangle_2a',
    type: 'numeric',
    questionText: 'Si los lados iguales de un triángulo miden 5 cm y la base mide 6 cm, ¿cuántos lados iguales tiene?',
    correctAnswer: 2
},
{
    id: 'triangle_2b',
    type: 'numeric',
    questionText: 'Si un triángulo isósceles tiene una base de 10 cm y un lado igual de 8 cm, ¿cuánto mide la suma de los tres lados?',
    correctAnswer: 26 // 8 + 8 + 10
},
{
    id: 'triangle_2c',
    type: 'numeric',
    questionText: 'Si los ángulos junto a la base miden 70° cada uno, ¿cuánto mide el ángulo superior?',
    correctAnswer: 40 // 180 - 70 - 70
},
{
    id: 'triangle_2d',
    type: 'numeric',
    questionText: 'Si el ángulo superior mide 30° en un triángulo isósceles, ¿cuánto mide cada ángulo base?',
    correctAnswer: 75 // (180 - 30) / 2
},
{
    id: 'triangle_2e',
    type: 'numeric',
    questionText: 'Un triángulo tiene dos lados que miden 6 cm y un tercero de 4 cm. ¿Es un triángulo isósceles? (1 = sí, 0 = no)',
    correctAnswer: 1
},
{
    id: 'triangle_2f',
    type: 'numeric',
    questionText: '¿Cuántos ejes de simetría tiene un triángulo isósceles?',
    correctAnswer: 1
},
{
    id: 'triangle_2g',
    type: 'numeric',
    questionText: '¿Cuántos grados suman siempre los ángulos de un triángulo, sin importar su tipo?',
    correctAnswer: 180
},
{
    id: 'triangle_2h',
    type: 'multiple-choice',
    questionText: '¿Qué tipo de triángulo tiene todos sus lados y ángulos diferentes?',
    options: ['Equilátero', 'Isósceles', 'Escaleno'],
    correctOptionIndex: 2
},
{
    id: 'triangle_2i',
    type: 'multiple-choice',
    questionText: '¿Qué tipo de triángulo tiene tres lados iguales?',
    options: ['Isósceles', 'Escaleno', 'Equilátero'],
    correctOptionIndex: 2
},
{
    id: 'triangle_2j',
    type: 'multiple-choice',
    questionText: 'En un triángulo isósceles con base AB, los lados AC y BC son iguales. ¿Dónde está el eje de simetría?',
    options: ['Entre AC y AB', 'Desde C hasta el punto medio de AB', 'Desde A hasta B'],
    correctOptionIndex: 1
},
{
        id: 'percent_head_1a',
        type: 'numeric',
        questionText: 'Calcula mentalmente: 10% de 300 €',
        correctAnswer: 30
    },
    {
        id: 'percent_head_1b',
        type: 'numeric',
        questionText: 'Calcula mentalmente: 20% de 50',
        correctAnswer: 10
    },
    {
        id: 'percent_head_1c',
        type: 'numeric',
        questionText: 'Calcula mentalmente: 20% de 400 metros cuadrados (m²)',
        correctAnswer: 80
    },
    {
        id: 'percent_head_1d',
        type: 'numeric',
        questionText: 'Calcula mentalmente: 4g de 2kg (en porcentaje). (Da el resultado en porcentaje sin el signo %)',
        correctAnswer: 0.2 // 4g de 2000g = 4/2000 = 0.002 = 0.2%
    },
    {
        id: 'percent_head_1e',
        type: 'numeric',
        questionText: 'Calcula mentalmente: 70% de 200m²',
        correctAnswer: 140
    },
    {
        id: 'percent_head_1f',
        type: 'numeric',
        questionText: 'Calcula mentalmente: ¿Cuántos Euros son 25% de 80€?',
        correctAnswer: 20
    },
    {
        id: 'percent_head_1g',
        type: 'numeric',
        questionText: 'Calcula mentalmente: 80% de qué número es 3.2?',
        correctAnswer: 4 // 3.2 / 0.8 = 4
    },
    {
        id: 'percent_head_1h',
        type: 'numeric',
        questionText: 'Calcula mentalmente: 50% de qué número es 60?',
        correctAnswer: 120
    },

    // --- Basadas en "Beispiel 1" (Ejemplo 1) y conceptos básicos ---

    // Frutas congeladas: 78% Agua, 18% Almidón, 2% Proteína, 2% Sustancias aromáticas
    // a) Berechnung, wie viel Stärke sich in 2,5kg Kartoffeln befindet. (Calcula cuánto almidón hay en 2.5kg de patatas.)
    // Asumiendo que 2.5kg son el 100% y el almidón es 18%
    {
        id: 'percent_potato_1',
        type: 'numeric',
        questionText: 'Una patata tiene un 18% de almidón. ¿Cuánto almidón hay en 2,5 kg de patatas? (Da la respuesta en kg, con un decimal. Ej: 0.5)',
        correctAnswer: 0.45 // 2.5 * 0.18 = 0.45 kg
    },
    // b) Berechnung, wie viele Kilogramm Kartoffeln etwa einen Liter Wasser enthalten. (Calcula cuántos kg de patatas contienen aproximadamente un litro de agua.)
    // Asumiendo 1 Litro de agua = 1 kg. Las patatas tienen 78% de agua.
    {
        id: 'percent_potato_2',
        type: 'numeric',
        questionText: 'Una patata tiene 78% de agua. ¿Cuántos kg de patatas necesitamos para obtener 1 litro de agua? (Da la respuesta en kg, con dos decimales. Ej: 1.78)',
        correctAnswer: 1.28 // 1 kg agua / 0.78 = 1.282... kg
    },
    // c) Berechnung: Prozentsatz: 18%, Grundwert: 2,5kg (Calcula el valor porcentual para 18% de 2.5kg)
    {
        id: 'percent_potato_3',
        type: 'numeric',
        questionText: '¿Cuál es el valor porcentual (Prozentwert) de 18% de 2,5 kg? (Da la respuesta en kg, con dos decimales. Ej: 0.45)',
        correctAnswer: 0.45 // 2.5 * 0.18 = 0.45 kg
    },
    // d) Berechnung: Grundwert: ?, Prozentsatz: 78%, Prozentwert: 1kg (Calcula el valor base si 78% es 1kg)
    {
        id: 'percent_potato_4',
        type: 'numeric',
        questionText: 'Si 78% de un peso es 1 kg, ¿cuál es el peso total (Grundwert) en kg? (Da la respuesta en kg, con dos decimales. Ej: 1.28)',
        correctAnswer: 1.28 // 1 / 0.78 = 1.28
    },

    // --- Basadas en "Beispiel 2" (Ejemplo 2) - Problema de Laura ---
    // "Laura piensa un número y lo aumenta en un 20%. Luego, lo disminuye en un 60%. Al final obtiene 144."
    // 144 = y - 0.6y (donde y = x + 0.2x) => 144 = 0.4y => y = 360
    // 360 = x + 0.2x => 360 = 1.2x => x = 300
    {
        id: 'percent_laura_1',
        type: 'numeric',
        questionText: 'Laura pensó un número. Lo aumentó un 20%, y luego el resultado lo disminuyó un 60%. Si el resultado final fue 144, ¿cuál fue el número intermedio (antes de disminuirlo en un 60%)?',
        correctAnswer: 360 // 144 / (1 - 0.6) = 144 / 0.4 = 360
    },
    {
        id: 'percent_laura_2',
        type: 'numeric',
        questionText: 'Laura pensó un número. Lo aumentó un 20%, y luego el resultado lo disminuyó un 60%. Si el resultado final fue 144, ¿cuál fue el número original que pensó Laura?',
        correctAnswer: 300 // 360 / (1 + 0.2) = 360 / 1.2 = 300
    },

    // --- Preguntas de Verdadero/Falso o Opción Múltiple basadas en conceptos ---

    {
        id: 'concept_1',
        type: 'multiple-choice',
        questionText: 'Si el "Grundwert" es el 100%, ¿qué representa el "Prozentwert"?',
        options: ['La cantidad total', 'La parte del total que corresponde al porcentaje', 'El porcentaje en sí mismo'],
        correctOptionIndex: 1
    },
    {
        id: 'concept_2',
        type: 'multiple-choice',
        questionText: '¿Cuál es la fórmula para calcular el "Prozentwert" (valor porcentual)?',
        options: ['Grundwert / Prozentsatz', 'Grundwert * Prozentsatz', 'Prozentsatz / Grundwert'],
        correctOptionIndex: 1 // Grundwert * Prozentsatz (como decimal)
    },
    {
        id: 'concept_3',
        type: 'multiple-choice',
        questionText: 'Si algo "aumenta en un 10%", ¿por qué factor debes multiplicar el valor original?',
        options: ['0.10', '0.90', '1.10', '10'],
        correctOptionIndex: 2 // 1 + 0.10 = 1.10
    },
    {
        id: 'concept_4',
        type: 'multiple-choice',
        questionText: 'Si algo "disminuye en un 25%", ¿por qué factor debes multiplicar el valor original?',
        options: ['0.25', '0.75', '1.25', '25'],
        correctOptionIndex: 1 // 1 - 0.25 = 0.75
    },
    {
        id: 'concept_5',
        type: 'multiple-choice',
        questionText: '¿Qué significa que un valor es el "Grundwert" (valor base)?',
        options: ['Es la parte porcentual calculada', 'Es el valor total o inicial (el 100%)', 'Es la tasa de porcentaje'],
        correctOptionIndex: 1
    },
    {
        id: 'concept_6',
        type: 'multiple-choice',
        questionText: 'Si el 85% de un número es 34.000, ¿cómo calcularías el número completo (Grundwert)?',
        options: ['34.000 * 0.85', '34.000 / 0.85', '34.000 - 0.85'],
        correctOptionIndex: 1 // Grundwert = Prozentwert / (Prozentsatz/100) => 34000 / 0.85
    },
    {
        id: 'sum_1',
        type: 'numeric',
        questionText: '¿Cuánto es 5 + 3?',
        correctAnswer: 8
    },
    {
        id: 'rest_1',
        type: 'numeric',
        questionText: '¿Cuánto es 10 - 4?',
        correctAnswer: 6
    },
    {
        id: 'problem_1',
        type: 'multiple-choice',
        questionText: 'Si tienes 3 manzanas y tu amigo te da 2 más, ¿cuántas manzanas tienes en total?',
        options: ['4 manzanas', '5 manzanas', '6 manzanas'],
        correctOptionIndex: 1 // Índice de la respuesta correcta en el array 'options'
    },
    {
        id: 'sum_2',
        type: 'numeric',
        questionText: '¿Cuánto es 7 + 2?',
        correctAnswer: 9
    },
    {
        id: 'problem_2',
        type: 'multiple-choice',
        questionText: 'Tienes 8 lápices y se te pierden 3. ¿Cuántos lápices te quedan?',
        options: ['4 lápices', '5 lápices', '6 lápices'],
        correctOptionIndex: 1
    },
    // ¡Añade aquí todas las preguntas que quieras!
    // Para preguntas numéricas: { id: '...', type: 'numeric', questionText: '¿...', correctAnswer: N }
    // Para problemas con opciones: { id: '...', type: 'multiple-choice', questionText: '¿...', options: ['Op1', 'Op2', 'Op3'], correctOptionIndex: N }
];

// --- 2. Variables y elementos del DOM ---
let currentQuestionIndex = -1; // -1 para indicar que aún no se ha cargado ninguna pregunta
let startTime;
let userHistory = JSON.parse(localStorage.getItem('mathPWAHistory')) || {}; // Cargar historial o crear uno nuevo

const questionTextElem = document.getElementById('question-text');
const numericAnswerInput = document.getElementById('numeric-answer');
const optionsContainer = document.getElementById('options-container');
const submitButton = document.getElementById('submit-answer');
const feedbackElem = document.getElementById('feedback');
const nextQuestionButton = document.getElementById('next-question');
const answerInputContainer = document.getElementById('answer-input-container');

// --- 3. Funciones de ayuda ---

function saveHistory() {
    localStorage.setItem('mathPWAHistory', JSON.stringify(userHistory));
}

function showQuestion(question) {
    questionTextElem.textContent = question.questionText;
    feedbackElem.textContent = ''; // Limpiar feedback anterior
    submitButton.style.display = 'block'; // Mostrar botón de comprobar
    nextQuestionButton.style.display = 'none'; // Ocultar botón de siguiente
    numericAnswerInput.value = ''; // Limpiar respuesta numérica

    // Reiniciar y mostrar el tipo de entrada correcto
    numericAnswerInput.style.display = 'none';
    optionsContainer.innerHTML = ''; // Limpiar opciones anteriores
    optionsContainer.style.display = 'none';

    if (question.type === 'numeric') {
        numericAnswerInput.style.display = 'block';
        numericAnswerInput.focus(); // Poner el foco para escribir
    } else if (question.type === 'multiple-choice') {
        optionsContainer.style.display = 'block';
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.classList.add('option-button');
            button.textContent = option;
            button.dataset.index = index; // Para saber qué opción es
            button.addEventListener('click', () => {
                // Eliminar 'selected' de todos y añadirlo al clicado
                document.querySelectorAll('.option-button').forEach(btn => btn.classList.remove('selected'));
                button.classList.add('selected');
            });
            optionsContainer.appendChild(button);
        });
    }
    startTime = Date.now(); // Registrar el tiempo de inicio
}

function recordAnswer(questionId, isCorrect, timeTaken) {
    if (!userHistory[questionId]) {
        userHistory[questionId] = { correctAttempts: 0, totalAttempts: 0, totalTime: 0, lastCorrectTime: 0 };
    }
    userHistory[questionId].totalAttempts++;
    userHistory[questionId].totalTime += timeTaken;

    if (isCorrect) {
        userHistory[questionId].correctAttempts++;
        userHistory[questionId].lastCorrectTime = timeTaken; // Guarda el tiempo del último acierto
    }
    saveHistory();
    console.log("Historial actualizado:", userHistory[questionId]); // Para depuración
}

// --- 4. Algoritmo de selección de la siguiente pregunta (Adaptación) ---
function getNextQuestion() {
    // Implementa aquí tu algoritmo para elegir la siguiente pregunta.
    // Este es un ejemplo simplificado:

    // 1. Prioriza preguntas con pocos aciertos o errores recientes
    let questionsToReview = allQuestions.filter(q => {
        const stats = userHistory[q.id];
        // Si no se ha intentado, o si el porcentaje de acierto es bajo (<75%), o si ha fallado en el último intento
        return !stats || (stats.totalAttempts > 0 && stats.correctAttempts / stats.totalAttempts < 0.75) || 
               (stats.totalAttempts > 0 && !stats.lastWasCorrect); // Si el último intento fue incorrecto
    });

    if (questionsToReview.length > 0) {
        // De las que necesitan repaso, elige una al azar
        const randomIndex = Math.floor(Math.random() * questionsToReview.length);
        const nextQ = questionsToReview[randomIndex];
        currentQuestionIndex = allQuestions.findIndex(q => q.id === nextQ.id); // Asegura que el índice global esté bien
        return nextQ;
    } else {
        // Si todo va bien, elige una pregunta al azar de todas las disponibles
        // Puedes añadir lógica para introducir nuevas preguntas o subir de nivel aquí.
        currentQuestionIndex = Math.floor(Math.random() * allQuestions.length);
        return allQuestions[currentQuestionIndex];
    }
}

// --- 5. Manejadores de eventos ---

submitButton.addEventListener('click', () => {
    const question = allQuestions[currentQuestionIndex];
    let isCorrect = false;
    let userAnswer;

    if (question.type === 'numeric') {
        userAnswer = parseInt(numericAnswerInput.value);
        isCorrect = (userAnswer === question.correctAnswer);
    } else if (question.type === 'multiple-choice') {
        const selectedOptionButton = document.querySelector('.option-button.selected');
        if (selectedOptionButton) {
            userAnswer = parseInt(selectedOptionButton.dataset.index);
            isCorrect = (userAnswer === question.correctOptionIndex);
        } else {
            feedbackElem.textContent = 'Por favor, selecciona una opción.';
            feedbackElem.className = 'incorrect';
            return; // No continuar si no hay selección
        }
    }

    const timeTaken = Date.now() - startTime; // Esta línea está en el lugar correcto ahora.
    recordAnswer(question.id, isCorrect, timeTaken); // Y esta también.

    if (isCorrect) {
        // ¡¡¡CAMBIO AQUÍ: Usar backticks (`) en lugar de comillas simples (')!!!
        feedbackElem.textContent = `¡Correcto! Tardaste ${timeTaken / 1000} segundos.`;
        feedbackElem.className = 'correct';
        // Marcar el último intento como correcto para el algoritmo
        userHistory[question.id].lastWasCorrect = true;
    } else {
        feedbackElem.textContent = 'Incorrecto. Inténtalo de nuevo o pasa a la siguiente.';
        feedbackElem.className = 'incorrect';
        // Marcar el último intento como incorrecto
        userHistory[question.id].lastWasCorrect = false;
    }

    submitButton.style.display = 'none'; // Ocultar botón de comprobar
    nextQuestionButton.style.display = 'block'; // Mostrar botón de siguiente
    saveHistory(); // Guardar el historial actualizado
});

nextQuestionButton.addEventListener('click', () => {
    showQuestion(getNextQuestion());
});
// --- 6. Inicio de la aplicación ---
// Asegurarse de que el DOM esté completamente cargado antes de inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    showQuestion(getNextQuestion());
});

// --- NUEVOS ELEMENTOS DEL DOM ---
const toggleHistoryButton = document.getElementById('toggle-history-button');
const historySection = document.getElementById('history-section');
const historyList = document.getElementById('history-list');

// --- NUEVA FUNCIÓN: Mostrar Historial ---
function displayHistory() {
    historyList.innerHTML = ''; // Limpiar lista anterior

    // Iterar sobre las preguntas en allQuestions para mostrar su historial
    allQuestions.forEach(q => {
        const stats = userHistory[q.id];

        if (stats && stats.totalAttempts > 0) {
            const historyItem = document.createElement('div');
            historyItem.classList.add('history-item');

            const accuracy = ((stats.correctAttempts / stats.totalAttempts) * 100).toFixed(0);
            const avgTime = (stats.totalTime / stats.totalAttempts / 1000).toFixed(1); // Tiempo promedio en segundos

            historyItem.innerHTML = `
                <p><strong>${q.questionText}</strong></p>
                <p>Intentos: ${stats.totalAttempts}</p>
                <p>Aciertos: ${stats.correctAttempts} (${accuracy}%)</p>
                <p>Tiempo promedio: ${avgTime} segundos</p>
            `;
            historyList.appendChild(historyItem);
        }
    });

    if (Object.keys(userHistory).length === 0) {
        historyList.innerHTML = '<p>Aún no hay historial de respuestas.</p>';
    }
}

// --- NUEVO: Manejar el botón de toggle de historial ---
toggleHistoryButton.addEventListener('click', () => {
    if (historySection.style.display === 'none') {
        // Mostrar historial
        historySection.style.display = 'block';
        toggleHistoryButton.textContent = 'Ocultar Historial';
        displayHistory(); // Cargar y mostrar los datos
        
        // Ocultar la sección de preguntas mientras se ve el historial
        questionTextElem.style.display = 'none';
        answerInputContainer.style.display = 'none';
        submitButton.style.display = 'none';
        feedbackElem.style.display = 'none';
        nextQuestionButton.style.display = 'none';

    } else {
        // Ocultar historial
        historySection.style.display = 'none';
        toggleHistoryButton.textContent = 'Ver Historial';

        // Mostrar la sección de preguntas de nuevo
        questionTextElem.style.display = 'block';
        // Volver a mostrar el contenedor de respuesta y el botón de enviar
        // Esto podría requerir lógica para mostrar la pregunta actual si la hubiera
        // Por simplicidad, volvemos a cargar la siguiente pregunta al salir del historial
        answerInputContainer.style.display = 'block';
        submitButton.style.display = 'block'; // Asumimos que se volverá a un estado de pregunta
        feedbackElem.style.display = 'block';
        nextQuestionButton.style.display = 'none'; // Se mostrará solo después de una respuesta
        
        // Cargar la siguiente pregunta cuando se oculta el historial para volver a la práctica
        showQuestion(allQuestions[currentQuestionIndex]); // O getNextQuestion() si quieres una nueva

        // Asegúrate de que los campos de entrada/opciones se muestren correctamente
        const currentQuestion = allQuestions[currentQuestionIndex];
        if (currentQuestion.type === 'numeric') {
            numericAnswerInput.style.display = 'block';
            optionsContainer.style.display = 'none';
        } else if (currentQuestion.type === 'multiple-choice') {
            numericAnswerInput.style.display = 'none';
            optionsContainer.style.display = 'block';
        }
    }
});


// --- Asegúrate de que el DOM esté completamente cargado antes de inicializar la aplicación ---
document.addEventListener('DOMContentLoaded', () => {
    showQuestion(getNextQuestion());
});