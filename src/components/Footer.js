import react from "react";

function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* about section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">KeanuGears</h3>
                        <p className="text-gray-400">
                            Portal review keyboard mechanical dengan informasi lengkap dan akurat.
                        </p>
                    </div>
                    {/* links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/reviews" className="text-gray-400 hover:text-white">Reviews</a></li>
                            <li><a href="/comparison" className="text-gray-400 hover:text-white">Perbandingan</a></li>
                            <li><a href="/guides" className="text-gray-400 hover:text-white">Panduan</a></li>
                            <li><a href="/about" className="text-gray-400 hover:text-white">Tentang Kami</a></li>
                        </ul>
                    </div>
                    {/* kategori */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Kategori</h3>
                        <ul className="space-y-2">
                        <li><a href="/category/65%" className="text-gray-400 hover:text-white">65% Layout</a></li>
                        <li><a href="/category/75%" className="text-gray-400 hover:text-white">75% Layout</a></li>
                        <li><a href="/category/tkl" className="text-gray-400 hover:text-white">TKL Layout</a></li>
                        </ul>
                    </div>
                    {/* kontak */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Kontak</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Email: info@keanugears.com</li>
                            <li>Instagram: @keanurksh</li>
                            <li>Tiktok: @keanurksh</li>
                        </ul>
                    </div>
                </div>

                {/* copyright */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 KeanuGears. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;