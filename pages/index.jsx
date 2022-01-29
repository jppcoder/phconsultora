import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Proposito',
    description:
      '222',
    icon: GlobeAltIcon,
  },
  {
    name: 'Analizamos',
    description:
      '333',
    icon: ScaleIcon,
  },
  {
    name: 'Planificamos',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Acompañamos',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon,
  },
]

export default function Home() {
  return (
  <Layout
    title="PH | Pagina de Inicio "
    description="pagina de inicio"> 

    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Consultora</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Propiedad Horizontal
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Es un equipo de profesionales que se basa en los principios de la ciencia
          para desarrollar nuestra actividad principal, fusionado con el arte buscando analogías
          constantemente, ya que ambas valoran la observación de sus entornos para recopilar
          información a través de los sentidos, ambas aprecian la creatividad, proponen introducir
          cambios, innovaciones y mejoras sobre lo que existe. Y sobre todo utilizan modelos abstractos
          para entender el mundo.<br></br>
          Propiedad para la ciencia refiere a aquellas particularidades que llevan a una determinada materia a modificar su composición.
          <br></br>
          PH traslada esta teoría a grupos de trabajo, identificando a cada uno como propiedad de modificación y de manera horizontal, alentando la participación, liderazgo e información de manera transversal, para crear en consecuencia
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="lg:text-center">
          
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Brindamos soluciones de capacitación, consultoría, coaching, mentoría, organización y mejora de procesos. 
          Dando herramientas sólidas, innovadoras y concretas para la formación integral de equipos o de futuros líderes. 
          </p>
        </div>      
      </div>
    </div>
</Layout>
)
}









/* export default function Home() {
  return (
    <Layout
      
      >
      <p>
        Propiedad horizontal es un equipo de profesionales que se basa en los principios de la ciencia
        para desarrollar nuestra actividad principal, fusionado con el arte buscando analogías
        constantemente, ya que ambas valoran la observación de sus entornos para recopilar
        información a través de los sentidos, ambas aprecian la creatividad, proponen introducir
        cambios, innovaciones y mejoras sobre lo que existe. Y sobre todo utilizan modelos abstractos
        para entender el mundo.
        Propiedad para la ciencia refiere a aquellas particularidades que llevan a una determinada
        materia a modificar su composición.
        PH traslada esta teoría a grupos de trabajo, identificando a cada uno como propiedad de
        modificación y de manera horizontal, alentando la participación, liderazgo e información de
        manera transversal, para crear en consecuencia….
      </p>

      <p>
        EQUIPOS EXITOSOS DE TRABAJO
        CARTA DE PRESENTACION 

        PROPOSITO
        ANALIZAMOS 
        PLANIFICAMOS 
        ACOMPAÑAMOS 

        


        Y TAMBIEN LOS TITULOS DE LO QUE HACEMOS SIN EL DESARROLLO


        CONSULTORIA PARA EMPRESAS 
        *Coaching, liderazgo y gestión de cambios
        *Administración de tiempo
        Neurociencia aplicada al liderazgo
        *Desarrollo de relaciones interpersonales y acuerdos de trabajo 
        *Diseño de capacitaciones personalizadas y dinámicas de equipos. 
        *Generación creativa de ideas – BRAINSTORMING-
        *integración y fortalecimiento de equipos.
        *Inteligencia emocional.  / 
        *Motivación 
        PROCESOS ADMINISTRATIVOS 
        _Competencias comerciales y de ventas
        _Comunicación / 
        _RRHH / Técnicas de selección de RRHH / Conducción de equipos 
        _Marketing / técnicas de ventas 
        _ Desarrollo de procesos administrativos.  
        _ Sistemas // 
        _ Rentabilidad comercial 

      </p>
    </Layout> 
  )
}
 */