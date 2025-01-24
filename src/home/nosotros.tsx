import { Card, CardContent,  CardHeader, CardTitle } from "@/components/ui/card"
import fondopersona from "../assets/fondoperso.jpg"
import deporte from "../assets/iniciocarusel/Quienessomos.png"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import equipo from "../assets/equipos/equipo.jpeg"
import equipo1 from "../assets/equipos/equipo1.jpg"
import React from "react";


function Nosotros() {
    const clubes = [//images para los clubes
        { nombre: "CLUB DE VOLEIBOL ACADEMIA VOLEY KIDS", img: equipo },
        { nombre: "CLUB DE VOLEIBOL ÁGUILAS", img: equipo },
        { nombre: "CLUB DE VOLEIBOL CHIRIGUA VOLEY", img: equipo },
        { nombre: "CLUB DE VOLEIBOL CHIRIGUA VOLEY", img: equipo1 },
        { nombre: "CLUB DE VOLEIBOL WARRIORS", img: equipo },
        { nombre: "CLUB DE VOLEIBOL WARRIORS", img: equipo },
        { nombre: "CLUB DE VOLEIBOL WARRIORS", img: equipo1 },
        { nombre: "CLUB DE VOLEIBOL WARRIORS", img: equipo },
        { nombre: "CLUB DE VOLEIBOL WARRIORS", img: equipo1 },
        { nombre: "CLUB DE VOLEIBOL WARRIORS", img: equipo },
        { nombre: "CLUB DE VOLEIBOL WARRIORS", img: equipo1 },
        { nombre: "CLUB DE VOLEIBOL WARRIORS", img: equipo1 },
        { nombre: "CLUB DE VOLEIBOL WARRIORS", img: equipo },
        // Agrega más clubes según sea necesario
      ];

      const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )
    
  return (
    <div>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 p-8">
            {/* Sección "QUIENES SOMOS" */}
            <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-green-700 mb-4">QUIENES SOMOS</h2>
                <p className="text-gray-700">
                La Federación Colombiana de Voleibol es un organismo deportivo, de derecho privado, sin ánimo de lucro,
                dotado de personería jurídica, reconocimiento deportivo de deportes, con duración indefinida, que cumplió
                todos los trámites público y social, afiliada a la Federación Internacional de Voleibol (FIBV) y la Confederación
                Sudamericana de Voleibol CSV.
                </p>
            </div>

            {/* Imagen */}
            <div className="flex justify-center items-center">
                <img src={deporte} alt="Jugadora de voleibol" className="h-96 w-auto rounded-lg shadow-lg" />
            </div>

            {/* Sección "Misión" y "Visión" */}
            <div className="flex flex-col flex-1 space-y-8">
                {/* Tarjeta Misión */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-center text-blue-700 mb-4">Misión</h3>
                <p className="text-gray-700">
                    La federación promueve y desarrolla la cultura física en el país a través de la práctica del voleibol en sus
                    diferentes modalidades, como un medio para que los atletas se conviertan en líderes que promuevan desarrollo
                    social y contribuyan al mejoramiento de la sociedad.
                </p>
                </div>

                {/* Tarjeta Visión */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-center text-blue-700 mb-4">Visión</h3>
                <p className="text-gray-700">
                    La federación es una organización líder en la estructura del deporte colombiano y sudamericano, con
                    representatividad a todo nivel, con una organización fundamentada en valores éticos altos y el mejoramiento
                    continuo.
                </p>
                </div>
            </div>
        </div>


            {/*///////////////////////////////*/}

            <div>
                <Card>
                    <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold text-green-700">COMITÉ EJECUTIVO</CardTitle>
                        <CardContent>
                            {/* Contenedor flex para alinear las imágenes horizontalmente */}
                            <div className="flex justify-center space-x-4">
                            {/* Imagen y descripción como elementos individuales */}
                                <div className="text-center">
                                    <img
                                    src={fondopersona}
                                    alt="Integrante 1"
                                    className="w-32 h-32 object-cover rounded-full"
                                    />
                                    <p className="mt-2">nestor usiche</p>
                                    <p>PRESIDENTE</p>
                                </div>

                                <div className="text-center">
                                    <img
                                    src={fondopersona}
                                    alt="Integrante 2"
                                    className="w-32 h-32 object-cover rounded-full"
                                    />
                                    <p className="mt-2">Señora Marta</p>
                                    <p>VICEPRESIDENTE</p>
                                </div>

                                <div className="text-center">
                                    <img
                                    src={fondopersona}
                                    alt="Integrante 3"
                                    className="w-32 h-32 object-cover rounded-full"
                                    />
                                    <p className="mt-2">Señora Marta</p>
                                    <p>TECNICO</p>
                                </div>

                                <div className="text-center">
                                    <img
                                    src={fondopersona}
                                    alt="Integrante 4"
                                    className="w-32 h-32 object-cover rounded-full"
                                    />
                                    <p className="mt-2">Señora Marta</p>
                                    <p>SECRETARIA</p>
                                </div>

                                <div className="text-center">
                                    <img
                                    src={fondopersona}
                                    alt="Integrante 4"
                                    className="w-32 h-32 object-cover rounded-full"
                                    />
                                    <p className="mt-2">Señora Marta</p>
                                    <p>VOCERO</p>
                                </div>
                            </div>
                        </CardContent>
                    </CardHeader>
                </Card>
            </div>

            {/*de este div para abajo quiero que me modifiques*/}

            {/* Modificación solicitada */}

            <div>
                <Card>
                    <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold text-green-700">
                        CLUBES
                    </CardTitle>
                    </CardHeader>
                    <CardContent>
                    <Carousel
                     plugins={[plugin.current]}
                     onMouseLeave={plugin.current.reset}
                    >
                        <CarouselContent className="grid grid-flow-col auto-cols-[25%] gap-4">
                        {clubes.map((club, index) => (
                            <CarouselItem key={index} className="flex flex-col items-center space-y-2">
                            <img
                                src={club.img}
                                alt={club.nombre}
                                className="w-32 h-32 object-cover rounded-lg shadow-lg"
                            />
                            <p className="text-center text-sm font-medium text-gray-700">
                                {club.nombre}
                            </p>
                            </CarouselItem>
                        ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                    </CardContent>
                </Card>
            </div>


            

    </div>
    
    
  )
}

export default Nosotros
