import { useEffect, useState } from "react"
import { Root2 } from "./ts"

export function Table(){
    let [animel,setanimel]=useState<Root2[]>([])
    useEffect(()=>{
        async function load() {
            const response = await fetch('/Table.json')
            const animal: Root2[] = await response.json();
            setanimel(animal);
          }
          load()
    },[])
    return<>
    <div className="table-responsive">
            <section className="mb-5">
                <h2>Veszélyeztetett állatfajok</h2>
                <table className="table table-bordered">
                    <thead className="table-success">
                        <tr>
                            <th>#</th>
                            <th>Állatfaj</th>
                            <th>Élőhely</th>
                            <th>Veszélyeztetési fok</th>
                        </tr>
                    </thead>
                    <tbody>
                        {animel.map(element=><tr>
                            <td>{element.id}</td>
                            <td>{element.name}</td>
                            <td>{element.habitat}</td>
                            <td>{element.conservation_status}</td>
                        </tr>)}
                    </tbody>
                </table>
            </section>
        </div>

    </>
}