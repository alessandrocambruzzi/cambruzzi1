
import { sql } from "@vercel/postgres";
import { useSearchParams } from "next/navigation";

export const revalidate =0

export default function NewCourse({
    searchParams,
  }: {
    searchParams?: {
      url?: string;  
    };
  }){
    
    const urlImage = searchParams?.url || '';

    async function saveCourse(formData: FormData){
        "use server"
        const nome = formData.get("nome") as string;
        const email = formData.get("email") as string;
        await sql`INSERT INTO coordenador (nome, email) VALUES(${nome}, ${email})`
        console.log("Acessou a função")
    }
    return (
        <div>
            <h1 className="text-white text-center text-4xl">Cadastrar Coordenador</h1>
            <form>
                <input type="text" name="nome" placeholder="Nome do Coordenador"/><br/><br/>
                <input type="text" name="email" placeholder="Email do coordenador"/> <br/><br/>
                <button formAction={saveCourse} className="text-black">Salvar</button>
                <br/>
            </form>
        </div>

    )
}