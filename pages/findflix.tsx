export default function StaticSite() {
    return (
        <iframe
            // O caminho é relativo à pasta 'public'
            src="/findflix/index.html"
            style={{ width: '100%', height: '100vh', border: 'none' }}
            title="FindFlix"
        ></iframe>
    );
}