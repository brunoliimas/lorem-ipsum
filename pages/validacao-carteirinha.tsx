import React, { useState } from 'react';
import { Eye, Download, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export default function DocumentosDigitais() {
    const [studentData] = useState({
        nome: 'Bernardo Machado Faria',
        codigo: '2325558',
        cpf: '091.295.406-07',
        curso: 'Ciência da Computação',
        documento: 'Solicitação de Serviço: CARTEST - Carteira de Estudante',
        pdfUrl: '/assets/carteirinha-estudante.pdf' 
    });

    const handleVisualizarPDF = () => {
        // Abre o PDF em uma nova aba
        window.open(studentData.pdfUrl, '_blank');
    };

    const handleDownloadPDF = () => {
        // Cria um link temporário para fazer o download
        const link = document.createElement('a');
        link.href = studentData.pdfUrl;
        link.download = `${studentData.codigo}_${studentData.documento}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleVoltar = () => {
        // Tenta voltar para a página anterior
        if (window.history.length > 1) {
            window.history.back();
        } else {
            // Se não houver histórico, fecha a aba/janela
            window.close();
        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            {/* Header */}
            <div className="py-8 text-center">
                <h1 className="text-3xl font-bold tracking-wider">DOCUMENTOS DIGITAIS</h1>
            </div>

            {/* Content Card */}
            <div className="flex-1 flex items-start justify-center px-4 pb-8">
                <div className="bg-white text-black rounded-lg shadow-xl max-w-2xl w-full p-8">
                    {/* Logo Section */}
                    <div className="mb-8 flex items-center justify-center gap-4">
                        <Image
                            src="/assets/descomplica.png"
                            alt="Logo UTFPR"
                            width={370}
                            height={137}
                        />
                    </div>

                    {/* Student Information */}
                    <div className="space-y-4 mb-6">
                        <div>
                            <span className="font-bold">Nome: </span>
                            <span>{studentData.nome}</span>
                        </div>

                        <div>
                            <span className="font-bold">CPF: </span>
                            <span>{studentData.cpf}</span>
                        </div>
                        <div>
                            <span className="font-bold">Código/Matrícula: </span>
                            <span>{studentData.codigo}</span>
                        </div>

                        <div>
                            <span className="font-bold">Curso: </span>
                            <span>{studentData.curso}</span>
                        </div>

                        <div>
                            <span className="font-bold">Nome do Documento: </span>
                            <span>{studentData.documento}</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                        {/* Visualizar PDF Button */}
                        <button
                            onClick={handleVisualizarPDF}
                            className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                            <Eye size={20} />
                            Visualizar PDF
                        </button>

                        {/* Download PDF Button */}
                        <button
                            onClick={handleDownloadPDF}
                            className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                            <Download size={20} />
                            Download PDF
                        </button>

                        {/* Voltar Button */}
                        <button
                            onClick={handleVoltar}
                            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                            <ArrowLeft size={20} />
                            Voltar
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Information */}
            <div className="px-6 py-6 text-center text-sm text-gray-300 max-w-4xl mx-auto">
                <p>
                    Este ambiente permite a informação ao público da veracidade dos Documentos
                    gerados pela Instituição de Ensino por meio Digital. Para a consulta deverá
                    ser utilizado o código de validação de acesso informado no documento gerado.
                </p>
            </div>
        </div>
    );
}
