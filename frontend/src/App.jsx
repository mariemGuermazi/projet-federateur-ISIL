import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PlusCircle, Trash2, CheckCircle, Clock, AlertCircle } from 'lucide-react';

function App() {
    const [projects, setProjects] = useState([]);
    const [newName, setNewName] = useState('');
    const [newDesc, setNewDesc] = useState('');

    const fetchProjects = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/projects');
            setProjects(response.data);
        } catch (error) {
            console.error("Fetch failed", error);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/projects', {
                name: newName,
                description: newDesc,
                status: 'To Do'
            });
            setNewName('');
            setNewDesc('');
            fetchProjects();
        } catch (error) {
            console.error("Add failed", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/projects/${id}`);
            fetchProjects();
        } catch (error) {
            console.error("Delete failed", error);
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Done': return <CheckCircle className="text-green" />;
            case 'In Progress': return <Clock className="text-blue" />;
            default: return <AlertCircle className="text-orange" />;
        }
    };

    return (
        <div className="container">
            <header>
                <h1>Scrum Project Portfolio</h1>
                <p>Software Engineering Prototype • Sprint 1 Increment</p>
            </header>

            <div className="add-task-form">
                <form onSubmit={handleAdd}>
                    <input
                        type="text"
                        placeholder="Project Name"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Short Description"
                        value={newDesc}
                        onChange={(e) => setNewDesc(e.target.value)}
                    />
                    <button type="submit"><PlusCircle size={20} /> Add Project</button>
                </form>
            </div>

            <div className="project-grid">
                {projects.map(p => (
                    <div key={p.id} className="project-card">
                        <div className="card-header">
                            <h3>{p.name}</h3>
                            {getStatusIcon(p.status)}
                        </div>
                        <p>{p.description}</p>
                        <div className="card-footer">
                            <span className="status-tag">{p.status}</span>
                            <button onClick={() => handleDelete(p.id)} className="delete-btn">
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
