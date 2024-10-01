import { useEffect, useState } from "react";
import { Root } from "./list1";



export function List(){
    let [kornyezet,setkornyezet]=useState<Root[]>([])
    useEffect(()=>{
        async function load() {
            const response = await fetch('/lIST1.json')
            const természet: Root[] = await response.json();
            setkornyezet(természet);
          }
          load()
    },[])
    return<>
         <section className="mb-5">
            <h2>A környezet védelmének módjai</h2>
            <ul className="list-group">
                {kornyezet.map(element=><li className="list-group-item">{element}</li>)}
            </ul>
        </section>

    </>
}