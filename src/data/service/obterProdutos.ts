"use server";
import { esperar } from "./utils";
import produtos from "../constants/produtos";

export default async function obterProdutos() {
  await esperar(1000);
  return produtos;
}
