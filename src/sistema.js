import { medicos, pacientes } from "./pessoas.js"


function adicaoDeMedicos (){
    // medicos.list.push("joao");
    // medicos.list.push(" pedro");
    // medicos.list.push(" isaque");

    const z = Math.floor(Math.random() * 3 + 1);
    if (z === 1){
        medicos.list.push("joao");
    }else if (z === 2){
        medicos.list.push(" pedro");
    }else {
        medicos.list.push(" isaque");
    }
}

function conexaoDePacientesComMedicos ( m, p ){
    if (m.disponivel == true){
        console.log (`${p.nome.nome1}, ${p.nome.nome2}, ${p.nome.nome3}  estão sendo agendado com um dos médicos disponiveis: ${m.list}\n`);
    }else if (m.disponivel === false){
        console.log ("Os médico estão indisponiveis por agora");
    }
}

function cancelar(){
    //conclue se os pacientes cancelaram a consulta ou não
    if (Object.values(pacientes.cancelar).some(v => v === true)) {
        if(pacientes.cancelar.nome1 === true){
            console.log (`${pacientes.nome.nome1} cancelou a consulta`)
        }else if (pacientes.cancelar.nome2 === true){
            console.log (`${pacientes.nome.nome2} cancelou a consulta`)
        }else if (pacientes.cancelar.nome3 === true){
            console.log (`${pacientes.nome.nome3} cancelou a consulta`)
        }else {
            //caso os pacientes não tenham cancelado, chega-se nessa conclusão
            if (pacientes.cancelar.nome1 === false){
                console.log (`${pacientes.nome.nome1} ainda esta agendado `)
            }else if (pacientes.cancelar.nome2 === false){
                console.log (`${pacientes.nome.nome2} ainda esta agendado `)
            }else {
                console.log (`${pacientes.nome.nome3} ainda esta agendado `)
            }
        }
    }

}

function resultado(p){
    console.log ("====== resultado ======")
    cancelar()
    console.log ("Os pacientes seram devidamente atendidos da forma correta")
    console.log (`${p.nome.nome1}, ${p.nome.nome2}, ${p.nome.nome3}. Obrigado pelo seus serviços❤`)
}

function main (){
    adicaoDeMedicos()
    conexaoDePacientesComMedicos(medicos, pacientes)
    resultado(pacientes)
}
main()