export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <p>Todos os Direitos Reservados - ©{year}</p>
        </footer>
    )
}