export interface PrezentationData {
    url: string;
    title: string;
}

export interface CustomMarker {
    id: number;
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
        name: "Aglomeratia Urbana Hawaiana",
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
];

export default markers;