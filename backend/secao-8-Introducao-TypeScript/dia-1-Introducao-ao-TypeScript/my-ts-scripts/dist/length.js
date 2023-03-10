"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
const readline_sync_1 = __importDefault(require("readline-sync"));
function convertLength(value, fromUnit, toUnit) {
    const fromIndex = units.indexOf(fromUnit); // pegamos o index da unidade base no array
    const toIndex = units.indexOf(toUnit); // pegamos o index da unidade para a conversão
    const exponent = toIndex - fromIndex; // calculamos o expoente a partir da diferença dos index
    return value * Math.pow(10, exponent);
}
// console.log(convertLength(255, 'km', 'hm'))
// funcao interativa com o usuário, que informa os valores ao serem requisitados na tela
function exec() {
    const value = readline_sync_1.default.questionFloat('Digite o valor a ser convertido: \n');
    const fromUnitChoiceIndex = readline_sync_1.default.keyInSelect(units, 'Escolha um número para a unidade base:');
    const toUnitChoiceIndex = readline_sync_1.default.keyInSelect(units, 'Escolha um número para a conversão:');
    const toUnitChoice = units[toUnitChoiceIndex];
    const fromUnitChoice = units[fromUnitChoiceIndex];
    if (!fromUnitChoice || !toUnitChoice) {
        console.log(`Função cancelada`);
        return 0;
    }
    const result = convertLength(value, fromUnitChoice, toUnitChoice);
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
    console.log(message);
}
exec();
