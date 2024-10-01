import { Fenlist } from "./Fenttart";
import { List } from "./List";
import { Szoveg } from "./Szöveg";
import { Table } from "./Table";

export function Main(){
    return <>
            <main className="container my-4">
                <Table></Table>
                <List></List>
                <Fenlist></Fenlist>
                <Szoveg></Szoveg>
            </main>

    </>
}