        let resultado = prompt("Resuelve la siguiente ecuación --> 5x + 9 = 24 <-- ¿Cuál es el valor de x?")
        
        let resultErroneo = (parseInt(resultado))

        if (resultado == "3") {
            alert("Respuesta correcta 🤓")
            document.write("Eres un genio matemático");
        }

        else if (resultado == "") {
            alert("No ingresaste ningún resultado 😱")
            let reintento = prompt("Intentalo de nuevo --> 5x + 9 = 24 <-- ¿Cuál es el valor de x?")
            if (reintento == "3") {
                alert("Ahora si! Respuesta correcta 🤓");
                document.write("Eres un genio matemático");
            }
            else {
                alert("Lo siento, has fallado de nuevo 😭")
                document.write("La próxima sale!")
            }
        }

        else {
            alert("Chequea de nuevo tu cálculo! La respuesta no es " + resultErroneo + "🧐")
            let reintento = prompt("Intentalo de nuevo --> 5x + 9 = 24 <-- ¿Cuál es el valor de x?")
            if (reintento == "3") {
                alert("Ahora si! Respuesta correcta 🤓");
                document.write("Eres un genio matemático");
            }
            else {
                alert("Lo siento, has fallado de nuevo 😭")
                document.write("La próxima sale!")
            }
        }
