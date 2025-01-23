import react from "react";

function CTASection() {
    return (
        <section className="bg-blue-600 text-white py-16">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ingin Mendapatkan Review Keyboard Terbaru?
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Join member KeanuGears untuk mendapatkan informasi rilisan keyboard terbaru dan tips seputar dunia keyboard
                </p>
                <div className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <input
                            type="email"
                            placeholder="Masukkan email Anda..."
                            className="px-4 py-3 rounded-lg flex-grow text-gray-900 focus:outline-none"
                            />
                            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover: bg-blue-50 transition duration-300">
                                Bergabung sekarang
                            </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTASection;