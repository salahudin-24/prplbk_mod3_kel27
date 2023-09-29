import { useEffect } from "react";
import"./Card.css";
// Card.jsx
export default function Card(props) {
    useEffect(
        () => {
            alert("Kartu nama ditampilkan");

       
}, []);
return (
    <div className="card">
        <div className="container">
            <h4>{props.nama}</h4>
            <p>Kelompok {props.kelompok}</p>
        </div>
    </div>
);
}