import React, {useState, useEffect} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const skillsData = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'Python', level: 90 },
    { name: 'Flask', level: 85}
]
function Skills() {

    return (
    <>
            <div style={{ width: '100%', height: 400 }}>
            <h1>My Skills</h1>
            <ResponsiveContainer>
                <BarChart data={skillsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="1 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="level" fill="url(#Gradient)" />
                    <defs>
                        <linearGradient id="Gradient">
                            <stop offset="0%" stopColor="#8884d8" />
                            <stop offset="50%" stopColor="#82ca9d" />
                        </linearGradient>
                    </defs>
                </BarChart>
            </ResponsiveContainer>
        </div>

    </>
    );
};
  


export default Skills;