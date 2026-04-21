export interface PrezentationData {
    url: string;
    title: string;
}


export type MarkerType = 'megalopolis' | 'climate';

export interface CustomMarker {
    id: number;
    type: MarkerType; 
    name: string;
    info: string;
    position: {
        lat: number;
        lng: number;
    };
    urlTitle: string;
    canvaPresentations: PrezentationData[];
}

const markers: CustomMarker[] = [
    {
        id: 1,
        type: 'megalopolis', 
        name: "Megalopolisul Boswash",
        position: { lat: 42.361145, lng: -71.057083 },
        info: "FUN FACT :  Linia feroviară Northeast Corridor care leagă aceste orașe este cea mai circulată rută de tren din Statele Unite , O 'autostrada feroviară' a megalopolisului!",
        urlTitle: "boswash", 
        canvaPresentations: [
            {
                url: "https://www.canva.com/design/DAGpUpHWzeU/OJRxN00Kz7jCfrB6C3LYcQ/view?embed",
                title: "boswash-1",
            },
            {
                url: "https://www.canva.com/design/DAGpOyart-Q/K89Jhql_0XiVqRlDgMGDTw/view?embed",
                title: "boswash-2",
            }
        ]
    },
    {
        id: 2,
        type: 'megalopolis', 
        name: "Megalopolisul Japonez",
        position: { lat: 35.652832, lng: 139.817413 },
        info: "FUN FACT :  Această regiune urmează în mare parte traseul istoric al vechiului drum Tōkaidō din perioada Edo (1603–1868), care lega Edo (actualul Tokyo) de Kyoto și era unul dintre cele mai importante drumuri comerciale și administrative din Japonia feudală.",
        urlTitle: "japonia",
        canvaPresentations: [
            {
                url: "https://www.canva.com/design/DAGpUQagaZk/S3mPRZdGdIYHFhwJeYvhug/view?embed",
                title: "tokaido-1",
            },
            {
                url: "https://www.canva.com/design/DAGnzJbB9mk/yZHLdWyPByTSgrt5pkwKzw/view?embed",
                title: "tokaido-2",
            },
            {
                url: "https://www.canva.com/design/DAGnbzrIBHw/uVqbspsVQpmcY4Q7pz0jww/view?embed",
                title: "tokaido-3",
            },
            {
                url: "https://www.canva.com/design/DAGop4DheDQ/Fxz2qngZBMxmpwWm8lI2mQ/view?embed",
                title: "tokaido-4",
            }
        ]
    },
    {
        id: 3,
        type: 'megalopolis', 
        name: "Megalopolis-ul Brazilian",
        position: { lat: -23.5475, lng: -46.63611 },
        info: "FUN FACT :  São Paulo este cel mai mare oraș din Brazilia și din emisfera sudică, cunoscut pentru diversitatea sa culturală, economia puternică și viața de noapte vibrantă. Rio de Janeiro, pe de altă parte, este faimos pentru plajele sale iconice, cum ar fi Copacabana și Ipanema, precum și pentru Carnavalul său anual spectaculos, care atrage milioane de vizitatori din întreaga lume.",
        urlTitle: "brazil",
        canvaPresentations: [
            {
                url: "https://www.canva.com/design/DAGot7b2F4A/1hpT6Ij6ERLaTleCC4Abfw/view?embed",
                title: "brazil-1",
            },
            {
                url: "https://www.canva.com/design/DAGmBl6yqEg/E3Gks4izS8N1Lq4Fg0MlGQ/view?embed",
                title: "brazil-2",
            },
        ]
    },
    {
        id: 4,
        type: 'megalopolis', 
        name: "Blue Banana",
        position: { lat: 50.8503, lng: 4.3517 },
        info: "Blue Banana este o regiune urbană dens populată care se întinde de la sud-vestul Angliei până în Olanda, Belgia, Luxemburg și vestul Germaniei.",
        urlTitle: "blue-banana",
        canvaPresentations: [
            {
                url: "https://www.canva.com/design/DAGpTmWu588/w-tisxpe21gEe8C7WIFI-w/view?embed",
                title: "blue_banana-1",
            },
        ]
    },
    {
        id: 5,
        type: 'megalopolis',
        name: "Aglomeratia Hawaiana",
        position: { lat: 21.3114, lng: -157.8651 },
        info: " FUN FACT :  Honolulu, capitala statului Hawaii, este situată pe insula Oahu și este cunoscută pentru plajele sale frumoase, cum ar fi Waikiki, și pentru cultura sa polineziană vibrantă. Deși Hawaii este cel mai izolat lanț de insule locuite din lume, Honolulu servește ca un important centru de transport și turism în Pacific.",
        urlTitle: "hawai",
        canvaPresentations: [
            {
                url: "https://www.canva.com/design/DAGpUdkqnRs/NyipWvBTyr8ABA5Xfru8pA/view?embed",
                title: "hawai-1",
            },
        ]
    },
    {
        id: 6,
        type: 'megalopolis', 
        name: "Megalopolisul San-San",
        position: { lat: 37.7749, lng: -122.4194 },
        info: " FUN FACT :  San Francisco este faimos pentru podul său Golden Gate, pentru tramvaiele sale istorice și pentru cartierul său divers și vibrant, în timp ce San Jose este cunoscut ca fiind inima Silicon Valley, un centru global pentru tehnologie și inovație.",
        urlTitle: "san-san",
        canvaPresentations: [
            {
                url: "https://www.canva.com/design/DAG1XsNQebI/rdDq52b0a29mWtTBJwtUMg/view?embed",
                title: "san_san-1",
            },
        ]
    },
    {
        id: 7,
        type: 'megalopolis', 
        name: "Megalopolisul Chippitts",
        position: { lat: 41.8832, lng: -87.6324 },
        info: "megalopolisul ChiPitts (denumirea vine de la Chicago–Pittsburgh) este că, deși acoperă mai multe state americane și peste 15 mari zone metropolitane, are o rețea de transport și economie interconectată care o face comparabilă ca influență cu celebrele megalopolisuri „BosWash” (Boston–Washington) și „SanSan” (San Francisco–San Diego).",
        urlTitle: "chippitts",
        canvaPresentations: [
            {
                url: "https://www.canva.com/design/DAG1X7qzQEQ/2LIDli6iTKDj-e-8frnYcg/view?embed",
                title: "chippitts-1",
            },
        ]
    },
    {
        id: 101,
        type: 'climate',
        name: "Mediul Padurilor Ecuatoriale",
        position: { lat: -3.4653, lng: -62.2159 },
        info: "FUN FACT: Pădurile ecuatoriale găzduiesc aproximativ 50% din speciile de plante și animale de pe Pământ, în ciuda faptului că acoperă doar aproximativ 6% din suprafața terestră a planetei.",
        urlTitle: "mediul-ecuatorial",
        canvaPresentations: [
            { url: "https://www.canva.com/design/DAG38vYBb_E/sN1zeqXvtHvIie3jZhg0nA/view?embed", title: "Ecuatorial-1" }
        ]
    },
    {
        id: 102,
        type: 'climate',
        name: "Paduurile Musonice",
        position: { lat: 14.5289, lng: 74.3216 },
        info: "FUN FACT: Pădurile musonice sunt esențiale pentru menținerea echilibrului climatic global, deoarece acționează ca un „plămân verde” care absoarbe cantități uriașe de dioxid de carbon din atmosferă și eliberează oxigen în schimb.",
        urlTitle: "paduri-musonice",
        canvaPresentations: [
            { url: "https://www.canva.com/design/DAG4-c1KD20/HpB25-1wo33aIjiGRD8z7g/view?embed", title: "Musonice-1" }
        ]
    },
    {
        id: 103,
        type: 'climate',
        name: "Mediul Desertic",
        position: { lat: 25.0000, lng: 15.0000 },
        info: "FUN FACT: Deșertul Sahara, cel mai mare deșert cald din lume, acoperă aproximativ 9 milioane de kilometri pătrați și este aproape la fel de mare ca întreaga Statele Unite ale Americii.",
        urlTitle: "climat-desertic",
        canvaPresentations: [
            { url: "https://www.canva.com/design/DAHHeMIUEC0/Nc2yPg7fESu2LAwIW9x85A/view?embed", title: "desertic-1" }
        ]
    },
];

export default markers;