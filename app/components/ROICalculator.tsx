'use client';

import { useState } from 'react';

interface CalculatorResults {
    recommendedResources: number;
    monthlyCost: number;
    savings: number;
    additionalCases: number;
    revenuePotential: number;
    roi: number;
}

export default function ROICalculator() {
    const [currentCases, setCurrentCases] = useState<string>('');
    const [avgValue, setAvgValue] = useState<string>('');
    const [currentStaff, setCurrentStaff] = useState<string>('');
    const [staffCost, setStaffCost] = useState<string>('');
    const [showResults, setShowResults] = useState<boolean>(false);
    const [results, setResults] = useState<CalculatorResults | null>(null);

    const calculateROI = () => {
        const cases = parseInt(currentCases) || 0;
        const value = parseInt(avgValue) || 0;
        const staff = parseInt(currentStaff) || 0;
        const cost = parseInt(staffCost) || 0;

        if (!cases || !value) {
            alert('Please fill in at least Current Monthly Cases and Average Case Value');
            return;
        }

        // Calculate recommended resources (1 resource per 20-25 cases)
        const recommendedResources = Math.max(1, Math.ceil(cases / 22));

        // Calculate costs
        const lexgoCost = recommendedResources * 2500;
        const inHouseCost = staff * cost;
        const monthlySavings = Math.max(0, inHouseCost - lexgoCost);
        const annualSavings = monthlySavings * 12;

        // Calculate additional capacity (40% increase)
        const additionalCases = Math.floor(cases * 0.4);
        const revenuePotential = additionalCases * value;

        // Calculate ROI
        const roi = lexgoCost > 0 ? Math.floor((revenuePotential / lexgoCost) * 100) : 0;

        setResults({
            recommendedResources,
            monthlyCost: lexgoCost,
            savings: annualSavings,
            additionalCases,
            revenuePotential,
            roi
        });

        setShowResults(true);
    };

    const formatCurrency = (num: number): string => {
        return '$' + num.toLocaleString();
    };

    return (
        <section className="calculator" id="calculator">
            <div className="container">
                <div className="section-header">
                    <div className="section-label" style={{ color: 'var(--gold)' }}>ROI Calculator</div>
                    <h2 className="section-title" style={{ color: 'var(--white)' }}>See Your Potential Savings</h2>
                    <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>Calculate how much you could save and how many more cases you could handle.</p>
                </div>
                <div className="calculator-container">
                    <div className="calculator-inputs">
                        <div className="input-group">
                            <label htmlFor="current-cases">Current Monthly Cases</label>
                            <input
                                type="number"
                                id="current-cases"
                                placeholder="e.g., 50"
                                min="1"
                                value={currentCases}
                                onChange={(e) => setCurrentCases(e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="avg-value">Average Case Value ($)</label>
                            <input
                                type="number"
                                id="avg-value"
                                placeholder="e.g., 15000"
                                min="1"
                                value={avgValue}
                                onChange={(e) => setAvgValue(e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="current-staff">Current Case Managers</label>
                            <input
                                type="number"
                                id="current-staff"
                                placeholder="e.g., 3"
                                min="0"
                                value={currentStaff}
                                onChange={(e) => setCurrentStaff(e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="staff-cost">Cost Per Manager/Month ($)</label>
                            <input
                                type="number"
                                id="staff-cost"
                                placeholder="e.g., 5000"
                                min="1"
                                value={staffCost}
                                onChange={(e) => setStaffCost(e.target.value)}
                            />
                        </div>
                    </div>
                    <button className="calculate-btn" onClick={calculateROI}>Calculate Your Savings</button>

                    {showResults && results && (
                        <div className="calculator-results active">
                            <h3 className="result-header">Your Custom Solution</h3>
                            <div className="result-grid">
                                <div className="result-item">
                                    <h4>Recommended Resources</h4>
                                    <div className="result-value">{results.recommendedResources}</div>
                                    <p className="result-description">Dedicated specialists</p>
                                </div>
                                <div className="result-item">
                                    <h4>Monthly Cost</h4>
                                    <div className="result-value">{formatCurrency(results.monthlyCost)}</div>
                                    <p className="result-description">vs. in-house costs</p>
                                </div>
                                <div className="result-item">
                                    <h4>Potential Savings</h4>
                                    <div className="result-value">{formatCurrency(results.savings)}</div>
                                    <p className="result-description">per year</p>
                                </div>
                            </div>
                            <div className="result-grid" style={{ marginTop: '2rem' }}>
                                <div className="result-item">
                                    <h4>Additional Capacity</h4>
                                    <div className="result-value">+{results.additionalCases}</div>
                                    <p className="result-description">more cases/month</p>
                                </div>
                                <div className="result-item">
                                    <h4>Revenue Potential</h4>
                                    <div className="result-value">{formatCurrency(results.revenuePotential)}</div>
                                    <p className="result-description">additional monthly revenue</p>
                                </div>
                                <div className="result-item">
                                    <h4>ROI</h4>
                                    <div className="result-value">{results.roi}%</div>
                                    <p className="result-description">return on investment</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
