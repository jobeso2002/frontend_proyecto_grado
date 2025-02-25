import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import noticia1 from "@/assets/iniciocarusel/Noticias1.png";
import noticia2 from "@/assets/iniciocarusel/Noticias 2.png";
import noticia3 from "@/assets/iniciocarusel/Noticias3.png";
import equipo from "@/assets/iniciocarusel/jugadores1.png"
import jugadores1 from "@/assets/iniciocarusel/jugadores2.png"
import jugadores2 from "@/assets/iniciocarusel/jugadores3.png"
import Autoplay from "embla-carousel-autoplay"




// Importa tus imágenes aquí
const images = [//aqui estan las imagenes e informacion de noticias 
  {
    img: noticia1,
    title: "Finalizaron los Torneos Departamentales 2024-2",
    description: "Liga Antioqueña de Voleibol El jugador ideal de voleibol tendría que tener una importante inteligencia táctica, tener un buen manejo de los recursos técnicos, ser fuerte mentalmente, y desde el punto de vista social/psicológico, tener una buena relación con el resto de los miembros del equipo y tener una alta eficiencia física.",
  },
  {
    img: noticia2,
    title: "Antioquia brilló en los Campeonatos Nacionales",
    description: "Voleibol Playa Sub-17 y Sub-21",
  },
  {
    img: noticia3,
    title: "Escuela de Voleibol MÁS Voley",
    description: "Inscripciones abiertas. Julio Monsalve, Castilla.",
  },
];

// imagenes de entrenadores y monitores
const trainers = [
  {
    img: equipo
  },
  {
    img: equipo
  },
];
// imagenes de nuestros deportistas
const athletes = [
  {
    img: jugadores1
  },
  {
    img: jugadores2
  },
];


function Inicio() {
      const plugin = React.useRef(
            Autoplay({ delay: 2000, stopOnInteraction: true })
      )

    return (
    <div >
          <div className="flex-grow p-6 bg-gray-100">
            {/* Título de la sección */}
            <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
              Noticias
            </h2>

            {/* Carrusel */}
            <div className="flex items-center justify-center">
              <Carousel className="w-full max-w-5xl">
                <CarouselContent className="grid grid-flow-col auto-cols-[33%] gap-6">
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-2">
                        <Card>
                          {/* Imagen */}
                          <CardContent className="p-4">
                            <img
                              src={image.img}
                              alt={image.title}
                              className="w-80 h-64 object-cover rounded-lg"
                            />
                          </CardContent>
                          {/* Título e información */}
                          <CardHeader>
                            <CardTitle className="text-center text-lg font-bold">
                              {image.title}
                            </CardTitle>
                            <p className="text-center text-sm text-gray-600">
                              {image.description}
                            </p>
                          </CardHeader>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* Controles del carrusel */}
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>

        {/*///////////////////////////////*/}

        <div className="flex-grow p-6 bg-gray-100">
          {/* Título principal */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl font-bold text-green-700">
                CONOCE NUESTRO EQUIPO
              </CardTitle>
            </CardHeader>
          </Card>

          {/* Sección de entrenadores y monitores */}
          <div className="mt-8">
            <h2 className="text-center text-xl font-bold text-gray-800 mb-4">
              Entrenadores y monitores
            </h2>
            <div className="flex justify-center gap-6">
              {trainers.map((trainer, index) => (
                <Card key={index} className="w-80 shadow-md bg-gray-200">
                  <CardContent>
                    <img
                      src={trainer.img}
                      alt={`Entrenador ${index + 1}`}
                      className="rounded-lg min-w-full h-48 object-cover"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sección de nuestros deportistas */}
          <div className="mt-12">
            <h2 className="text-center text-xl font-bold text-gray-800 mb-4">
              Nuestros deportistas
            </h2>
            <div className="flex items-center justify-center">
              <Carousel className="w-full max-w-3xl"
              plugins={[plugin.current]}
              onMouseLeave={plugin.current.reset}>
                <CarouselContent className="grid grid-flow-col auto-cols-[100%]">
                  {athletes.map((athlete, index) => (
                    <CarouselItem key={index}>
                      <Card className="shadow-md bg-gray-200">
                        <CardContent>
                          <img
                            src={athlete.img}
                            alt={`Deportista ${index + 1}`}
                            className="rounded-lg min-w-full h-80 object-contain"
                          />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
      </div>
  
        
    </div>
    );
  }
  
  export default Inicio;
  