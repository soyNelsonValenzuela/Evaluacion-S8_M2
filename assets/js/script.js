let clientes = [
    {
        id: '1',
        nombre: 'Pedro',
        clave: '123',
        saldo: 200000
    },
    {
        id: '2',
        nombre: 'Juan',
        clave: '456',
        saldo: 500000
    },
    {
        id: '3',
        nombre: 'Diego',
        clave: '789',
        saldo: 150000
    }
]
function verificacion() {
    alert('Bienvenido a Banca en linea')
    let id = prompt('Ingrese su ID')
    let idEncontrado = false
    for (let i = 0; i < clientes.length; i++) {
        if (id === clientes[i].id) {
            let claveIngresada = prompt('Ingrese su clave')
            if (clientes[i].clave === claveIngresada) {
                idEncontrado = true
            } else {
                alert('Contraseña incorrecta')
                verificacion()
            }
        } else {
            idEncontrado = false;
        }
        if (idEncontrado == true) {
            alert(`Bienvenido ${clientes[i].nombre}`)
            menuPrincipal()
            return
        }
        function menuPrincipal() {
            var menu = prompt('\n1.- Ver Saldo \n2.- Realizar Giro \n3.- Realizar Deposito \n4.- Salir')
            if (menu == 1) {
                alert("su saldo es de " + clientes[i].saldo)
                menuPrincipal()
            } else if (menu == 2) {
                let giro = parseInt(prompt(`Su saldo es ${clientes[i].saldo}\nIngrese monto que desea girar`))
                if (giro <= clientes[i].saldo) {
                    clientes[i].saldo -= giro;
                    alert("Giro realizado. Su nuevo saldo es de " + clientes[i].saldo);
                    menuPrincipal()
                } else {
                    alert("No tiene saldo suficiente")
                    menuPrincipal()
                }
            } else if (menu == 3) {
                let deposito = parseInt(prompt(`Su saldo es ${clientes[i].saldo}\nIngrese monto que desea depositar`))
                clientes[i].saldo += deposito;
                alert("Deposito realizado. Su nuevo saldo es de " + clientes[i].saldo);
                menuPrincipal()
            } else if (menu == 4) {
                console.log('opcion 4');
            } else {
                alert('Ingrese una opcion valida')
                menuPrincipal()
            }
        }
    }
}





