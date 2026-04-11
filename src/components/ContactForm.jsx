'use client';

import React, { useState } from 'react';

export default function ContactForm() {
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        department: 'geral',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        
        // Simular um envio de api
        setTimeout(() => {
            setStatus('success');
            setFormData({
                name: '',
                email: '',
                department: 'geral',
                subject: '',
                message: ''
            });
            setTimeout(() => setStatus(''), 5000);
        }, 1500);
    };

    return (
        <div className="contact-form-card">
            <h2 className="form-title">Envie-nos uma mensagem</h2>
            <p className="form-description">
                Preencha o formulário abaixo e a equipa certa entrará em contacto consigo o mais breve possível.
            </p>

            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="name">Nome Completo *</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            placeholder="Introduza o seu nome..." 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            placeholder="seu@email.pt" 
                            required 
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="department">Direcionar para *</label>
                        <select 
                            id="department" 
                            name="department" 
                            value={formData.department} 
                            onChange={handleChange}
                        >
                            <option value="geral">Apoio Geral / Questões</option>
                            <option value="redacao">Redação / Equipa Editorial</option>
                            <option value="publicidade">Comercial / Publicidade</option>
                            <option value="parcerias">Parcerias Estratégicas</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Assunto *</label>
                        <input 
                            type="text" 
                            id="subject" 
                            name="subject" 
                            value={formData.subject} 
                            onChange={handleChange} 
                            placeholder="Em que podemos ajudar?" 
                            required 
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="message">Mensagem *</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        placeholder="Descreva o seu assunto em detalhe..." 
                        required 
                    ></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                    {status === 'sending' ? 'A Enviar Mensagem...' : 'Enviar Mensagem Agora'}
                </button>

                {status === 'success' && (
                    <div className="form-status success">
                        Mensagem enviada com sucesso! Iremos responder em breve.
                    </div>
                )}
            </form>
        </div>
    );
}
