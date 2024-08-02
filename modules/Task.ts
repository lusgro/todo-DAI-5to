export class Task {
    id: string;
    texto: string;
    fechaCreado: string;
    fechaTachado: null | string;
    checked: boolean;
    fastest: boolean;

    public constructor(Texto: string) {
        this.id = new Date().getTime().toString();
        this.texto = Texto;
        this.fechaCreado = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
        this.fechaTachado = null;
        this.checked = false;
        this.fastest = false;
    }
}