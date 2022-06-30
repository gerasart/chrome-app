import '../../assets/styles/global/_global.scss'

export default function Layout({ children }) {
    return (
        <div className="container_app">
            {children}
        </div>
    );
}
