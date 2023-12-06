import Aside from "../components/Aside"
import NavBar from "../components/NavBar"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="max-w-[1024px] m-auto">
            <NavBar />
            <div className="flex">
                <Aside />
                <div className="p-12 w-screen">
                {children}
                </div>
                

            </div>

        </div>


    )
}