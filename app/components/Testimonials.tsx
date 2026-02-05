'use client';

export default function Testimonials() {
    const testimonials = [
        {
            text: "We went from handling 50 cases a month to 120 without hiring a single person. LexGo's team integrates seamlessly, and the AI tools have cut our document processing time in half.",
            author: "Managing Partner",
            position: "8-Attorney PI Firm, Florida"
        },
        {
            text: "The onboarding was incredibly smooth. Within two weeks, their team was handling our entire intake process. Our attorneys now spend time on high-value work instead of administrative tasks.",
            author: "Senior Partner",
            position: "12-Attorney PI Firm, Texas"
        },
        {
            text: "We were skeptical about outsourcing, but LexGo's attorney oversight gave us confidence. The quality is consistent, the turnaround is fast, and we're closing cases 40% faster than before.",
            author: "Firm Owner",
            position: "5-Attorney PI Firm, California"
        }
    ];

    return (
        <section className="testimonials">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">Client Success</div>
                    <h2 className="section-title">Trusted by Personal Injury Firms Nationwide</h2>
                </div>
                <div className="testimonial-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial">
                            <p className="testimonial-text">&ldquo;{testimonial.text}&rdquo;</p>
                            <p className="testimonial-author">{testimonial.author}</p>
                            <p className="testimonial-position">{testimonial.position}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
