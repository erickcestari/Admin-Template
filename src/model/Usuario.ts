export default interface Usuario {
    uid: string;
    email: string | null;
    nome: string | null;
    token: string;
    provedor: string | undefined;
    imagemUrl: string | null;
}