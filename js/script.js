
window.onload =
    function () {

        var test = {
            createTest: function () {
                var main = document.createElement('div');
                main.className = "main";
                main.style.display = "block";
                main.style.width = "400px";
                main.style.height = "450px";
                main.style.margin = "0 auto";
                main.style.textAlign = "center";
                document.body.appendChild(main);

                var p = document.createElement("P");
                p.innerHTML = "Тест по программированию";
                main.appendChild(p);

                createQuestion("1. Вопрос №1", 3);
                createQuestion("2. Вопрос №2", 3);
                createQuestion("3. Вопрос №3", 3);

                function createQuestion(nameQuestion, number) {
                    var qw = document.createElement('div');
                    qw.className = "question";
                    qw.style.float = "left";
                    main.appendChild(qw);

                    var p = document.createElement("P");
                    p.innerHTML = nameQuestion;
                    qw.appendChild(p);

                    var ul = document.createElement("UL");
                    ul.style.listStyle = "none";
                    ul.style.flat = "left";
                    ul.style.paddingLeft = "100px";
                    qw.appendChild(ul);

                    for (var i = 1; i <= number; i++) {
                        createNewLi("qw1", i, " Вариант ответа №" + i);
                    }

                    function createNewLi(name, value, textLabel) {
                        var li = document.createElement("LI");
                        ul.appendChild(li);

                        var input = document.createElement("INPUT");
                        input.type = "checkbox";
                        input.name = name;
                        input.value = value;
                        li.appendChild(input);

                        var label = document.createElement("label");
                        label.innerHTML = textLabel;
                        li.appendChild(label);
                    }
                }
                var clearDiv = document.createElement('div');
                clearDiv.style.clear = "both";
                main.appendChild(clearDiv);

                var pInput = document.createElement("p");
                main.appendChild(pInput);

                var button = document.createElement("INPUT");
                button.type = "submit";
                button.value = "Проверить мои результаты";
                pInput.appendChild(button);
            }
        };
        test.createTest();
    }





