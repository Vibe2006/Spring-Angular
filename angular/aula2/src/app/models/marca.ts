export class Marca {

    id?: number;
    nome!: string;
    cnpj!: string;

    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }

}