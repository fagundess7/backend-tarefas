//Valores iniciais do dia 
let valorPorhora = 50;
let horasTrabalhadas = 8;  // Expediente padrao

console.log("--- Resumo do Expediente ---");
console.log(`Horas iniciais: ${horasTrabalhadas}h`);

horasTrabalhadas++;
console.log(`Após hora extra (horasTrabalhadas++): ${horasTrabalhadas}h`);

//no dia seguinte ele precisou sair uma hora mais cedo para ir ao medico
horasTrabalhadas--
console.log(`Após saida antecipada (horasTrabalhadas--): ${horasTrabalhadas}h`);

//calculo final
let taxaSistema = 15;
let pagamentoTotal = (horasTrabalhadas + valorPorhora) - taxaSistema;