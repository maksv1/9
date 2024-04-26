document.addEventListener("DOMContentLoaded", function() {
    const carForm = document.getElementById("car-form");
    const carList = document.getElementById("car-list");

    // Слушатель отправки формы
    carForm.addEventListener("submit", function(event) {
        event.preventDefault();
        addCar();
    });

    // Функция добавления автомобиля
    function addCar() {
        const modelInput = document.getElementById("model");
        const colorInput = document.getElementById("color");
        const yearInput = document.getElementById("year");
        const imageInput = document.getElementById("image");

        const model = modelInput.value;
        const color = colorInput.value;
        const year = yearInput.value;
        const image = imageInput.files[0]; // Получаем выбранный файл

        // Валидация данных
        if (model === "" || color === "" || year === "" || isNaN(year) || !image) {
            alert("Пожалуйста, заполните все поля корректно.");
            return;
        }

        // Создание нового элемента списка автомобилей
        const carItem = document.createElement("div");
        carItem.classList.add("car-item");
        carItem.innerHTML = `
            <strong>Модель:</strong> ${model} <br>
            <strong>Цвет:</strong> ${color} <br>
            <strong>Год выпуска:</strong> ${year} <br>
            <img src="${URL.createObjectURL(image)}" alt="Изображение автомобиля"> <br>
            <button class="delete-btn">Удалить</button>
        `;

        // Слушатель удаления автомобиля
        carItem.querySelector(".delete-btn").addEventListener("click", function() {
            carList.removeChild(carItem);
        });

        carList.appendChild(carItem);
    }
});
