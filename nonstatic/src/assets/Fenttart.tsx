import { useEffect, useState } from "react";

import { Root3 } from "./Fentin";



export function Fenlist(){
    let [fent,setfent]=useState<Root3[]>([])
    useEffect(()=>{
        async function load() {
            const response = await fetch('/Fent.json')
            const természet: Root3[] = await response.json();
            setfent(természet);
          }
          load()
    },[])
    return<>
        <section className="mb-5">
            <h2>Teendők a fenntarthatóság érdekében</h2>
            <ol className="list-group list-group-numbered">
                {fent.map(element=><li className="list-group-item">{element}</li>)}
            </ol>
        </section>


    </>
}