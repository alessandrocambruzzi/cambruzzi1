import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const revalidate =0

export default async function ListCourse() {
    async function deleteCourse(formData: FormData){
        "use server"
        const id = formData.get("id") as string;
        await sql`DELETE from coordenador where id=${id}`
        revalidatePath("/admin/course")
    }
    const { rows } = await sql`SELECT * from coordenador`;
    return (
        <div>
            <h1 className="text-center text-white">Lista de Coordenadores</h1>

            <table>
                <thead>
                    <tr> <td>Nome do Coordenador</td> <td>Email do coordenador</td></tr>
                </thead>
                <tbody>
                    {
                        rows.map((coordenador) => {
                            return (
                                <tr key={coordenador.id}><td>{coordenador.nome}</td> <td>{coordenador.email}</td> 
                                <td>
                                    <form >
                                     <input type="text" hidden name="id" value={coordenador.id}/>   
                                    <button formAction={deleteCourse}>Excluir</button>
                                    </form>
                                
                                </td> 
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    )
}