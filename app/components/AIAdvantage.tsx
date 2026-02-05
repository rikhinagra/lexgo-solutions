'use client';

import { Clock, FileSearch, TrendingUp, FileText } from 'lucide-react';

export default function AIAdvantage() {
    const aiFeatures = [
        {
            icon: Clock,
            title: "24/7 Intake Automation",
            description: "AI-powered chatbots screen and qualify leads around the clock. No more missed opportunities because someone called after hours."
        },
        {
            icon: FileSearch,
            title: "Medical Record Intelligence",
            description: "Automatically extract key facts from hundreds of pages. AI summarizes injuries, treatments, and causation in minutes, not hours."
        },
        {
            icon: TrendingUp,
            title: "Predictive Case Valuation",
            description: "Data-driven settlement ranges based on historical outcomes. Know what a case is worth before you start negotiating."
        },
        {
            icon: FileText,
            title: "Smart Document Generation",
            description: "Demand letters, discovery requests, and client communications auto-drafted from your templates. Review and send in seconds."
        }
    ];

    return (
        <section className="ai-advantage">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">Technology Edge</div>
                    <h2 className="section-title">Powered by AI, Perfected by People</h2>
                    <p className="section-subtitle">Get tomorrow&apos;s legal tech tools, today—included in your service at no extra cost.</p>
                </div>
                <div className="ai-features">
                    {aiFeatures.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div key={index} className="ai-feature">
                                <div className="ai-icon">
                                    <IconComponent size={28} strokeWidth={2} />
                                </div>
                                <div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
