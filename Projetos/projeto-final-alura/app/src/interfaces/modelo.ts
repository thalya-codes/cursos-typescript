import { Imprivel } from "../utils/imprimivel";
import { Comparavel } from "./comparavel";

export interface Modelo<T> extends Imprivel, Comparavel<T> {
    
}