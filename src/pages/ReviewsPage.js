import react from "react";
import PageTransition from '../components/PageTransition';

function ReviewsPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Semua Review Keyboard</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* disini akan diisi ReviewCard */}
            </div>
        </div>
    );
}

export default ReviewsPage;