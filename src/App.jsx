import React, { useState, useEffect } from 'react';

// --- Base64 File Placeholders ---
// Replace these empty strings with your actual Base64 encoded file data.
const brdFileBase64 = ""; // For "Create Business Requirements Document"
const fitGapFileBase64 = ""; // For "Create Fit-Gap Analysis"
// This is the main one for the demo
const testCaseFileBase64 = "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";
const trainingPptBase64 = ""; // For "Generate a PPT for training"

// --- Preview Data ---
const previewData = [
    ["T1", "PUR.0001:Supplier Registration", "Validate supplier registration Process", "Test the supplier registration end-to-end process", "Successful supplier registration with approval notification sent to the supplier.", "Initiate supplier registration - FILL required details - SUBMIT for approval - APPROVE the request - VERIFY supplier creation and notification sent."],
    ["T2", "PUR.0002:Blanket Purchase Agreement", "Validate BPA Creation", "Test the creation and approval of a Blanket Purchase Agreement", "BPA is created successfully and communicated to the supplier.", "Navigate to Agreements - CREATE a new BPA - FILL in header and line details - SUBMIT for approval - APPROVE the BPA - VERIFY status and communication."],
    ["T3", "PUR.0003:Purchase Order Creation", "Validate PO creation from Requisition", "Test the automated creation of a Purchase Order from an approved requisition.", "PO is created automatically and matches requisition details.", "CREATE and approve a requisition - RUN the 'Create Purchase Orders' process - FIND the generated PO - VERIFY details against the requisition."],
    ["T4", "PUR.0004:Requisition to receipt", "End-to-end P2P cycle", "Test the complete Procure-to-Pay cycle from requisition to receipt and payment.", "All steps are completed successfully, and the invoice is paid.", "CREATE requisition - APPROVE requisition - CREATE PO - APPROVE PO - CREATE receipt - CREATE invoice - VALIDATE and PAY invoice."],
    ["T5", "PUR.0005:Return to supplier", "Validate return to supplier process", "Test the process of returning goods to a supplier.", "Return transaction is processed correctly, and debit memo is generated.", "CREATE a return order against a PO receipt - SHIP the items back to the supplier - VERIFY inventory transaction - VERIFY debit memo creation in AP."]
];

const thinkingSteps = [
    "Initializing AI agent...",
    "Parsing document structure...",
    "Identifying key entities and requirements...",
    "Cross-referencing with Oracle Fusion modules...",
    "Analyzing business process flows...",
    "Mapping requirements to testable actions...",
    "Generating scenario descriptions...",
    "Defining expected outcomes...",
    "Compiling test steps...",
    "Finalizing document...",
];

// --- Helper Components ---

const Logo = ({ className }) => (
    <svg className={className} viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="36" y="24" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#333">Xplora</text>
        <path d="M4 28L16 4L28 28" stroke="#38dece" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const PlaceholderLogo = ({ className }) => (
    <div className={`bg-gray-200 rounded-md flex items-center justify-center ${className}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
        </svg>
    </div>
);

const ThinkingAnimation = ({ steps, durationPerStep }) => {
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStep(prev => (prev + 1) % steps.length);
        }, durationPerStep);
        return () => clearInterval(interval);
    }, [steps, durationPerStep]);

    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-t-[#38dece] rounded-full animate-spin"></div>
            </div>
            <p className="text-gray-600 text-lg text-center transition-all duration-300 w-80">{steps[currentStep]}</p>
        </div>
    );
};


const CheckCircleIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ArrowRightIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
);

const UploadIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
);

const DownloadIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

// --- Main Components ---

const Header = ({ onLogoClick }) => (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div className="flex-shrink-0">
                    <Logo className="h-8 w-auto cursor-pointer" onClick={onLogoClick} />
                </div>
                <div className="flex-shrink-0">
                    <img src="/calfus-logo.svg" alt="Calfus Logo" className="h-8 object-contain" />
                </div>
            </div>
        </div>
    </header>
);

const FeatureCard = ({ title, description, enabled, onClick, isWorking }) => (
    <div
        onClick={enabled ? onClick : null}
        className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-1 ${enabled ? 'cursor-pointer hover:shadow-lg' : 'opacity-60'}`}
    >
        <div className="p-6">
            <div className="flex justify-between items-start">
                <div className="tracking-wide text-sm text-gray-800 font-semibold">{title}</div>
                {!enabled && (
                    <span className="inline-block bg-yellow-200 text-yellow-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">WIP</span>
                )}
            </div>
            <p className="mt-2 text-gray-500 text-sm">{description}</p>
            <div className="mt-4">
                <button
                    onClick={enabled ? onClick : null}
                    disabled={!enabled}
                    className={`w-full text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center ${enabled ? 'bg-[#38dece] text-white hover:bg-[#2dbab0]' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                >
                    {isWorking ? 'Start' : 'View Process'} <ArrowRightIcon className="ml-2 h-4 w-4" />
                </button>
            </div>
        </div>
    </div>
);


const HomePage = ({ onSelectFeature }) => {
    const features = [
        { title: "Create Business Requirements Document", description: "Generate a BRD from raw data like notes, transcripts, or other files.", enabled: false, isWorking: false },
        { title: "Create Fit-Gap Analysis", description: "Analyze a BRD against Oracle ERP Fusion functionalities to identify gaps.", enabled: false, isWorking: false },
        { title: "Generate Test Case Scenarios", description: "Create comprehensive test case scenarios from a BRD or Fit-Gap analysis.", enabled: true, isWorking: true },
        { title: "Generate Training PPT", description: "Produce a PowerPoint training deck based on test case scenario documents.", enabled: false, isWorking: false },
    ];

    return (
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Welcome to Xplora</h1>
                <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
                    Your AI-powered agent for streamlining Oracle ERP Fusion implementation tasks.
                </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} onClick={() => onSelectFeature(feature)} />
                ))}
            </div>
        </div>
    );
};

const FeaturePage = ({ feature, onBack }) => {
    const [step, setStep] = useState(1); // 1: Upload, 2: Verifying, 3: Generating, 4: Complete
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const [previewRows, setPreviewRows] = useState([]);

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
            setFileName(e.target.files[0].name);
        }
    };

    const handleVerify = () => {
        setStep(2);
        setTimeout(() => {
            setStep(3); // Auto-advance to next step on success
        }, 4000); // Simulate verification time
    };
    
    const handleGenerate = () => {
        setStep(4);
        setPreviewRows([]);

        const interval = setInterval(() => {
            setPreviewRows(prev => {
                if (prev.length < previewData.length) {
                    return [...prev, previewData[prev.length]];
                } else {
                    clearInterval(interval);
                    return prev;
                }
            });
        }, 800); // 0.8 second per row
        
        setTimeout(() => {
            setStep(5);
        }, previewData.length * 800 + 1000);
    };

    const downloadFile = (base64, filename, mimeType) => {
        if (!base64) {
            alert("File content is not available for download.");
            return;
        }
        const link = document.createElement('a');
        link.href = `data:${mimeType};base64,${base64}`;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleDownload = () => {
        let base64, filename, mimeType;
        switch(feature.title) {
            case "Generate Test Case Scenarios":
                base64 = testCaseFileBase64;
                filename = "Generated_Test_Cases.csv";
                mimeType = "text/csv";
                break;
            // Add other cases here if needed
            default:
                return;
        }
        downloadFile(base64, filename, mimeType);
    };

    const getInputPrompt = () => {
        switch(feature.title) {
            case "Create Business Requirements Document": return "Upload raw notes, transcripts (txt, csv, xlsx)";
            case "Create Fit-Gap Analysis": return "Upload Business Requirements Document (BRD)";
            case "Generate Test Case Scenarios": return "Upload Business Requirements Document (BRD)";
            case "Generate Training PPT": return "Upload Test Case Scenarios Document";
            default: return "Upload a file";
        }
    };

    const renderStep = () => {
        switch (step) {
            case 1: // Upload
                return (
                    <div className="w-full max-w-2xl text-center animate-fade-in">
                        <h2 className="text-3xl font-bold text-gray-800">Upload Your Document</h2>
                        <p className="mt-2 text-gray-600">{getInputPrompt()}</p>
                        <label htmlFor="file-upload" className="mt-8 relative cursor-pointer bg-white rounded-xl font-medium text-[#38dece] hover:text-[#2dbab0]">
                            <div className="w-full flex flex-col justify-center items-center px-6 py-16 border-2 border-gray-300 border-dashed rounded-xl transition-colors hover:border-[#38dece]">
                                <UploadIcon className="mx-auto h-16 w-16 text-gray-400" />
                                <span className="mt-4 text-lg text-gray-700">{fileName || "Click to upload a file"}</span>
                                <p className="text-sm text-gray-500">XLSX, CSV, TXT, DOCX</p>
                            </div>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} />
                        </label>
                        <button onClick={handleVerify} disabled={!file} className="mt-8 w-full max-w-xs mx-auto bg-[#38dece] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#2dbab0] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed transform hover:scale-105">
                            Verify Document
                        </button>
                    </div>
                );
            case 2: // Verifying
                return (
                    <div className="w-full max-w-2xl text-center animate-fade-in">
                        <h2 className="text-3xl font-bold text-gray-800">Verifying Document</h2>
                        <p className="mt-2 text-gray-600">Xplora is analyzing your file to ensure it's ready for processing.</p>
                        <div className="mt-12">
                            <ThinkingAnimation steps={["Reading file...", "Checking format...", "Validating content...", "Verification complete!"]} durationPerStep={1000} />
                        </div>
                    </div>
                );
            case 3: // Verified, ready to generate
                return (
                    <div className="w-full max-w-2xl text-center animate-fade-in">
                        <CheckCircleIcon className="w-24 h-24 text-green-500 mx-auto" />
                        <h2 className="mt-6 text-3xl font-bold text-gray-800">Verification Successful!</h2>
                        <p className="mt-2 text-gray-600">Your document is compatible and ready for the next step.</p>
                        <button onClick={handleGenerate} className="mt-8 w-full max-w-xs mx-auto bg-[#38dece] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#2dbab0] transition-colors transform hover:scale-105">
                            Generate Test Cases
                        </button>
                    </div>
                );
            case 4: // Generating
                return (
                    <div className="w-full max-w-6xl text-center animate-fade-in">
                         <h2 className="text-3xl font-bold text-gray-800">Generating Test Cases</h2>
                         <p className="mt-2 text-gray-600">Xplora is now creating the test scenarios based on your document.</p>
                         <div className="mt-8 flex flex-col lg:flex-row items-center justify-center gap-12">
                            <ThinkingAnimation steps={thinkingSteps} durationPerStep={1000} />
                            <div className="w-full lg:w-2/3 mt-8 lg:mt-0">
                                <h4 className="font-semibold text-gray-700 mb-2 text-left">Live Preview:</h4>
                                <div className="border border-gray-200 rounded-lg bg-white shadow-md overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>{["SN", "Business Process", "Test Scenario"].map(h => <th key={h} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{h}</th>)}</tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {previewRows.map((row, rowIndex) => (
                                                <tr key={rowIndex} className="animate-table-row-in">
                                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">{row[0]}</td>
                                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">{row[1]}</td>
                                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">{row[2]}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                         </div>
                    </div>
                );
            case 5: // Complete
                return (
                    <div className="w-full max-w-6xl text-center animate-fade-in">
                        <CheckCircleIcon className="w-24 h-24 text-green-500 mx-auto" />
                        <h2 className="mt-6 text-3xl font-bold text-gray-800">Generation Complete!</h2>
                        <p className="mt-2 text-gray-600">Your test case scenario document is ready for download.</p>
                        <div className="mt-8 w-full">
                             <h4 className="font-semibold text-gray-700 mb-2 text-left">Final Preview:</h4>
                             <div className="border border-gray-200 rounded-lg bg-white shadow-lg overflow-x-auto max-h-96">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50 sticky top-0">
                                        <tr>{["SN", "Business Process", "Test Scenario", "Description", "Expected Result", "Test Steps"].map(h => <th key={h} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{h}</th>)}</tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {previewData.map((row, rowIndex) => (
                                            <tr key={rowIndex}>
                                                {row.map((cell, cellIndex) => <td key={cellIndex} className="px-4 py-3 whitespace-normal text-sm text-gray-600">{cell}</td>)}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                            <button onClick={handleDownload} className="w-full sm:w-auto bg-green-500 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center transform hover:scale-105">
                                <DownloadIcon className="h-6 w-6 mr-2" />
                                Download
                            </button>
                            <button onClick={onBack} className="w-full sm:w-auto bg-gray-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-colors">
                                Done
                            </button>
                        </div>
                    </div>
                );
            default: return null;
        }
    };

    if (!feature.enabled) {
        return (
             <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl font-bold text-gray-800">{feature.title}</h2>
                <div className="mt-8 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md" role="alert">
                    <p className="font-bold">Work in Progress</p>
                    <p>This feature is currently under development. Here's how it will work:</p>
                </div>
                <div className="mt-6 text-left space-y-4 text-gray-600">
                     <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="flex-shrink-0 bg-[#38dece]/20 text-[#38dece] rounded-full h-10 w-10 flex items-center justify-center font-bold">1</div>
                        <p className="ml-4">User uploads the required input file (e.g., raw notes, BRD).</p>
                    </div>
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="flex-shrink-0 bg-[#38dece]/20 text-[#38dece] rounded-full h-10 w-10 flex items-center justify-center font-bold">2</div>
                        <p className="ml-4">Xplora verifies the document's content and structure.</p>
                    </div>
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="flex-shrink-0 bg-[#38dece]/20 text-[#38dece] rounded-full h-10 w-10 flex items-center justify-center font-bold">3</div>
                        <p className="ml-4">The AI agent processes the input and generates the target document.</p>
                    </div>
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="flex-shrink-0 bg-[#38dece]/20 text-[#38dece] rounded-full h-10 w-10 flex items-center justify-center font-bold">4</div>
                        <p className="ml-4">User can download the final generated file.</p>
                    </div>
                </div>
                <button onClick={onBack} className="mt-10 bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition-colors">
                    Back to Home
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-128px)] py-12 px-4 sm:px-6 lg:px-8">
            {renderStep()}
        </div>
    );
};


export default function App() {
    const [selectedFeature, setSelectedFeature] = useState(null);

    const handleSelectFeature = (feature) => {
        setSelectedFeature(feature);
    };

    const handleGoHome = () => {
        setSelectedFeature(null);
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.6s ease-out forwards;
                }
                 @keyframes table-row-in {
                    from { opacity: 0; transform: translateX(-20px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .animate-table-row-in {
                    animation: table-row-in 0.5s ease-out forwards;
                }
            `}</style>
            <Header onLogoClick={handleGoHome} />
            <main>
                {selectedFeature ? (
                    <FeaturePage feature={selectedFeature} onBack={handleGoHome} />
                ) : (
                    <HomePage onSelectFeature={handleSelectFeature} />
                )}
            </main>
            <footer className="bg-gray-50">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Xplora AI. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}