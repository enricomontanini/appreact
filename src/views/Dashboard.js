import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

import {ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line} from 'recharts'



const Dashboard = () => {
    /*const data = [
        {
            time: 1672578751,
            punti: 20
        },
        {
            time: 1673578751,
            punti: 23
        },
        {
            time: 1674578751,
            punti: 25
        }
    ];*/

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3009/punti?squadra=1')
            .then(dati => dati.json())
            .then(dati => {
                const serieDiDati = []

                setData(dati)
            })
    }, [])


    return (
        <LineChart width={800} height={400} data={data}>
            <Line type="linear" dataKey="punti" stroke="#8884d8" />
            <CartesianGrid />
            <Tooltip />
            <XAxis />
            <YAxis />
            <Legend />
        </LineChart>
    );
}

export default Dashboard;