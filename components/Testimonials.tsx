import React from "react";
import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";
import Review from "./Review";



const Testimonials: React.FC = () => (
    <Carousel className="bg-black text-white py-10 lg:py-20">
        <CarouselItem index={0}>
            <Review by="Confúcio">
            A experiência é uma lanterna dependurada nas costas que apenas ilumina o caminho já percorrido.
            </Review>
        </CarouselItem>
        <CarouselItem index={1}>
            <Review by="William Shakespeare">
                Assim que se olharam, amaram-se; assim que se amaram, suspiraram; assim que suspiraram, perguntaram-se um ao outro o motivo; assim que descobriram o motivo, procuraram o remédio.
            </Review>
        </CarouselItem>
        <CarouselItem index={2}>
            <Review by="Friedrich Nietzsche">
                Nossas dúvidas são traidoras e nos fazem perder o que, com frequência, poderíamos ganhar, por simples medo de arriscar.
            </Review>
        </CarouselItem>
        <CarouselItem index={3}>
            <Review by="Platão">
                Calarei os maldizentes continuando a viver bem; eis o melhor uso que podemos fazer da maledicência.
            </Review>
        </CarouselItem>
    </Carousel>
)

export default Testimonials