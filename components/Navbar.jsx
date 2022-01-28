import Link from 'next/link';

export default function Navbar () {
    return (
        
      <nav>
        <Link href="/"> Inicio </Link>
        <Link href="/servicios"> Servicios </Link>
        <Link href="/rrhh"> RRHH </Link>
        <Link href="/contacto"> Contacto </Link>
      </nav>
        
    )
}

