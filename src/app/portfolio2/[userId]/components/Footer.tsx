function Footer({ name }: { name: string }) {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container text-center">
        <p className="text-gray-400">
          © 2024 {name}. Crafted with passion for visual storytelling.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
